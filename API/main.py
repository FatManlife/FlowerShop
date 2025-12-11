from fastapi import FastAPI
from routers.auth_router import router as arouter 
from routers.product_router import router as prouter 
from routers.subscription_router import router as srouter 
from routers.cart_router import router as crouter

app = FastAPI()

app.include_router(router=arouter, prefix="/auth", tags=["Auth"])
app.include_router(router=prouter, prefix="/product", tags=["Product"])
app.include_router(router=srouter, prefix="/subscription", tags=["Subscritpion"])
app.include_router(router=crouter, prefix="/cart", tags=["Cart"])
