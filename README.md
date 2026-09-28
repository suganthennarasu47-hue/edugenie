# EduGenie: Google Gemini Powered Learning Assistant

EduGenie is an AI-powered learning assistant: a FastAPI backend serving one or more pretrained models, and a lightweight web frontend that talks to it live.

## Epics & Roadmap
| Epic | Scope |
|------|-------|
| 1. Model Selection & Architecture | Choose models, define architecture (`docs/architecture.md`, `docs/model-selection.md`) |
| 2. Core Functionalities | Module implementation, FastAPI backend (`backend/`) |
| 3. Frontend | Web interface, live integration with the API (`frontend/`) |
| 4. Testing & Deployment | Run locally, functional tests, CI (`backend/tests`, `.github/workflows`) |

Detailed issues: see [`docs/issues.md`](docs/issues.md).

## Architecture
```
Browser (frontend/index.html)
   │  fetch /api/predict
   ▼
FastAPI (backend/app/main.py)
   │
   ▼
Model loader (backend/app/modules/model_loader.py)
   │
   ▼
Pretrained model (Hugging Face pipeline by default)
```

## Quick start (run locally)
```bash
git clone <your-repo-url> && cd edugenie
python -m venv .venv && source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload
```
Open http://127.0.0.1:8000 (UI) and http://127.0.0.1:8000/docs (Swagger).

## Tests
```bash
pytest backend/tests -v
```

## Docker
```bash
docker build -t edugenie . && docker run -p 8000:8000 edugenie
```

## Configuration
| Env var | Default | Purpose |
|---------|---------|---------|
| `MODEL_NAME` | `distilbert-base-uncased-finetuned-sst-2-english` | Hugging Face model id |
| `TASK` | `sentiment-analysis` | Pipeline task |

## License
MIT

## Live demo (GitHub Pages)
The `frontend/` folder is a static demo with sample content (no live AI calls). It deploys automatically via `.github/workflows/pages.yml`.
Enable it in **Settings → Pages → Source → GitHub Actions**. Site URL: `https://<your-username>.github.io/<repo-name>/`
