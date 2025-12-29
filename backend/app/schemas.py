from pydantic import BaseModel

class PlaylistBase(BaseModel):
    name: str
    description: str | None = None

class PlaylistCreate(PlaylistBase):
    pass

class Playlist(PlaylistBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True
