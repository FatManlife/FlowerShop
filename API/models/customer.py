from pydantic import BaseModel
from typing import Optional

class Customer(BaseModel):
    id: int
    name: Optional[str] = None 
    email: Optional[str] = None
    auth_id: int 

class CustomerIn(BaseModel):
    name: Optional[str] = None 
    email: Optional[str] = None
    auth_id: int 