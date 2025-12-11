from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import get_db 
from services import auth_service as service
from models.auth import AuthIn 


router = APIRouter()

@router.post("/signin")
async def test_db(auth: AuthIn, db: AsyncSession = Depends(get_db)): 
    return  await service.create_auth(db, auth)

@router.post("/login")
async def test_db(auth: AuthIn, db: AsyncSession = Depends(get_db)):    
    return await service.login(db,auth)
