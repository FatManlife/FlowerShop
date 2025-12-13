from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from orms import OrderOrm, OrderItemOrm
from models.order import OrderIn, OrderItems

async def add_order(db: AsyncSession, data: OrderIn) -> OrderOrm:
    order = OrderOrm(
        email=data.email,
        name=data.name,
        phone=data.phone,
        total_amount=data.total_amount,
        gift_card_id=data.gift_card_id,
        customer_id=data.customer_id,
        payment_id=data.payment_id,
        shipping_id=data.shipping_id
    )

    db.add(order)
    await db.commit()
    await db.refresh(order)  

    return order.id

async def add_items(db: AsyncSession, data: OrderItems):
    
    for item in data.items:
        order_item = OrderItemOrm(
            order_id=data.order_id,
            name=item.name,
            price=item.price,
            quantity=item.quantity
        )
        db.add(order_item)
    
    await db.commit()