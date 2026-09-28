# EduGenie Architecture
- **Frontend**: static HTML/CSS/JS served by FastAPI; calls `/api/predict`.
- **Backend**: FastAPI app (`backend/app/main.py`) with Pydantic validation.
- **Modules**: `model_loader.py` (cached model load), `inference.py` (prediction logic).
- **Model**: Hugging Face pipeline, configurable via `MODEL_NAME` and `TASK`.
- **Deployment**: Docker image; CI runs pytest on every push.
