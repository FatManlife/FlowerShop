from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException
from crud import gift_crud as crud

async def verify_gift_card(db: AsyncSession, gift_name: str, customer_id:int):
    try :
        gift_card = await crud.get_gift(db,gift_name)
        return await crud.get_redeemed(db,gift_card.id,customer_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))