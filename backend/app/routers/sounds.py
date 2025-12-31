from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import SessionLocal
import shutil

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

@router.post("/sounds/upload", response_model=schemas.Sound)
def upload_sound(
    name: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    file_path = f"backend/uploads/{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    db_sound = models.Sound(name=name, url=file_path, owner_id=1) # Placeholder owner_id
    db.add(db_sound)
    db.commit()
    db.refresh(db_sound)
    return db_sound
