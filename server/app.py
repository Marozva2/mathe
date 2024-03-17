from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from datetime import timedelta

from models import db

from routes.auth_bp import jwt, bcrypt, auth_bp
from routes.user_bp import user_bp
from routes.address_bp import address_bp
from routes.laundryitem_bp import laundryitem_bp
from routes.order_bp import order_bp
from routes.orderitem_bp import orderitem_bp
from routes.home_bp import home_bp


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mathe.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'bhuwvyuev3'
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2)

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma = Marshmallow(app)
    migrate = Migrate(app, db)

    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(address_bp)
    app.register_blueprint(laundryitem_bp)
    app.register_blueprint(order_bp)
    app.register_blueprint(orderitem_bp)
    app.register_blueprint(home_bp)

    CORS(app, resources={r"*": {"origins": "*"}})
    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
