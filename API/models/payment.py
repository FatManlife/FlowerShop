from pydantic import BaseModel
from typing import Optional

class PaymentIn(BaseModel):
    card_number: str 
    month_year: str
    cvv: str