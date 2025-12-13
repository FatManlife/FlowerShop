from pydantic import BaseModel

class GiftCard(BaseModel):
    id: int
    name: str
    discount: float 
    stauts: bool