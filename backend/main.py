from fastapi import FastAPI, Depends
from starlette.requests import Request
import uvicorn

from backend.core import config
from backend.db.session import SessionLocal
from backend.api.api_v1.routers.places import places_router

app = FastAPI(
    title=config.PROJECT_NAME, docs_url="/api/docs", openapi_url="/api"
)


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response


@app.get("/api/v1")
async def root():
    return {"message": "Hello World"}


app.include_router(places_router, prefix="/api/v1", tags=["places"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8888)
