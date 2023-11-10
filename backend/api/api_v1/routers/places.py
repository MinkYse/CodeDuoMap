from fastapi import APIRouter, Depends
from fastapi_filter import FilterDepends
from backend.db.session import get_db
import typing as t
from typing import Any
from backend.db.schemas import Place
from backend.api.filters import PlaceFilter
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

places_router = APIRouter()

@places_router.get("/place", response_model=t.List[Place])
async def get_place(
        place_filter: PlaceFilter = FilterDepends(PlaceFilter),
        db: AsyncSession = Depends(get_db),) -> Any:
    query = select(Place)
    query = place_filter.filter(query)
    query = place_filter.filter(query)
    result = await db.execute(query)
    return result.scalar().all()
