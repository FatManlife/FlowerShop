from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, union_all
from orms import ProductOrm, CustomerOrm, CartItemOrm
from models.cart import CartItemOut

async def get_all_display(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name).where(ProductOrm.category == "Flowers"))
    products = result.all()
    return products
    
async def get_details(db: AsyncSession, id: int):
    result = await db.execute(select(ProductOrm).where(ProductOrm.id == int(id)))
    product = result.scalar_one_or_none()
    return product

async def get_recommendations(db: AsyncSession):
    q1 = select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name).where(ProductOrm.category == "scented candles").order_by(func.random()).limit(4)
    q2 = select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name).where(ProductOrm.category == "vase").order_by(func.random()).limit(10)

    stmt = union_all(q1,q2)
    recommendations =  await db.execute(stmt)

    return recommendations

async def get_all_by_cart_item(db: AsyncSession, items: list[CartItemOut]):
    products = []

    for item in items:
        product = await db.execute(select(ProductOrm.price, ProductOrm.name, CartItemOrm.quantity)
                                .join(CartItemOrm)
                                .where(ProductOrm.id == item.product_id))

        products.append(product.first()._mapping) 

    return products