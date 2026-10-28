from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

from .database import Base, engine, SessionLocal
from . import models
from .schemas import (
    StudentCreate, StudentResponse,
    BuildingCreate, BuildingResponse,
    EnergyCreate, EnergyResponse,
    CanteenCreate, CanteenResponse
)

app = FastAPI(title="Smart Campus Intelligence")

# 🟢 CORS Middleware ko yahan upar hi add karna hai (Ek hi baar)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables automatically
models.Base.metadata.create_all(bind=engine)

# Database session dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {"message": "Smart Campus Intelligence API is running!"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}


# ==================== STUDENT APIs ====================

@app.post("/students", response_model=dict)
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    new_student = models.Student(
        name=student.name,
        email=student.email,
        department=student.department,
        year=student.year
    )
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return {
        "message": "Student created successfully",
        "student": {
            "id": new_student.id,
            "name": new_student.name,
            "email": new_student.email,
            "department": new_student.department,
            "year": new_student.year
        }
    }


@app.get("/students", response_model=List[StudentResponse])
def get_students(db: Session = Depends(get_db)):
    return db.query(models.Student).all()


@app.get("/students/{student_id}", response_model=StudentResponse)
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


@app.put("/students/{student_id}", response_model=StudentResponse)
def update_student(student_id: int, student_data: StudentCreate, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    student.name = student_data.name
    student.email = student_data.email
    student.department = student_data.department
    student.year = student_data.year
    
    db.commit()
    db.refresh(student)
    return student


@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    db.delete(student)
    db.commit()
    return {"message": "Student deleted successfully"}


# ==================== BUILDING & ENERGY APIs ====================

@app.post("/buildings", response_model=BuildingResponse)
def create_building(building: BuildingCreate, db: Session = Depends(get_db)):
    new_building = models.Building(
        building_name=building.building_name,
        building_type=building.building_type,
        location=building.location
    )
    db.add(new_building)
    db.commit()
    db.refresh(new_building)
    return new_building


@app.get("/buildings", response_model=List[BuildingResponse])
def get_buildings(db: Session = Depends(get_db)):
    return db.query(models.Building).all()


@app.post("/energy", response_model=EnergyResponse)
def create_energy_record(energy: EnergyCreate, db: Session = Depends(get_db)):
    new_record = models.EnergyConsumption(
        building_id=energy.building_id,
        power_consumed_kwh=energy.power_consumed_kwh
    )
    db.add(new_record)
    db.commit()
    db.refresh(new_record)
    return new_record


@app.get("/energy", response_model=List[EnergyResponse])
def get_energy_records(db: Session = Depends(get_db)):
    return db.query(models.EnergyConsumption).all()


# ==================== CANTEEN / FOOD WASTE APIs ====================

@app.post("/canteen", response_model=CanteenResponse)
def create_canteen_record(record: CanteenCreate, db: Session = Depends(get_db)):
    new_record = models.CanteenRecord(
        item_name=record.item_name,
        quantity_prepared=record.quantity_prepared,
        quantity_wasted=record.quantity_wasted
    )
    db.add(new_record)
    db.commit()
    db.refresh(new_record)
    return new_record


@app.get("/canteen", response_model=List[CanteenResponse])
def get_canteen_records(db: Session = Depends(get_db)):
    return db.query(models.CanteenRecord).all()