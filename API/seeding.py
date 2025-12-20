from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from orms import ProductOrm, GiftCardOrm,SubscriptionOrm 
import random

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
    
async def seed_subscriptions(session: AsyncSession):
    result = await session.execute(select(SubscriptionOrm))
    existing = result.scalars().first()
    if existing:
        return 

    subscriptions = [
        {"name": "Basic Plan", "price": 9.99, "description": "Basic subscription plan", "img": "subscriptions/basic.png"},
        {"name": "Standard Plan", "price": 19.99, "description": "Standard subscription plan", "img": "subscriptions/standard.png"},
        {"name": "Premium Plan", "price": 29.99, "description": "Premium subscription plan", "img": "subscriptions/premium.png"},
    ]

    for sub in subscriptions:
        subscription = SubscriptionOrm(
            name=sub["name"],
            price=sub["price"],
            description=sub["description"],
            img=sub.get("img")
        )
        session.add(subscription)

    await session.commit()


async def seed_gift_cards(session: AsyncSession):
    result = await session.execute(select(GiftCardOrm))
    existing = result.scalars().first()
    if existing:
        return

    for i in range(1, 11):
        gift_card = GiftCardOrm(
            name=f"Gift Card {i}",
            discount=round(random.uniform(5, 50), 2),  
            status=random.choice([True, False])        
        )
        session.add(gift_card)

    await session.commit()