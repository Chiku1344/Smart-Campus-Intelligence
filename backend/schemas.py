from pydantic import BaseModel, ConfigDict

# Data received when creating a student
class StudentCreate(BaseModel):
    name: str
    email: str
    department: str
    year: int

# Data returned by the API
class StudentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: int
    name: str
    email: str
    department: str
    year: int