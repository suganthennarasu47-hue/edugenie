import os

MODEL_NAME = os.getenv("MODEL_NAME", "distilbert-base-uncased-finetuned-sst-2-english")
TASK = os.getenv("TASK", "sentiment-analysis")
