from sqlalchemy.ext.asyncio import AsyncSession
from orms import ShippingOrm
from models.shipping import ShippingIn

async def add_shipping(db: AsyncSession, data: ShippingIn):
    shipping = ShippingOrm(
        name=data.name,
        price=data.price,
        phone=data.phone,
        delivery_date=data.delivery_date,
        delivery_time=data.delivery_time,
        apartament_nr=data.apartament_nr,
        street=data.street
    )

    db.add(shipping)
    await db.commit()
    await db.refresh(shipping)

    return shipping.id