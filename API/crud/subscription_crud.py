from sqlalchemy.ext.asyncio import AsyncConnection
from sqlalchemy import Select
from orms import SubscriptionOrm as orm

async def get_all(db: AsyncConnection):
    data = await db.execute(Select(orm))
    subs = data.scalars().all()
    return subs