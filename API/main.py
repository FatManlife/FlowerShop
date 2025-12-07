from fastapi import FastAPI
from routers.auth_router import router as arouter 
from routers.product_router import router as prouter 

app = FastAPI()

app.include_router(router=arouter, prefix="/auth", tags=["Auth"])
app.include_router(router=prouter, prefix="/products", tags=["Products"])