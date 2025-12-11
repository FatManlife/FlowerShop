from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from models.auth import Auth, AuthIn
from orms import AuthOrm
from core.config import pwd

async def create(db: AsyncSession, auth: AuthIn):
    hashed = pwd.hash(auth.password)
    db_auth = AuthOrm(phone=auth.phone, password=hashed)
    db.add(db_auth) 
    await db.commit()
    await db.refresh(db_auth)  
    return db_auth.id

async def get_auth_by_phone(db:AsyncSession, phone: str):
    auth = await db.execute(select(AuthOrm).where(AuthOrm.phone == phone))
    return auth.scalars().first()

