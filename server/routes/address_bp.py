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

post_args = reqparse.RequestParser()
post_args.add_argument('user_id', type=int, required=True,
                       help='User ID is required')
post_args.add_argument('street', type=str, required=True,
                       help='Street is required')
post_args.add_argument('city', type=str, required=True,
                       help='City is required')
post_args.add_argument('state', type=str, required=True,
                       help='State is required')
post_args.add_argument('zip_code', type=str, required=True,
                       help='Zip code is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('user_id', type=int)
patch_args.add_argument('street', type=str)
patch_args.add_argument('city', type=str)
patch_args.add_argument('state', type=str)
patch_args.add_argument('zip_code', type=str)

address_schema = AddressSchema(many=True)
address_schema_single = AddressSchema()


class Addresses(Resource):
    def get(self):
        addresses = Address.query.all()
        result = address_schema.dump(addresses, many=True)
        return (result)

    def post(self):
        data = post_args.parse_args()

        address = Address.query.filter_by(user_id=data['user_id']).first()
        if address:
            abort(409, detail="Address for this user already exists")

        new_address = Address(user_id=data['user_id'], street=data['street'],
                              city=data['city'], state=data['state'], zip_code=data['zip_code'])
        db.session.add(new_address)
        db.session.commit()

        result_data = address_schema_single.dump(new_address)
        return result_data, 201


class AddressById(Resource):
    def get(self, id):
        single_address = Address.query.get(id)
        if not single_address:
            abort(404, detail=f'Address with id {id} does not exist')

        result = address_schema_single.dump(single_address)
        return jsonify(result)

    def patch(self, id):
        single_address = Address.query.get(id)
        if not single_address:
            abort(404, detail=f'Address with id {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(single_address, key, value)
        db.session.commit()

        result = address_schema_single.dump(single_address)
        return jsonify(result)

    def delete(self, id):
        address = Address.query.get(id)
        if not address:
            abort(404, detail=f'Address with id {id} does not exist')

        db.session.delete(address)
        db.session.commit()
        return f'Address with {id=} has been successfully deleted.', 204


api.add_resource(Addresses, '/addresses')
api.add_resource(AddressById, '/address/<int:id>')
