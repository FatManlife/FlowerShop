from sqlalchemy.ext.asyncio import AsyncSession
from orms import GiftCardOrm, CustomerGiftCardOrm
from sqlalchemy import select

async def get_gift(db: AsyncSession, gift: str):
    data = await db.execute(select(GiftCardOrm).where(GiftCardOrm.name == gift))

    gift_card = data.scalars().first() 

    if not gift_card:
        raise ValueError("Gift card doesn't exist")

    return gift_card 

async def get_gift_by_id(db: AsyncSession, gift_id: int):
    data = await db.execute(select(GiftCardOrm).where(GiftCardOrm.id == gift_id))

    gift_card = data.scalars().first() 

    if not gift_card:
        raise ValueError("Gift card doesn't exist")

    return gift_card 

async def redeem_gift(db: AsyncSession, gift_id: int, customer_id:int):
    if not await get_redeemed(db, gift_id, customer_id):
        return 

    customer_gift = CustomerGiftCardOrm(customer_id= customer_id, gift_card_id=gift_id)
    db.add(customer_gift)

    await db.commit()
    await db.refresh(customer_gift)

async def get_redeemed(db: AsyncSession, gift_id: int, customer_id: int):
    data = await db.execute(
    select(CustomerGiftCardOrm)
    .where(CustomerGiftCardOrm.customer_id == customer_id)
    .where(CustomerGiftCardOrm.gift_card_id == gift_id)
    )

    redeemed = data.scalars().first()

    if redeemed:
        return False

    return await get_gift_by_id(db, gift_id) 
