from flask import Flask, render_template
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/api")
def get_response():
    response = requests.get("https://randomuser.me/api/?results=10")
    return response.json()


if __name__ == "__main__":
    app.run()
