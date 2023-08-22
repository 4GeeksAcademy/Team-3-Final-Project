from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Create a database connection
engine = create_engine('sqlite:///people.db', echo=True)  # Replace with your database URL
Base = declarative_base()

# Define the data model
class Person(Base):
    __tablename__ = 'people'

    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    age = Column(Integer)

# Create tables in the database
Base.metadata.create_all(engine)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Add new people to the database
#new_person1 = Person(first_name='leo', last_name='costa', age=30)



#session.add(new_person1)

session.commit()

"""
person_to_delete = session.query(Person).filter_by(first_name='leo', last_name='costa').first()

if person_to_delete:
    session.delete(person_to_delete)
    session.commit()
    print(f"Person {person_to_delete.first_name} {person_to_delete.last_name} deleted.")
else:
    print("Person not found.")
"""


# Query all people in the database
people = session.query(Person).all()
for person in people:
    print(f"Name: {person.first_name} {person.last_name}, Age: {person.age}")

# Close the session
session.close()
