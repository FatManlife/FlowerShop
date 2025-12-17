from orms import Base
from core.database import engine, AsyncSessionLocal 
from seeding import seed_products
from contextlib import asynccontextmanager 
from fastapi import FastAPI

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as session:
        await seed_products(session)

    yield 

