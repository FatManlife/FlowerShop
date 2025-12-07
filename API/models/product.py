from pydantic import BaseModel
from typing import Optional

class Product(BaseModel):
    id: int
    name: str
    description: str
    category: str
    price: float
    img: Optional[str]

    model_config = {
        "from_attributes": True
    }

class ProductDisplay(BaseModel):
    id: int
    name: str
    price: float
    img: Optional[str]

    