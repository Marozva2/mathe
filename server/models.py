from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    contact = db.Column(db.Integer)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    
    orders = db.relationship('Order', backref='customer', lazy='dynamic')
    addresses = db.relationship('Address', backref='resident', lazy='dynamic')
    laundryitems = db.relationship('LaundryItem', backref='owner', lazy='dynamic')
    deliveries = db.relationship('Delivery', backref='deliverer', lazy='dynamic')

class Address(db.Model):
    __tablename__ = 'addresses'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    street = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    zip_code = db.Column(db.String)

    orders = db.relationship('Order', backref='address', lazy='dynamic')  # Added this line

class LaundryItem(db.Model):
    __tablename__ = 'laundryitems'

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    location = db.Column(db.String)
    description = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    orders = db.relationship('OrderItem', backref='item', lazy='dynamic')

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    address_id = db.Column(db.Integer, db.ForeignKey('addresses.id'))
    status = db.Column(db.String, default='Pending')
    items = db.relationship('OrderItem', backref='order', lazy='dynamic')
    deliveries = db.relationship('Delivery', backref='order', lazy='dynamic')

class OrderItem(db.Model):
    __tablename__ = 'orderitems'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    laundryitem_id = db.Column(db.Integer, db.ForeignKey('laundryitems.id'))
    quantity = db.Column(db.Integer)

class Delivery(db.Model):
    __tablename__ = 'deliveries'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    delivery_date = db.Column(db.String)  # e.g., 'YYYY-MM-DD'
    delivery_time = db.Column(db.String)  # e.g., 'HH:MM'
    status = db.Column(db.String, default='Not Delivered')
    location = db.Column(db.String)
    apartment_name = db.Column(db.String)

    # Removed the order and user relationships as they are already handled by foreign keys

class Email(db.Model):
    __tablename__ = 'emails'

    email_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String)
    body = db.Column(db.Text)
    sender_email = db.Column(db.String)

    serialize_only = ('email_id', 'subject', 'sender_email')

    def __repr__(self):
        return f"Email(email_id={self.email_id}, subject={self.subject}, sender_email={self.sender_email})"

class MailingList(db.Model):
    __tablename__ = 'mailing_list'
    
    mailing_list_id = db.Column(db.Integer, primary_key=True)
    email_id = db.Column(db.Integer, db.ForeignKey("emails.email_id", name="mailing_list_email_fk"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", name="mailing_list_user_fk"), nullable=False)

    serialize_only = ('mailing_list_id', 'email_id', 'user_id')

    def __repr__(self):
        return f"MailingList(mailing_list_id={self.mailing_list_id}, email_id={self.email_id}, user_id={self.user_id})"

class Registry(db.Model):
    __tablename__ = 'registries'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    contact = db.Column(db.String)
    age = db.Column(db.Integer)
    police_clearance = db.Column(db.String)
    phone_number = db.Column(db.String)
    status = db.Column(db.String, default='Pending')  # e.g., 'Approved', 'Rejected'
