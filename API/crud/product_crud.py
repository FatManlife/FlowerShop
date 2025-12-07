from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, union_all
from orms import ProductOrm 

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
