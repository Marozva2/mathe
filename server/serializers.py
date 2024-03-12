from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from models import User, Address, LaundryItem, Order, OrderItem


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User


class AddressSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Address


class LaundryItemSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = LaundryItem


class OrderSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Order


class OrderItemSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = OrderItem
