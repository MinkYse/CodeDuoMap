from fastapi_filter.contrib.sqlalchemy import Filter

from backend.db.models import Place

from typing import Optional, List


class PlaceFilter(Filter):
    age__lte = Optional[int] = None

    order_by: List[str] = ["age"]

    class Constants(Filter.Constants):
        model = Place
