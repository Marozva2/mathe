from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

from models import Address, db

from serializers import AddressSchema

address_bp = Blueprint('address_bp', __name__)
ma = Marshmallow(address_bp)
bcrypt = Bcrypt()
api = Api(address_bp)
