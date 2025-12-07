from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from models.auth import Auth, AuthIn
from orms import AuthOrm

async def get_all_Auth(db: AsyncSession):
    result = await db.execute(text("SELECT * FROM auth"))
    rows = result.fetchall()
    return [Auth(**dict(row._mapping)) for row in rows]

async def create(db: AsyncSession, auth: AuthIn):
    db_auth = AuthOrm(phone=auth.phone, password=auth.password)
    db.add(db_auth) 
    await db.commit()
    await db.refresh(db_auth)  
    return db_auth