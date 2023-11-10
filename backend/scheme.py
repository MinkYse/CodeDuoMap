from pydantic import BaseModel


class PlaceOut(BaseModel):
    id: int
    name: str
    age: int
    description: str
    latitude: float
    longitude: float

    class Config:
        orm_mode = True