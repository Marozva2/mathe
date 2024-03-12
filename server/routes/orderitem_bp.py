from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

from models import User, db

from serializers import OrderItemSchema

orderitem_bp = Blueprint('orderitem_bp', __name__)
ma = Marshmallow(orderitem_bp)
bcrypt = Bcrypt()
api = Api(orderitem_bp)
