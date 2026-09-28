"""Epic 1/2: model selection + loading. Swap MODEL_NAME/TASK to change models."""
from functools import lru_cache

from ..config import MODEL_NAME, TASK


@lru_cache(maxsize=1)
def get_model():
    from transformers import pipeline  # lazy import keeps startup/tests fast
    return pipeline(TASK, model=MODEL_NAME)
