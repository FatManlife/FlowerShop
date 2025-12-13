from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import APIRouter, Depends, Body
from core.database import get_db
from services import order_service as service
from models.order import OrderReq 

router = APIRouter()

@router.post("")
async def add_order(order: OrderReq, db: AsyncSession = Depends(get_db)):
    return await service.add_order(db, order) 