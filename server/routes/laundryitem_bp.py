from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from flask_jwt_extended import jwt_required

from models import LaundryItem, db

from serializers import LaundryItemSchema

laundryitem_bp = Blueprint('laundryitem_bp', __name__)
ma = Marshmallow(laundryitem_bp)
bcrypt = Bcrypt()
api = Api(laundryitem_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('number', type=int, required=True,
                       help='Number is required')
post_args.add_argument('location', type=str, required=True,
                       help='Location is required')
post_args.add_argument('description', type=str, required=True,
                       help='Description is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('number', type=int)
patch_args.add_argument('location', type=str)
patch_args.add_argument('description', type=str)

laundryitem_schema = LaundryItemSchema(many=True)
laundryitem_schema_single = LaundryItemSchema()


class LaundryItems(Resource):
    @jwt_required()
    def get(self):
        laundry_items = LaundryItem.query.all()
        result = laundryitem_schema.dump(laundry_items, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        laundry_item = LaundryItem.query.filter_by(number=data['number']).first()
        if laundry_item:
            abort(409, detail="Laundry item with the same number already exists")

        new_laundry_item = LaundryItem(number=data['number'], location=data['location'],
                                       description=data['description'])
        db.session.add(new_laundry_item)
        db.session.commit()

        result = laundryitem_schema_single.dump(new_laundry_item)
        return (result), 201


class LaundryItemById(Resource):
    @jwt_required()
    def get(self, id):
        single_laundry_item = LaundryItem.query.get(id)
        if not single_laundry_item:
            abort(404, detail=f'Laundry item with id {id} does not exist')

        result = laundryitem_schema_single.dump(single_laundry_item)
        return jsonify(result)

    def patch(self, id):
        single_laundry_item = LaundryItem.query.get(id)
        if not single_laundry_item:
            abort(404, detail=f'Laundry item with id {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(single_laundry_item, key, value)
        db.session.commit()

        result = laundryitem_schema_single.dump(single_laundry_item)
        return jsonify(result)

    def delete(self, id):
        laundry_item = LaundryItem.query.get(id)
        if not laundry_item:
            abort(404, detail=f'Laundry item with id {id} does not exist')

        db.session.delete(laundry_item)
        db.session.commit()
        return f'Laundry item with {id=} has been successfully deleted.', 204


api.add_resource(LaundryItems, '/laundryitems')
api.add_resource(LaundryItemById, '/laundryitem/<int:id>')
