from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from models import User, db
from serializers import UserSchema

settings_bp = Blueprint('settings_bp', __name__)
ma = Marshmallow(settings_bp)
api = Api(settings_bp)
bcrypt = Bcrypt()

patch_args = reqparse.RequestParser()
patch_args.add_argument('email', type=str)
patch_args.add_argument('password', type=str)
patch_args.add_argument('username', type=str)

user_schema = UserSchema(many=True)
user_schema_single = UserSchema()

class Settings(Resource):
    def patch(self, id):
        user = User.query.get(id)
        if not user:
            abort(404, detail=f'User with id {id} does not exist')

        data = patch_args.parse_args()

        if 'email' in data:
            user.email = data['email']
        if 'password' in data:
            user.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        if 'username' in data:
            user.username = data['username']
        
        db.session.commit()
        result = user_schema_single.dump(user)
        return jsonify(result)

api.add_resource(Settings, '/settings/<int:id>')
