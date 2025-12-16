from sqlalchemy.ext.asyncio import AsyncSession
import crud.product_crud as pCrud
from fastapi import HTTPException
from models.product import Product,ProductDisplay

#get all products
async def get_all_display(db: AsyncSession):
    try :
        products = await pCrud.get_all_display(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_fresh(db: AsyncSession):
    try :
        products = await pCrud.get_all_fresh_flowers(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_dried(db: AsyncSession):
    try :
        products = await pCrud.get_all_dried_flowers(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_live(db: AsyncSession):
    try :
        products = await pCrud.get_all_live_plants(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_vases(db: AsyncSession):
    try :
        products = await pCrud.get_all_vases(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_candles(db: AsyncSession):
    try :
        products = await pCrud.get_all_candles(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_all_fresheners(db: AsyncSession):
    try :
        products = await pCrud.get_all_fresheners(db)
        return [ProductDisplay(**p._mapping) for p in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#get particular
async def get_details(db: AsyncSession, id:int):
    try:
        product = await pCrud.get_details(db,id) 
    except Exception as e:
       raise HTTPException(status_code=500, detail=str(e))

    if not product: 
        raise HTTPException(status_code=404, detail="Product not found")

    return Product.model_validate(product)

async def get_recommendations(db: AsyncSession, nr: int):
    try :
        recommendations  = await pCrud.get_recommendations(db, nr)
        return [ProductDisplay(**r._mapping) for r in recommendations]
    
    except Exception as e:
        raise HTTPException(status_code=505, detail=str(e))