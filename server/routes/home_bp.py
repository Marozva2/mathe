from flask import Blueprint
from flask_restful import Resource, Api

home_bp = Blueprint('home_bp', __name__)
api = Api(home_bp)


class Home(Resource):
    def get(self):
        return "Welcome!!!"


api.add_resource(Home, '/')
