from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

from models import User, db

from serializers import LaundryItemSchema

laundryitem_bp = Blueprint('laundryitem_bp', __name__)
ma = Marshmallow(laundryitem_bp)
bcrypt = Bcrypt()
api = Api(laundryitem_bp)
