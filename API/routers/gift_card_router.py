from sqlalchemy.ext.asyncio import AsyncSession
from services import gift_card_service as service
from fastapi import APIRouter, Depends, Body
from core.database import get_db

router = APIRouter()

@router.post("")
async def verify_gift_card(payload: dict = Body(...),db:AsyncSession = Depends(get_db)):
    return await service.verify_gift_card(db, payload["name"],payload["customer_id"])