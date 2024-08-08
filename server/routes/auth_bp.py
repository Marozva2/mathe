from flask import Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import (
    create_access_token,
    JWTManager,
    jwt_required,
    get_jwt_identity,
    get_jwt
)
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

@jwt.token_in_blocklist_loader
def check_if_token_in_blacklist(jwt_header, jwt_payload):
    jti = jwt_payload['jti']
    return jti in blacklist

class UserRegister(Resource):
    def post(self):
        data = signUp_args.parse_args()
        if data["password"] != data["confirmPassword"]:
            return {"detail": "Passwords do not match"}, 422

        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            return {"detail": "User with this email already exists"}, 409

        hashed_password = bcrypt.generate_password_hash(data["password"]).decode('utf-8')

        # Assign role: admin for certain conditions, e.g., email domain check
        is_admin = data['email'].endswith('@admin.com')

        new_user = User(
            name=data['name'],
            email=data['email'],
            contact=data['contact'],
            password=hashed_password,
            is_admin=is_admin
        )

        db.session.add(new_user)
        db.session.commit()

        metadata = {"name": new_user.name, "is_admin": new_user.is_admin}
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

        token = create_access_token(identity=user.id, additional_claims={"is_admin": user.is_admin})
        return {"access_token": token, "user_id": user.id, "is_admin": user.is_admin}, 200

class UserLogout(Resource):
    @jwt_required()
    def post(self):
        jti = get_jwt()['jti']
        blacklist.add(jti)
        return {"message": "Successfully logged out"}, 200

api.add_resource(UserRegister, "/register")
api.add_resource(Login, '/login')
api.add_resource(UserLogout, '/logout')
