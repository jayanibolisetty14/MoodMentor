from dotenv import load_dotenv
load_dotenv()

import os
import json
from google import genai

client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

def generate_motivation(emotion: str):
    prompt = f"User is feeling {emotion}. Generate a JSON response with these exact fields: motivational_message, wellness_advice, affirmation, daily_goal. Keep each field to 1-2 sentences, supportive tone, no clinical language."
    
    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=prompt,
    )
    
    text = response.text.strip()
    if text.startswith("```"):
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:]
    
    return json.loads(text.strip())