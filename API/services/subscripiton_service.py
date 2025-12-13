from sqlalchemy.ext.asyncio import AsyncSession 
from crud import subscription_crud as crud
from fastapi import HTTPException
from models.subscription import Subscription, SubscriptionPlan 

async def get_subscriptions(db: AsyncSession):
    try:
        subs = await crud.get_all(db)
        return [Subscription.model_validate(s) for s in subs]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def subscribe(db: AsyncSession, sub: SubscriptionPlan):
    try:
        return await crud.add_sub_plan(db, sub)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))