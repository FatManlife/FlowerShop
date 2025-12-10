from sqlalchemy.ext.asyncio import AsyncConnection
from crud import subscription_crud as crud
from fastapi import HTTPException
from models.subscription import Subscription 

async def get_subscriptions(db: AsyncConnection):
    try:
        subs = await crud.get_all(db)
        return [Subscription.model_validate(s) for s in subs]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))