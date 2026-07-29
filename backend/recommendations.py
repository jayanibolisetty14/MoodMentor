RECOMMENDATIONS = {
    "Happy": {
        "music": ["Upbeat Pop Playlist", "Feel Good Hits"],
        "activity": ["Share your win with a friend", "Write down what made you happy today"],
    },
    "Stress": {
        "music": ["Calm Piano", "Lo-fi Chill Beats"],
        "activity": ["Try a 5-minute breathing exercise", "Take a short walk outside"],
        "breathing": "Inhale for 4 seconds, hold for 4, exhale for 6. Repeat 5 times.",
    },
    "Frustration": {
        "music": ["Relaxing Instrumentals", "Nature Sounds"],
        "activity": ["Step away for a 5-minute break", "Try journaling what's bothering you"],
        "breathing": "Inhale for 4 seconds, hold for 7, exhale for 8. Repeat 4 times.",
    },
    "Neutral": {
        "music": ["Ambient Focus", "Easy Listening"],
        "activity": ["Try a short mindfulness check-in", "Set one small goal for today"],
    },
}

def get_recommendation(category: str):
    return RECOMMENDATIONS.get(category, RECOMMENDATIONS["Neutral"])