from fastapi import FastAPI
from routes import ai

app = FastAPI(title="MoodMentor API")

app.include_router(ai.router)

@app.get("/")
def home():
    return {"message": "MoodMentor API is running"}