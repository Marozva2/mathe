from flask import Blueprint, jsonify
from flask_restful import Api, reqparse, Resource, abort
from flask_marshmallow import Marshmallow

from models import Mathe, db
from serializers import MatheSchema

mathe_bp = Blueprint('mathe_bp', __name__)
ma = Marshmallow(mathe_bp)
api = Api(mathe_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('name', type=str, required=True, help="Name cannot be blank")
post_args.add_argument('phone_number', type=str, required=True, help="Phone number cannot be blank")
post_args.add_argument('service', type=str, required=True, help="Service cannot be blank")
post_args.add_argument('location', type=str, required=True, help="Location cannot be blank")
post_args.add_argument('pricing', type=int, required=True, help="Pricing cannot be blank")
post_args.add_argument('profile_photo', type=str)

patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('phone_number', type=str)
patch_args.add_argument('service', type=str)
patch_args.add_argument('location', type=str)
patch_args.add_argument('pricing', type=int)
patch_args.add_argument('profile_photo', type=str)

mathe_schema = MatheSchema(many=True)
mathe_schema_single = MatheSchema()

class Mathes(Resource):
    def get(self):
        mathes = Mathe.query.all()
        result = mathe_schema.dump(mathes)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        mathe = Mathe.query.filter_by(name=data['name']).first()
        if mathe:
            abort(409, detail="Mathe already exists")

        new_mathe = Mathe(name=data['name'], phone_number=data['phone_number'],
                          service=data['service'], location=data['location'],
                          pricing=data['pricing'], profile_photo=data['profile_photo'])
        db.session.add(new_mathe)
        db.session.commit()

        result_data = mathe_schema_single.dump(new_mathe)
        return result_data, 201

class MatheById(Resource):
    def get(self, id):
        single_mathe = Mathe.query.get(id)
        if not single_mathe:
            abort(404, detail=f'Mathe with id {id} does not exist')

        result = mathe_schema_single.dump(single_mathe)
        return jsonify(result)

    def patch(self, id):
        single_mathe = Mathe.query.get(id)
        if not single_mathe:
            abort(404, detail=f'Mathe with id {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(single_mathe, key, value)
        db.session.commit()

        result = mathe_schema_single.dump(single_mathe)
        return jsonify(result)

    def delete(self, id):
        mathe = Mathe.query.get(id)
        if not mathe:
            abort(404, detail=f'Mathe with id {id} does not exist')

        db.session.delete(mathe)
        db.session.commit()
        return jsonify({'message': f'Mathe with id {id} has been successfully deleted.'}), 204

api.add_resource(Mathes, '/mathes')
api.add_resource(MatheById, '/mathe/<int:id>')
