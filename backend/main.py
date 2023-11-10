import logging
from typing import Any, AsyncIterator, List, Optional

import click
import uvicorn
from faker import Faker
from fastapi import Depends, FastAPI, Query
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy import Column, ForeignKey, Integer, String, Text, Float, event, select
from sqlalchemy.engine import Engine
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import Mapped, declarative_base, relationship

from fastapi_filter import FilterDepends, with_prefix
from fastapi_filter.contrib.sqlalchemy import Filter

logger = logging.getLogger("uvicorn")


@event.listens_for(Engine, "connect")
def _set_sqlite_case_sensitive_pragma(dbapi_con, connection_record):
    cursor = dbapi_con.cursor()
    cursor.execute("PRAGMA case_sensitive_like=ON;")
    cursor.close()


engine = create_async_engine("sqlite+aiosqlite:///test3.db")
async_session = async_sessionmaker(engine, class_=AsyncSession)

Base = declarative_base()

fake = Faker()


class Icon(Base):
    __tablename__ = "icon"

    id = Column(Integer, primary_key=True, index=True)
    path = Column(String, nullable=False)


class Place(Base):
    __tablename__ = "place"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    description = Column(Text, nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)


class PlaceOut(BaseModel):
    id: int
    name: str
    age: int
    description: str
    latitude: float
    longitude: float

    class Config:
        orm_mode = True


class PlaceFilter(Filter):
    age__lte: Optional[int] = None

    order_by: List[int] = ["age"]

    class Constants(Filter.Constants):
        model = Place


app = FastAPI()


async def get_db() -> AsyncIterator[AsyncSession]:
    async with async_session() as session:
        yield session


@app.get("/places", response_model=List[PlaceOut])
async def get_addresses(
    place_filter: PlaceFilter = FilterDepends(PlaceFilter),
    db: AsyncSession = Depends(get_db),
) -> Any:
    query = select(Place)
    query = place_filter.filter(query)
    query = place_filter.sort(query)
    result = await db.execute(query)
    return result.scalars().all()


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)