from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .database import Base
import datetime

class Building(Base):
    __tablename__ = "buildings"

    building_id = Column(Integer, primary_key=True, index=True)
    building_name = Column(String(100), nullable=False)
    building_type = Column(String(50))
    location = Column(String(100))

    # Relationship with energy records
    energy_records = relationship("EnergyConsumption", back_populates="building")


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    department = Column(String(100), nullable=False)
    year = Column(Integer, nullable=False)


class EnergyConsumption(Base):
    __tablename__ = "energy_consumption"

    id = Column(Integer, primary_key=True, index=True)
    building_id = Column(Integer, ForeignKey("buildings.building_id"))
    power_consumed_kwh = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

    building = relationship("Building", back_populates="energy_records")


class CanteenRecord(Base):
    __tablename__ = "canteen_records"

    id = Column(Integer, primary_key=True, index=True)
    item_name = Column(String(100), nullable=False)
    quantity_prepared = Column(Integer, nullable=False)
    quantity_wasted = Column(Integer, nullable=False)
    date = Column(DateTime, default=datetime.datetime.utcnow)