from fastapi import APIRouter, Depends, Body
from sqlalchemy.ext.asyncio import AsyncSession
from models.cart import CartItem
from core.database import get_db
from services import cart_service as service

router = APIRouter()

@router.get("/{cart_id}/item")
async def get_car_items(cart_id: int, db:AsyncSession = Depends(get_db)):
    return await service.get_cart_items(db,cart_id) 

@router.post("/{cart_id}/item")
async def add_cart_item(cart_id: int, item: CartItem, db:AsyncSession = Depends(get_db)):
    return await service.add_cart_item(db,item,cart_id) 

@router.patch("/{cart_id}/item")
async def add_cart_item(cart_id: int, item: CartItem, db:AsyncSession = Depends(get_db)):
    return await service.update_cart_item(db,item,cart_id) 

@router.delete("/{cart_id}/item/{product_id}")
async def delete_cart_item(cart_id: int, product_id: int, db:AsyncSession = Depends(get_db)):
    return await service.delete_cart_item(db,product_id,cart_id) 
