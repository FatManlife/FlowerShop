from sqlalchemy.ext.asyncio import AsyncSession 
from services import subscripiton_service as service
from fastapi import APIRouter, Depends
from models.subscription import SubscriptionPlan
from core.database import get_db

router = APIRouter()

@router.get("")
async def get_subscriptions(db: AsyncSession = Depends(get_db)):
    sub = await service.get_subscriptions(db)
    return sub

@router.post("")
async def subscribe(sub: SubscriptionPlan ,db: AsyncSession = Depends(get_db)):
    return await service.subscribe(db, sub)
