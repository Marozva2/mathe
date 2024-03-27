from models import db, User, Address, LaundryItem, Order, OrderItem

from app import create_app

app = create_app()


def seed_database():
    with app.app_context():
        # Delete existing data
        User.query.delete()
        Address.query.delete()
        LaundryItem.query.delete()
        Order.query.delete()
        OrderItem.query.delete()

        # Seed data for User model
        users = [{
            "id": 1,
            "username": "bredan",
            "email": "bredan@gmail.com",
            "password": "1234"
        }]

        for user_data in users:
            user = User(**user_data)
            db.session.add(user)
            print("Users added!!!")

        # Seed data for Address model
        addresses = [{
            "id": 1,
            "user_id": 1,
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip_code": "12345"
        }]

        for address_data in addresses:
            address = Address(**address_data)
            db.session.add(address)
            print("Addresses added!!!")

        # Seed data for LaundryItem model
        laundry_items = [{
            "id": 1,
            "number": 254712345678,
            "location": "Kampi",
            "description": "Standard cotton T-shirt"
        }]

        for laundry_item_data in laundry_items:
            laundry_item = LaundryItem(**laundry_item_data)
            db.session.add(laundry_item)
            print("Laundry items added")

        # Seed data for Order model
        orders = [{
            "id": 1,
            "user_id": 1,
            "address_id": 1,
            "status": "Pending"
        }]

        for order_data in orders:
            order = Order(**order_data)
            db.session.add(order)
            print("Orders added")

        # Seed data for OrderItem model
        order_items = [{
            "id": 1,
            "order_id": 1,
            "laundryitem_id": 1,
            "quantity": 2
        }]

        for order_item_data in order_items:
            order_item = OrderItem(**order_item_data)
            db.session.add(order_item)
            print("Order items added")

        # Commit all changes to the database
        db.session.commit()
        print("Data seeded successfully!")


if __name__ == '__main__':
    seed_database()
