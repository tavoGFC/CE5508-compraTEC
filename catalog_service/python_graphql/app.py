import os
import socket
from flask import Flask
from flask_graphql import GraphQLView
from src.database import init_db
from src.schemas.schema import schema

app = Flask(__name__)
app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

if __name__ == "__main__":
    init_db()
    app.run(host='0.0.0.0', port=8080)
