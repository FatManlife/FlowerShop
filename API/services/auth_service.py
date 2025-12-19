from crud import auth_crud as auth_crud 
from crud import customer_crud as customer_crud 
from crud import cart_crud as cart_crud 
from sqlalchemy.ext.asyncio import AsyncSession
from models.auth import AuthIn
from fastapi import HTTPException
from services import auth as sAuth

async def create_auth(db: AsyncSession, auth: AuthIn):
    exists = await auth_crud.get_auth_by_phone(db,auth.phone)

    if exists:
        raise HTTPException(status_code=400, detail="Phone already registered")

    try:
        auth_id = await auth_crud.create(db, auth)

        customer_id = await customer_crud.create(db,auth_id)

        await cart_crud.create(db,customer_id) 

        return {"auth_id": auth_id}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
async def login(db: AsyncSession, auth: AuthIn):
    user = await auth_crud.get_auth_by_phone(db,auth.phone)

    if not user or not sAuth.verify_password(auth.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid phone or password")
    
    token = sAuth.create_access_token(user.id) 
    return {"access_token": token, "token_type": "bearer"}

async def verify_phone(db: AsyncSession, phone: str):
    user = await auth_crud.get_auth_by_phone(db,phone)

    if not user:
        return {"available" : True} 

    return {"available": False}