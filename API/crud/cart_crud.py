from sqlalchemy.ext.asyncio import AsyncSession
from models.cart import CartItem
from orms import CartOrm, CartItemOrm
from sqlalchemy import select, delete
from orms import ProductOrm

async def create(db: AsyncSession, customer_id: int):
    db_cart = CartOrm(customer_id=customer_id)
    db.add(db_cart)
    await db.commit()
    await db.refresh(db_cart)

async def add_item(db: AsyncSession, item: CartItem, cart_id:int):
    if await update_item(db,item,cart_id,True):
        return

    cart_item = CartItemOrm(product_id=item.product_id, quantity=item.quantity, cart_id=cart_id)

    db.add(cart_item)
    await db.commit()
    await db.refresh(cart_item)

async def get_item(db:AsyncSession, product_id: int, cart_id: int):
    cart_item = await db.execute(select(CartItemOrm).where(CartItemOrm.product_id == product_id and CartItemOrm.cart_id==cart_id))
    return cart_item.scalars().first()

async def update_item(db:AsyncSession, item: CartItem, cart_id: int, add:bool):
    cart_item = await get_item(db, item.product_id,cart_id)

    if not cart_item:
        return False    

    if add:
        cart_item.quantity += item.quantity
    else:
        cart_item.quantity = item.quantity

    await db.commit()
    await db.refresh(cart_item)

    return True

async def delete_item(db:AsyncSession, product_id:int, cart_id: int):
    cart_item = await get_item(db, product_id,cart_id)

    if not cart_item:
        raise ValueError("Item not found")

    await db.delete(cart_item)
    await db.commit()

    return {"message": "item delete successfully"}

async def get_cart_items(db:AsyncSession, cart_id : int):
    result = await db.execute(
        select(
            CartItemOrm.quantity,
            ProductOrm.name,
            ProductOrm.price,
            ProductOrm.img,
            ProductOrm.id.label("product_id"),
            CartItemOrm.cart_id.label("cart_id"),
            CartItemOrm.id
        )
        .join(ProductOrm)
        .where(CartItemOrm.cart_id == cart_id)
    )

    return result.fetchall()

async def delete_items(db:AsyncSession, cart_id: int):
    await db.execute(delete(CartItemOrm).where(CartItemOrm.cart_id == cart_id))
    await db.commit()

    return {"message": "items delete successfully"}
