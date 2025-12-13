from pydantic import BaseModel
from datetime import date, time

class ShippingIn(BaseModel):
    name: str
    price: float
    phone: str
    delivery_date: date
    delivery_time: time 
    apartament_nr: str
    street: str