from datetime import datetime, timedelta, timezone
from fastapi import HTTPException
from pydantic import BaseModel
from jose import jwt
from core.config import ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM, pwd

class TokenData(BaseModel):
    sub: str | None = None

def create_access_token(user_id: int):
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {"sub": str(user_id), "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def verify_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return TokenData(sub=payload.get("sub"))
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

def verify_password(password: str, hashed: str):
    return pwd.verify(password,hashed)