from sqlalchemy.ext.asyncio import AsyncSession
from orms import PaymentOrm
from models.payment import PaymentIn

async def add_payment(db: AsyncSession, data: PaymentIn):
    payment = PaymentOrm(card_number=data.card_number, month_year=data.month_year, cvv=data.cvv) 

    db.add(payment)
    await db.commit()
    await db.refresh(payment)

    return payment.id