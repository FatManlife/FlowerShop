from fastapi import APIRouter, Depends, Body
from sqlalchemy.ext.asyncio import AsyncSession
from models.cart import CartItem
from core.database import get_db
from services import cart_service as service

router = APIRouter()

@router.post("/{cart_id}/item")
async def add_cart_item(cart_id: int, item: CartItem, db:AsyncSession = Depends(get_db)):
    return await service.add_cart_item(db,item,cart_id) 

@router.patch("/{cart_id}/item")
async def add_cart_item(cart_id: int, item: CartItem, db:AsyncSession = Depends(get_db)):
    return await service.update_cart_item(db,item,cart_id) 

@router.delete("/{cart_id}/item")
async def delete_cart_item(cart_id: int, payload: dict = Body(...) , db:AsyncSession = Depends(get_db)):
    return await service.delete_cart_item(db,payload["product_id"],cart_id) 

