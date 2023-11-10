from pydantic import BaseModel
import typing as t


class Place(BaseModel):
    id: int
    name: str
    age: int
    description: str
    latitude: str
    longitude: str

    class Config:
        orm_mode = True