from fastapi import FastAPI
from routers.test_router import router as trouter

app = FastAPI()

app.include_router(trouter)