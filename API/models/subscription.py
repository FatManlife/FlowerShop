from pydantic import BaseModel
from typing import Optional

class Subscription(BaseModel):
    id: int
    price: float 
    name: str
    description: str
    img: Optional[str]

    model_config = {
        "from_attributes" : True
    }
