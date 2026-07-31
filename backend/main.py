from fastapi import FastAPI
from app.routes.auth_routes import router as auth_router
from app.routes import journal
from app.routes import mood
from app.routes import report
from app.routes import profile
from app.routes import hr
from routes import ai

app = FastAPI(title="MoodMentor API")

app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(journal.router)
app.include_router(mood.router)
app.include_router(report.router)
app.include_router(profile.router)
app.include_router(hr.router)
app.include_router(ai.router)

@app.get("/")
def home():
    return {
        "message": "MoodMentor Backend Running Successfully 🚀"
    }