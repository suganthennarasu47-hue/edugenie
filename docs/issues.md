# EduGenie Issue Breakdown

## Epic 1: Model Selection and Architecture
- [ ] **Select AI models** – shortlist 2–3 candidates, benchmark on sample data, record choice in `docs/model-selection.md`
- [ ] Define system architecture diagram – `docs/architecture.md`
- [ ] Define API contract (request/response schemas)

## Epic 2: Core Functionalities Development
- [ ] **Module implementation** – model loader, inference module, input validation
- [ ] **Backend API with FastAPI** – `/api/health`, `/api/predict`, CORS, error handling
- [ ] Add config via environment variables
- [ ] Add logging

## Epic 3: Frontend Development
- [ ] **Build web interface** – input form, submit button, result display, loading/error states
- [ ] **Live integration** – connect UI to `/api/predict` via fetch
- [ ] Basic responsive styling

## Epic 4: Testing and Deployment
- [ ] **Run locally** – README instructions verified on a clean machine
- [ ] **Functional testing** – pytest for API, manual UI checklist
- [ ] CI workflow (GitHub Actions)
- [ ] Dockerfile and container run
- [ ] Optional: deploy (Render / Railway / Hugging Face Spaces)
