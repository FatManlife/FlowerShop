from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import get_db
from services import product_service as service

router = APIRouter()

@router.get("/all")
async def get_display(db: AsyncSession = Depends(get_db)):
    return await service.get_all_display(db)

@router.get("/fresh")
async def get_fresh(db: AsyncSession = Depends(get_db)):
    return await service.get_all_fresh(db)

@router.get("/dried")
async def get_dried(db: AsyncSession = Depends(get_db)):
    return await service.get_all_dried(db)

@router.get("/live")
async def get_live(db: AsyncSession = Depends(get_db)):
    return await service.get_all_live(db)

@router.get("/vase")
async def get_vases(db: AsyncSession = Depends(get_db)):
    return await service.get_all_vases(db)

@router.get("/candle")
async def get_candles(db: AsyncSession = Depends(get_db)):
    return await service.get_all_candles(db)

@router.get("/freshener")
async def get_fresheners(db: AsyncSession = Depends(get_db)):
    return await service.get_all_fresheners(db)

@router.get("/recommendation/{nr}")
async def get_recomandations(nr: int, db: AsyncSession = Depends(get_db)):
    return await service.get_recommendations(db, nr)

@router.get("/{id}")
async def get_details(id: int, db: AsyncSession = Depends(get_db)):
    return await service.get_details(db, id)
