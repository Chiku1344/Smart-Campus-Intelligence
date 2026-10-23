# from fastapi import FastAPI
# from .database import Base, engine
# from . import models

# app = FastAPI(title="Smart Campus Intelligence")

# models.Base.metadata.create_all(bind=engine)


# @app.get("/")
# def home():
#     return {
#         "message": "Smart Campus Intelligence API is running!"
#     }


# @app.get("/health")
# def health_check():
#     return {
#         "status": "healthy"
#     }

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from .database import Base, engine, SessionLocal
from . import models
from .schemas import StudentCreate


app = FastAPI(title="Smart Campus Intelligence")


models.Base.metadata.create_all(bind=engine)


# Database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Smart Campus Intelligence API is running!"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


# Create Student
@app.post("/students")
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
    
from typing import List
from .schemas import StudentCreate, StudentResponse

# Get All Students (GET)
@app.get("/students", response_model=List[StudentResponse])
def get_students(db: Session = Depends(get_db)):
    students = db.query(models.Student).all()
    return students

from fastapi import HTTPException

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


# Delete Student (DELETE)
@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    db.delete(student)
    db.commit()
    return {"message": "Student deleted successfully"}