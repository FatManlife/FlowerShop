from sqlalchemy.ext.asyncio import AsyncSession
import crud.product_crud as pCrud
from fastapi import HTTPException
from models.product import Product,ProductDisplay

async def get_all_display(db: AsyncSession):
    try :
        products = await pCrud.get_all_display(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_details(db: AsyncSession, id:int):
    try:
        product = await pCrud.get_details(db,id) 
    except Exception as e:
       raise HTTPException(status_code=500, detail=str(e))

    if not product: 
        raise HTTPException(status_code=404, detail="Product not found")

    return Product.model_validate(product)

async def get_recommendations(db: AsyncSession):
    try :
        recommendations  = await pCrud.get_recommendations(db)
        return [ProductDisplay(**r._mapping) for r in recommendations]
    
    except Exception as e:
        raise HTTPException(status_code=505, detail=str(e))