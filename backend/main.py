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