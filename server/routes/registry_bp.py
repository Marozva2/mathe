from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow
from models import Registry, db
from serializers import RegistrySchema

registry_bp = Blueprint('registry_bp', __name__)
ma = Marshmallow(registry_bp)
api = Api(registry_bp)

# Parsers for request arguments
post_args = reqparse.RequestParser()
post_args.add_argument('name', type=str, required=True, help='Name is required')
post_args.add_argument('contact', type=str, required=True, help='Contact is required')
post_args.add_argument('age', type=int, required=True, help='Age is required')
post_args.add_argument('police_clearance', type=str, required=True, help='Police clearance is required')
post_args.add_argument('phone_number', type=str, required=True, help='Phone number is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('status', type=str)

# Schemas for serializing
registry_schema = RegistrySchema(many=True)
registry_schema_single = RegistrySchema()

class Registries(Resource):
    def get(self):
        registries = Registry.query.all()
        result = registry_schema.dump(registries, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()
        new_registry = Registry(
            name=data['name'],
            contact=data['contact'],
            age=data['age'],
            police_clearance=data['police_clearance'],
            phone_number=data['phone_number']
        )
        db.session.add(new_registry)
        db.session.commit()

        result = registry_schema_single.dump(new_registry)
        return result, 201

class RegistryById(Resource):
    def get(self, id):
        registry = Registry.query.get(id)
        if not registry:
            abort(404, detail=f'Registry with id {id} does not exist')

        result = registry_schema_single.dump(registry)
        return jsonify(result)

    def patch(self, id):
        registry = Registry.query.get(id)
        if not registry:
            abort(404, detail=f'Registry with id {id} does not exist')

        data = patch_args.parse_args()
        if 'status' in data:
            setattr(registry, 'status', data['status'])
        db.session.commit()

        result = registry_schema_single.dump(registry)
        return jsonify(result)

    def delete(self, id):
        registry = Registry.query.get(id)
        if not registry:
            abort(404, detail=f'Registry with id {id} does not exist')

        db.session.delete(registry)
        db.session.commit()
        return f'Registry with {id=} has been successfully deleted.', 204

api.add_resource(Registries, '/registries')
api.add_resource(RegistryById, '/registry/<int:id>')
