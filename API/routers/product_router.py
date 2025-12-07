from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import get_db
from services import product_service as serivice

router = APIRouter()

@router.get("/display")
async def get_display(db: AsyncSession = Depends(get_db)):
    return await serivice.get_display(db)