from sqlalchemy import Boolean, Column, Integer, String, Text, Float

from .session import Base


class Place(Base):
    __tablename__ = "place"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    description = Column(Text, nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
