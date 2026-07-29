from fastapi import APIRouter
from pydantic import BaseModel
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))

from emotion_detection import detect_emotion
from emotion_mapping import map_to_wellness_category
from recommendations import get_recommendation

router = APIRouter()

class TextInput(BaseModel):
    text: str

@router.get("/ping")
def ping():
    return {"status": "AI routes working"}

@router.post("/emotion")
def get_emotion(input: TextInput):
    result = detect_emotion(input.text)
    category = map_to_wellness_category(result['emotion'], result['score'])
    return {
        "emotion": result['emotion'],
        "confidence": result['score'],
        "wellness_category": category
    }
@router.post("/recommendation")
def recommend(input: TextInput):
    result = detect_emotion(input.text)
    category = map_to_wellness_category(result['emotion'], result['score'])
    recommendation = get_recommendation(category)
    return {
        "wellness_category": category,
        "recommendation": recommendation
    }