from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from models.product import ProductDisplay 
from orms import ProductOrm 

async def get_all_display(db: AsyncSession):
    result = await db.execute(select(ProductOrm.id,ProductOrm.price,ProductOrm.img,ProductOrm.name))
    products = result.all()
    return [ProductDisplay(**product._mapping) for product in products]
    