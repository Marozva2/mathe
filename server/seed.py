from models import db, User, Address, LaundryItem, Order, OrderItem

from app import create_app

app = create_app()


def seed_database():
    with app.app_context():
        User.query.delete()
        Address.query.delete()
        LaundryItem.query.delete()
        Order.query.delete()
        OrderItem.query.delete()

        users = [{
            "id": 1,
            "username": "bredan",
            "email": "bredan@gmail.com",
            "password": "1234"
        }]

        for user_data in users:
            user = User(**user_data)
            db.session.add(user)
        db.session.commit()
        print("Users added!!!")


if __name__ == '__main__':
    seed_database()
