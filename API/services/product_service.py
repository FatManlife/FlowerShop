from sqlalchemy.ext.asyncio import AsyncSession
import crud.product_crud as pCrud
from fastapi import HTTPException

async def get_display(db: AsyncSession):
    try :
        products = await pCrud.get_all_display(db)
        return products
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
