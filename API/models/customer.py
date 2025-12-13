from pydantic import BaseModel
from typing import Optional

class Customer(BaseModel):
    id: int
    auth_id: int 

class CustomerIn(BaseModel):
    auth_id: int 
