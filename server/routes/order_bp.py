from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from models import Order, db
from serializers import OrderSchema

order_bp = Blueprint('order_bp', __name__)
ma = Marshmallow(order_bp)
api = Api(order_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('user_id', type=int, required=True, help='User ID is required')
post_args.add_argument('address_id', type=int, required=True, help='Address ID is required')
post_args.add_argument('status', type=str, default='Pending', help='Status is optional')

patch_args = reqparse.RequestParser()
patch_args.add_argument('status', type=str)

order_schema = OrderSchema(many=True)
order_schema_single = OrderSchema()

class Orders(Resource):
    def get(self):
        orders = Order.query.all()
        result = order_schema.dump(orders)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()
        new_order = Order(
            user_id=data['user_id'],
            address_id=data['address_id'],
            status=data['status']
        )
        db.session.add(new_order)
        db.session.commit()

        result = order_schema_single.dump(new_order)
        return result, 201

class OrderById(Resource):
    def get(self, id):
        order = Order.query.get(id)
        if not order:
            abort(404, description=f'Order with id {id} does not exist')

        result = order_schema_single.dump(order)
        return jsonify(result)

    def patch(self, id):
        order = Order.query.get(id)
        if not order:
            abort(404, description=f'Order with id {id} does not exist')

        data = patch_args.parse_args()
        if 'status' in data:
            setattr(order, 'status', data['status'])
        db.session.commit()

        result = order_schema_single.dump(order)
        return jsonify(result)

    def delete(self, id):
        order = Order.query.get(id)
        if not order:
            abort(404, description=f'Order with id {id} does not exist')

        db.session.delete(order)
        db.session.commit()
        return '', 204

api.add_resource(Orders, '/orders')
api.add_resource(OrderById, '/order/<int:id>')
