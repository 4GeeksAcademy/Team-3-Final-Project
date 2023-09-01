"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask import Blueprint, send_from_directory
import os
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask import request, jsonify
from werkzeug.security import generate_password_hash
from api.models import db, User


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Add a route to serve the testpage.jsx content
@api.route('/testpage', methods=['GET'])
def serve_testpage():
    return send_from_directory(os.path.join('pages', 'static'), 'TestPage.jsx')


@api.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    last_name = data.get('last_name')

    if User.query.filter_by(email=email).first():
        return jsonify(message='Email already in use'), 400

    new_user = User(
        email=email,
        password=generate_password_hash(password),
        is_active=True,
        username=username,
        name=name,
        last_name=last_name
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify(message='User registered successfully')
