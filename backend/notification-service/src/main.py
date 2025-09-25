from flask import Flask, request

app = Flask(__name__)

@app.route("/notify", methods=["POST"])
def notify():
    data = request.json
    print(f"Notification: {data}")
    return {"status": "sent"}, 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005)

