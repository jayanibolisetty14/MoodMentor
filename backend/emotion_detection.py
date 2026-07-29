from transformers import pipeline
from text_cleaning import clean_text, is_valid_text

emotion_classifier = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    top_k=None
)

def detect_emotion(text: str):
    if not is_valid_text(text):
        return {"emotion": "neutral", "score": 0.0, "note": "empty or invalid input"}
    
    cleaned = clean_text(text)
    results = emotion_classifier(cleaned)[0]
    
    top_result = max(results, key=lambda x: x['score'])
    
    return {
        "emotion": top_result['label'],
        "score": round(top_result['score'], 4),
        "all_scores": results
    }