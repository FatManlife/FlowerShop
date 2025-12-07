from sqlalchemy.ext.asyncio import AsyncSession
from orms import CustomerOrm

async def create(db: AsyncSession, auth_id: int):
    db_customer = CustomerOrm(auth_id=auth_id)
    db.add(db_customer)
    await db.commit()
    await db.refresh(db_customer)
    return db_customer