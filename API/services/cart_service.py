from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException
from models.cart import CartItem, CartDisplay
from crud import cart_crud as crud

async def add_cart_item(db: AsyncSession, item: CartItem, cart_id: int):
    try:
        await crud.add_item(db,item,cart_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 

async def get_cart_items(db: AsyncSession, cart_id: int):
    try:
       data = await crud.get_cart_items(db,cart_id)
       return [CartDisplay(**item._mapping) for item in data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 

async def update_cart_item(db: AsyncSession, item: CartItem, cart_id: int):
    try:
        await crud.update_item(db,item,cart_id,False)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 

async def delete_cart_item(db: AsyncSession, product_id: int, cart_id: int):
    try:
        return await crud.delete_item(db,product_id,cart_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 

