from fastapi import APIRouter
from app.database.connection import mood_collection
from datetime import datetime, timedelta

router = APIRouter(
    prefix="/hr",
    tags=["HR Dashboard"]
)


@router.get("/summary")
async def get_hr_summary():
    """
    Anonymous, aggregated wellness stats across all employees.
    Used for the HR Dashboard - no individual employee data exposed.
    """

    employee_count = len(mood_collection.distinct("employee_id"))
    total_entries = mood_collection.count_documents({})

    if total_entries == 0:
        return {
            "employee_count": 0,
            "total_entries": 0,
            "average_mood": "No data",
            "happy_percent": 0,
            "stress_percent": 0,
            "burnout_percent": 0,
        }

    category_counts = {}
    for doc in mood_collection.find({}, {"wellness_category": 1}):
        category = doc.get("wellness_category", "Neutral")
        category_counts[category] = category_counts.get(category, 0) + 1

    happy_count = category_counts.get("Happy", 0)
    stress_count = category_counts.get("Stress", 0)

    happy_percent = round((happy_count / total_entries) * 100, 1)
    stress_percent = round((stress_count / total_entries) * 100, 1)

    thirty_days_ago = datetime.utcnow() - timedelta(days=30)

    pipeline = [
        {
            "$match": {
                "wellness_category": {"$in": ["Stress", "Frustration"]},
                "created_at": {"$gte": thirty_days_ago},
            }
        },
        {
            "$group": {
                "_id": "$employee_id",
                "negative_count": {"$sum": 1},
            }
        },
        {
            "$match": {
                "negative_count": {"$gte": 3}
            }
        },
    ]

    burnout_employees = list(mood_collection.aggregate(pipeline))
    burnout_percent = (
        round((len(burnout_employees) / employee_count) * 100, 1)
        if employee_count > 0 else 0
    )

    average_mood = max(category_counts, key=category_counts.get)

    return {
        "employee_count": employee_count,
        "total_entries": total_entries,
        "average_mood": average_mood,
        "happy_percent": happy_percent,
        "stress_percent": stress_percent,
        "burnout_percent": burnout_percent,
    }