from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .config import MODEL_NAME
from .modules.inference import run_inference
from .schemas import PredictRequest, PredictResponse

app = FastAPI(title="EduGenie", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

FRONTEND = Path(__file__).resolve().parents[2] / "frontend"


@app.get("/api/health")
def health():
    return {"status": "ok", "model": MODEL_NAME}


@app.post("/api/predict", response_model=PredictResponse)
def predict(req: PredictRequest):
    try:
        return run_inference(req.text)
    except Exception as exc:  # surface model errors cleanly
        raise HTTPException(status_code=500, detail=str(exc))


app.mount("/static", StaticFiles(directory=FRONTEND), name="static")


@app.get("/")
def index():
    return FileResponse(FRONTEND / "index.html")
