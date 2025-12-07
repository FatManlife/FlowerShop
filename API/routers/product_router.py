from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import get_db
from services import product_service as service

router = APIRouter()

@router.get("/display")
async def get_display(db: AsyncSession = Depends(get_db)):
    return await service.get_all_display(db)

@router.get("/recommendation")
async def get_recomandations(db: AsyncSession = Depends(get_db)):
    return await service.get_recommendations(db)

@router.get("/{id}")
async def get_details(id: int, db: AsyncSession = Depends(get_db)):
    return await service.get_details(db, id)
