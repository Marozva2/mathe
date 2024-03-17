from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from models import User, Address, LaundryItem, Order, OrderItem


class UserSchema(SQLAlchemyAutoSchema):
    addresses = fields.Nested('AddressSchema', many=True)
    orders = fields.Nested('OrderSchema', many=True)

    class Meta:
        model = User


class AddressSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Address


class LaundryItemSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = LaundryItem
        include_relationships = True


class OrderSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Order
        include_relationships = True


class OrderItemSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = OrderItem
        include_relationships = True
