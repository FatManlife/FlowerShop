from fastapi import FastAPI
from contextlib import asynccontextmanager
from routers.auth_router import router as arouter 
from routers.product_router import router as prouter 
from routers.subscription_router import router as srouter 
from routers.cart_router import router as crouter
from routers.gift_card_router import router as grouter
from routers.order_router import router as orouter
from fastapi.middleware.cors import CORSMiddleware
from lifespan import lifespan

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router=arouter, prefix="/auth", tags=["Auth"])
app.include_router(router=prouter, prefix="/product", tags=["Product"])
app.include_router(router=srouter, prefix="/subscription", tags=["Subscritpion"])
app.include_router(router=crouter, prefix="/cart", tags=["Cart"])
app.include_router(router=grouter, prefix="/gift", tags=["Gift"])
app.include_router(router=orouter, prefix="/order", tags=["Order"])

