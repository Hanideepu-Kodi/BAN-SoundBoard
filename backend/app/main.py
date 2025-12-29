from fastapi import FastAPI
from .database import engine, Base
from .routers import playlists
from . import models

# Create the database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(playlists.router)

@app.get("/")
def read_root():
    return {"message": "Soundwave Backend"}
