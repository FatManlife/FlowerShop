from pydantic import BaseModel

class Auth(BaseModel):
    id: int
    phone: str
    password: str 

class AuthIn(BaseModel):
    phone: str
    password: str 