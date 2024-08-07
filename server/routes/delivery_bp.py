from flask import Blueprint, jsonify, request, abort
from flask_restful import Api, Resource, reqparse
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from models import Delivery, db
from serializers import DeliverySchema
from flask_cors import CORS

delivery_bp = Blueprint('delivery_bp', __name__)
CORS(delivery_bp)
ma = Marshmallow(delivery_bp)
bcrypt = Bcrypt()
api = Api(delivery_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('order_id', type=int, required=True, help='Order ID is required')
post_args.add_argument('delivery_date', type=str, required=True, help='Delivery date is required')
post_args.add_argument('delivery_time', type=str, required=True, help='Delivery time is required')
post_args.add_argument('status', type=str, default='Not Delivered')
post_args.add_argument('location', type=str, required=True, help='Location is required')
post_args.add_argument('apartment_name', type=str, required=True, help='Apartment name is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('status', type=str)

delivery_schema = DeliverySchema(many=True)
delivery_schema_single = DeliverySchema()

class Deliveries(Resource):
    def get(self):
        deliveries = Delivery.query.all()
        result = delivery_schema.dump(deliveries)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()
        new_delivery = Delivery(
            order_id=data['order_id'],
            delivery_date=data['delivery_date'],
            delivery_time=data['delivery_time'],
            status=data['status'],
            location=data['location'],
            apartment_name=data['apartment_name']
        )
        db.session.add(new_delivery)
        db.session.commit()

        result = delivery_schema_single.dump(new_delivery)
        return jsonify(result), 201

class DeliveryById(Resource):
    def get(self, id):
        delivery = Delivery.query.get(id)
        if not delivery:
            abort(404, description=f'Delivery with id {id} does not exist')

        result = delivery_schema_single.dump(delivery)
        return jsonify(result)

    def patch(self, id):
        delivery = Delivery.query.get(id)
        if not delivery:
            abort(404, description=f'Delivery with id {id} does not exist')

        data = patch_args.parse_args()
        if 'status' in data:
            setattr(delivery, 'status', data['status'])
        db.session.commit()

        result = delivery_schema_single.dump(delivery)
        return jsonify(result)

    def delete(self, id):
        delivery = Delivery.query.get(id)
        if not delivery:
            abort(404, description=f'Delivery with id {id} does not exist')

        db.session.delete(delivery)
        db.session.commit()
        return jsonify(message=f'Delivery with id={id} has been successfully deleted.'), 204

api.add_resource(Deliveries, '/deliveries')
api.add_resource(DeliveryById, '/deliveries/<int:id>')

