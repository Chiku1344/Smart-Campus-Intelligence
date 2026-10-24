from pydantic import BaseModel, ConfigDict
from datetime import datetime

# Student Schemas
class StudentCreate(BaseModel):
    name: str
    email: str
    department: str
    year: int

class StudentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: int
    name: str
    email: str
    department: str
    year: int


# Building Schemas
class BuildingCreate(BaseModel):
    building_name: str
    building_type: str
    location: str

class BuildingResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    building_id: int
    building_name: str
    building_type: str
    location: str


# Energy Schemas
class EnergyCreate(BaseModel):
    building_id: int
    power_consumed_kwh: float

class EnergyResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: int
    building_id: int
    power_consumed_kwh: float
    timestamp: datetime
    
    
from datetime import datetime

class CanteenCreate(BaseModel):
    item_name: str
    quantity_prepared: int
    quantity_wasted: int

class CanteenResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: int
    item_name: str
    quantity_prepared: int
    quantity_wasted: int
    date: datetime