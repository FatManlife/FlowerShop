from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, union_all
from orms import ProductOrm, CustomerOrm, CartItemOrm
from models.cart import CartItemOut

async def get_all_display(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category))
    products = result.all()
    return products

async def get_all_fresh_flowers(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category).where(ProductOrm.category == "fresh"))
    products = result.all()
    return products

async def get_all_dried_flowers(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category).where(ProductOrm.category == "dried"))
    products = result.all()
    return products

async def get_all_live_plants(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category).where(ProductOrm.category == "live"))
    products = result.all()
    return products

async def get_all_vases(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category).where(ProductOrm.category == "vase"))
    products = result.all()
    return products

async def get_all_candles(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category).where(ProductOrm.category == "candle"))
    products = result.all()
    return products

async def get_all_fresheners(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name,ProductOrm.category).where(ProductOrm.category == "freshener"))
    products = result.all()
    return products   

async def get_details(db: AsyncSession, id: int):
    result = await db.execute(select(ProductOrm).where(ProductOrm.id == int(id)))
    product = result.scalar_one_or_none()
    return product

async def get_recommendations(db: AsyncSession, nr: int):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name).order_by(func.random()).limit(nr))
    recommendations = result.all()
    return recommendations

async def get_all_by_cart_item(db: AsyncSession, items: list[CartItemOut]):
    products = []

    for item in items:
        product = await db.execute(select(ProductOrm.price, ProductOrm.name, CartItemOrm.quantity)
                                .join(CartItemOrm)
                                .where(ProductOrm.id == item.product_id))

        products.append(product.first()._mapping) 

    return products