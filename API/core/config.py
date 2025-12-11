import os
from dotenv import load_dotenv
from passlib.context import CryptContext

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

#Jwt tokens
SECRET_KEY = "BSQ3Llu2M_-glr13cn5g-5mSFC_0yXK8JME681DrRk"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")