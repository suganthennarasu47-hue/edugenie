from fastapi.testclient import TestClient

from backend.app import main
from backend.app.main import app

client = TestClient(app)


def test_health():
    r = client.get("/api/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_predict_valid(monkeypatch):
    monkeypatch.setattr(main, "run_inference", lambda t: {"label": "POSITIVE", "score": 0.99})
    r = client.post("/api/predict", json={"text": "I love this"})
    assert r.status_code == 200
    assert r.json() == {"label": "POSITIVE", "score": 0.99}


def test_predict_empty_rejected():
    assert client.post("/api/predict", json={"text": ""}).status_code == 422


def test_index_served():
    assert client.get("/").status_code == 200
