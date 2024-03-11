from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow

from models import db

# from routes.auth_bp import jwt, bcrypt


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mathe.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    # jwt.init_app(app)
    # bcrypt.init_app(app)
    ma = Marshmallow(app)
    migrate = Migrate(app, db)
    CORS(app, resources={r"*": {"origins": "*"}})
    return app


app = create_app
