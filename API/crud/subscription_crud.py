from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from orms import SubscriptionOrm, SubscriptionPlanOrm
from models.subscription import SubscriptionPlan


async def get_all(db: AsyncSession):
    result = await db.execute(select(SubscriptionOrm))
    return result.scalars().all()


async def get_subscription(db: AsyncSession, subscription_id: int):
    result = await db.execute(
        select(SubscriptionOrm).where(SubscriptionOrm.id == subscription_id)
    )
    return result.scalar_one_or_none()

async def already_sub(db: AsyncSession, subscription_id: int, customer_id: int):
    result = await db.execute(
        select(SubscriptionPlanOrm).where(SubscriptionPlanOrm.subscription_id== subscription_id and
                                          SubscriptionPlanOrm.customer_id == customer_id)
    )

    return result.scalar_one_or_none()

async def add_sub_plan(db: AsyncSession, sub: SubscriptionPlan):
    if not get_subscription(db, sub.subscription_id):
        return

    if await already_sub(db, sub.subscription_id, sub.customer_id):
        return

    plan = SubscriptionPlanOrm(
        frequency=sub.frequency,
        quantity=sub.quantity,
        customer_id=sub.customer_id,
        subscription_id=sub.subscription_id
    )

    db.add(plan)
    await db.commit()
    await db.refresh(plan)

    return {"success": "subscription added succesfully"}
