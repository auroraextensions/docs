from datetime import datetime
from dateutil import parser
from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Database connection URI parts.
uri_parts = [
    'mysql+mysqldb://',
    os.environ['DB_USER'],
    ':',
    os.environ['DB_PASS'],
    '@/',
    os.environ['DB_NAME'],
    '?unix_socket=/cloudsql/',
    os.environ['PROJECT_ID'],
    ':',
    os.environ['REGION_ID'],
    ':',
    os.environ['INSTANCE_NAME'],
]

# Database connection URI.
db_uri = ''.join(uri_parts)

# Set Base, Engine instance.
Base = declarative_base()
engine = create_engine(db_uri)

# Set Session, Session instance.
Session = sessionmaker(bind=engine)
session = Session()

# ORM class to represent log_visitor entity.
class VisitorLog(Base):
    __tablename__ = 'log_visitor'
    __table__ = Table(__tablename__, Base.metadata, autoload = True, autoload_with = engine)

# ORM class to represent log_visitor_info entity.
class VisitorLogInfo(Base):
    __tablename__ = 'log_visitor_info'
    __table__ = Table(__tablename__, Base.metadata, autoload = True, autoload_with = engine)

# Clean visitor logs from database.
def log_clean(request):
    try:
        session.query(VisitorLog).delete()
        session.query(VisitorLogInfo).delete()
        session.commit()
    except:
        session.rollback()

    return f'log_clean complete.'
