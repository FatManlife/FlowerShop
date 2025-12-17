from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from orms import ProductOrm  

categories = ["candle", "dried", "freshener", "fresh", "live", "vase"]

async def seed_products(session: AsyncSession):
    result = await session.execute(select(ProductOrm))
    existing = result.scalars().first()

    if existing:
        return

    for category in categories:
        for i in range(1, 11):  
            product = ProductOrm(
                name=f"{category.capitalize()} Product {i}",
                description=f"Description for {category} product {i}",
                category=category,
                price=10 * i,  
                img=f"{category}/1.png" 
            )
            session.add(product)
            
    await session.commit()
