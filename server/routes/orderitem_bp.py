from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

from models import OrderItem, db

from serializers import OrderItemSchema

orderitem_bp = Blueprint('orderitem_bp', __name__)
ma = Marshmallow(orderitem_bp)
bcrypt = Bcrypt()
api = Api(orderitem_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('order_id', type=int, required=True,
                       help='Order ID is required')
post_args.add_argument('laundryitem_id', type=int, required=True,
                       help='Laundry item ID is required')
post_args.add_argument('quantity', type=int, required=True,
                       help='Quantity is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('quantity', type=int)

orderitem_schema = OrderItemSchema(many=True)
orderitem_schema_single = OrderItemSchema()


class OrderItems(Resource):
    def get(self):
        order_items = OrderItem.query.all()
        result = orderitem_schema.dump(order_items, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        new_order_item = OrderItem(order_id=data['order_id'], laundryitem_id=data['laundryitem_id'],
                                   quantity=data['quantity'])
        db.session.add(new_order_item)
        db.session.commit()

        result = orderitem_schema_single.dump(new_order_item)
        return (result), 201


class OrderItemById(Resource):
    def get(self, id):
        single_order_item = OrderItem.query.get(id)
        if not single_order_item:
            abort(404, detail=f'Order item with id {id} does not exist')

        result = orderitem_schema_single.dump(single_order_item)
        return jsonify(result)

    def patch(self, id):
        single_order_item = OrderItem.query.get(id)
        if not single_order_item:
            abort(404, detail=f'Order item with id {id} does not exist')

        data = patch_args.parse_args()
        if 'quantity' in data:
            setattr(single_order_item, 'quantity', data['quantity'])
        db.session.commit()

        result = orderitem_schema_single.dump(single_order_item)
        return jsonify(result)

    def delete(self, id):
        order_item = OrderItem.query.get(id)
        if not order_item:
            abort(404, detail=f'Order item with id {id} does not exist')

        db.session.delete(order_item)
        db.session.commit()
        return f'Order item with {id=} has been successfully deleted.', 204


api.add_resource(OrderItems, '/orderitems')
api.add_resource(OrderItemById, '/orderitem/<int:id>')
