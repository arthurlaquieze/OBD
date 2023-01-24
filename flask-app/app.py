from math import floor
from flask import Flask, render_template
import random

app = Flask(__name__)

# list of cat images
images = [
    "https://storage.googleapis.com/fchouteau-isae-cloud/gifs/gif1.gif",
    "https://storage.googleapis.com/fchouteau-isae-cloud/gifs/gif2.gif",
    "https://storage.googleapis.com/fchouteau-isae-cloud/gifs/gif3.gif",
    "https://storage.googleapis.com/fchouteau-isae-cloud/gifs/gif4.gif",
    "https://storage.googleapis.com/fchouteau-isae-cloud/gifs/gif5.gif",
    "https://storage.googleapis.com/fchouteau-isae-cloud/gifs/gif6.gif",
]


@app.route("/")
def index():
    url = random.choice(images)
    random_int = floor(random.random() * 100)
    return render_template("index.html", url=url, random_int=random_int)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
