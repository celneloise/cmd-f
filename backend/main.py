# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np

app = FastAPI()

# Allow React dev server to access backend
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure answers are a list of integers
class Answers(BaseModel):
    answers: list[int]

@app.post("/predict")
def predict(data: Answers):
    arr = np.array(data.answers)
    total_score = arr.sum()
    
    # Determine risk level
    if total_score <= 4:
        risk = "Low"
    elif total_score <= 9:
        risk = "Medium"
    else:
        risk = "High"
    
    # Probability as fraction of max score (16 questions * 3 max = 48)
    probability = total_score / (len(arr) * 3)
    return {"risk": risk, "probability": float(probability)}