from sqlalchemy.ext.asyncio import AsyncConnection
from services import subscripiton_service as service
from fastapi import APIRouter, Depends
from core.database import get_db

router = APIRouter()

@router.get("")
async def get_subscriptions(db: AsyncConnection = Depends(get_db)):
    sub = await service.get_subscriptions(db)
    return sub
