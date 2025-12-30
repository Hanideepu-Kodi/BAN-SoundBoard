from fastapi import APIRouter, Depends, HTTPException
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

@router.post("/playlists/", response_model=schemas.Playlist)
def create_playlist(playlist: schemas.PlaylistCreate, db: Session = Depends(get_db)):
    # For now, we'll use a placeholder owner_id
    db_playlist = models.Playlist(**playlist.dict(), owner_id=1)
    db.add(db_playlist)
    db.commit()
    db.refresh(db_playlist)
    return db_playlist

@router.get("/playlists/", response_model=list[schemas.Playlist])
def read_playlists(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    playlists = db.query(models.Playlist).offset(skip).limit(limit).all()
    return playlists

@router.get("/playlists/{playlist_id}", response_model=schemas.Playlist)
def read_playlist(playlist_id: int, db: Session = Depends(get_db)):
    db_playlist = db.query(models.Playlist).filter(models.Playlist.id == playlist_id).first()
    if db_playlist is None:
        raise HTTPException(status_code=404, detail="Playlist not found")
    return db_playlist

@router.post("/playlists/{playlist_id}/sounds/{sound_id}", response_model=schemas.Playlist)
def add_sound_to_playlist(playlist_id: int, sound_id: int, db: Session = Depends(get_db)):
    db_playlist = db.query(models.Playlist).filter(models.Playlist.id == playlist_id).first()
    if db_playlist is None:
        raise HTTPException(status_code=404, detail="Playlist not found")

    db_sound = db.query(models.Sound).filter(models.Sound.id == sound_id).first()
    if db_sound is None:
        raise HTTPException(status_code=404, detail="Sound not found")

    db_playlist.sounds.append(db_sound)
    db.commit()
    db.refresh(db_playlist)
    return db_playlist
