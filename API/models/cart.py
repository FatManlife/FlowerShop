from pydantic import BaseModel

class CartItem(BaseModel):
    product_id: int
    quantity: int

class CartItemOut(BaseModel):
    id: int
    product_id: int
    quantity: int

class CartDisplay(BaseModel):
    id: int
    cart_id: int
    product_id: int
    name: str
    quantity: int
    price: float
    img: str
