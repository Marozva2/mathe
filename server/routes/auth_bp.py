from flask import Blueprint
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource, abort, reqparse
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

from models import User, db

auth_bp = Blueprint('auth_bp', __name__)
bcrypt = Bcrypt()
jwt = JWTManager()
api = Api(auth_bp)

blacklist = set()

signUp_args = reqparse.RequestParser()
signUp_args.add_argument('name', type=str, required=True)
signUp_args.add_argument('contact', type=str, required=True)
signUp_args.add_argument('email', type=str, required=True)
signUp_args.add_argument("password", type=str, required=True)
signUp_args.add_argument("confirmPassword", type=str, required=True)


login_args = reqparse.RequestParser()
login_args.add_argument('email', type=str, required=True)
login_args.add_argument("password", type=str, required=True)


class UserRegister(Resource):
    def post(self):
        data = signUp_args.parse_args()
        if data["password"] != data["confirmPassword"]:
            return {"detail": "Passwords do not match"}, 422  # Correct error handling with a JSON response

        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            return {"detail": "User with this email already exists"}, 409  # Conflict error for existing user

        hashed_password = bcrypt.generate_password_hash(data["password"]).decode('utf-8')

        new_user = User(
            name=data['name'],
            email=data['email'],
            contact=data['contact'],
            password=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        metadata = {"name": new_user.name}
        token = create_access_token(identity=new_user.id, additional_claims=metadata)
        return {"detail": f"User {data['name']} has been successfully created", "access_token": token}, 201


class Login(Resource):
    def post(self):
        data = login_args.parse_args()
        user = User.query.filter_by(email=data['email']).first()

        if not user:
            return {"detail": "User does not exist"}, 404

        if not bcrypt.check_password_hash(user.password, data['password']):
            return {"detail": "Incorrect password"}, 403

        token = create_access_token(identity=user.id)
        return {"access_token": token, "user_id": user.id}, 200


class UserLogout(Resource):
    @jwt_required()
    def post(self):
        jti = get_jwt_identity()
        print(jti)
        blacklist.add(jti)
        return {"message": "Successfully logged out"}, 200

api.add_resource(UserRegister, "/register")
api.add_resource(Login, '/login')
api.add_resource(UserLogout, '/logout')
