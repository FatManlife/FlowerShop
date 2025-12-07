from crud import auth_crud as aCrud
from crud import customer_crud as cCrud 
from sqlalchemy.ext.asyncio import AsyncSession
from models.auth import AuthIn
from fastapi import HTTPException

async def create_auth(db: AsyncSession, auth: AuthIn):
    try:
        auth = await aCrud.create(db, auth)

        await cCrud.create(db,auth.id)

        return {"auth_id": auth.id}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))