from pydantic import BaseModel
from typing import Optional
from models.payment import PaymentIn
from models.shipping import ShippingIn

class OrderReq(BaseModel):
    email: Optional[str] 
    name : Optional[str]
    phone: str
    total_amount: float
    customer_id: int  
    gift_card_id: Optional[int]
    shipping: ShippingIn
    payment: PaymentIn
   

class OrderIn(BaseModel):
    email: Optional[str] 
    name : Optional[str] 
    phone: str
    total_amount: float
    gift_card_id: Optional[int]
    customer_id: int 
    payment_id: int 
    shipping_id: int

class OrderItem(BaseModel):
    name: str
    price: float
    quantity: int
    
class OrderItems(BaseModel):
    order_id: int
    items: list[OrderItem]

