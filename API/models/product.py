from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    description: str
    category: str
    price: float
    img: str

class ProductDisplay(BaseModel):
    id: int
    name: str
    price: float
    img: str