from pydantic import BaseModel
from typing import List

class SoundBase(BaseModel):
    name: str
    url: str

class SoundCreate(SoundBase):
    pass

class Sound(SoundBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True

class PlaylistBase(BaseModel):
    name: str
    description: str | None = None

class PlaylistCreate(PlaylistBase):
    pass

class Playlist(PlaylistBase):
    id: int
    owner_id: int
    sounds: List[Sound] = []

    class Config:
        from_attributes = True
