from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import SessionLocal

router = APIRouter()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/sounds/", response_model=schemas.Sound)
def create_sound(sound: schemas.SoundCreate, db: Session = Depends(get_db)):
    # For now, we'll use a placeholder owner_id
    db_sound = models.Sound(**sound.dict(), owner_id=1)
    db.add(db_sound)
    db.commit()
    db.refresh(db_sound)
    return db_sound

@router.get("/sounds/", response_model=list[schemas.Sound])
def read_sounds(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    sounds = db.query(models.Sound).offset(skip).limit(limit).all()
    return sounds
