"""Epic 2: core functionality module."""
from .model_loader import get_model


def run_inference(text: str) -> dict:
    result = get_model()(text)[0]
    return {"label": result["label"], "score": round(float(result["score"]), 4)}
