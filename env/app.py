from flask import Flask, render_template, request, redirect, url_for
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from data import Base, Person

app = Flask(__name__)

# Create a database connection
engine = create_engine('sqlite:///people.db', echo=True)
Base.metadata.bind = engine

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

@app.route('/')
def index():
    return render_template('input_form.html')

@app.route('/save', methods=['POST'])
def save_data():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    age = int(request.form['age'])

    new_person = Person(first_name=first_name, last_name=last_name, age=age)
    session.add(new_person)
    session.commit()

    return redirect(url_for('index'))

if __name__ == '__main__':
    #app.run(host='127.0.0.1', port=3000)
    app.run(debug=True)
