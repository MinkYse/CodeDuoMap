#!/usr/bin/env python3


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import pandas as pd

from main import Place

data = pd.read_excel('sight.xlsx')

data_colums = ["id", "Название", "Год", "Ширина", "Долгота", "Описание"]

def init() -> None:
    engine = create_engine(
        'sqlite:///test3.db',
    )
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = SessionLocal()

    for index, row in data.iterrows():
        db_place = Place(
            name=row[data_colums[1]],
            age=int(row[data_colums[2]]),
            description=row[data_colums[5]],
            latitude=float(row[data_colums[3]]),
            longitude=float(row[data_colums[4]])
        )
        db.add(db_place)
        db.commit()
        db.refresh(db_place)


if __name__ == "__main__":
    print("Create data")
    init()
    print("Superuser created")