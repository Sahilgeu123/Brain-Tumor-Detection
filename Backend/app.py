from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)  # allow requests from React frontend

# Load your trained 
model = load_model("brain_tumor_detector.h5")
@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["file"]
    img = Image.open(file).convert("RGB").resize((240, 240))  # match model input
    arr = np.array(img) / 255.0
    arr = np.expand_dims(arr, axis=0)

    probability = float(model.predict(arr)[0][0])  # raw confidence
    result = "⚠️ Tumor Detected" if probability > 0.5 else "✅ No Tumor Detected"

    return jsonify({
        "result": result,
        "confidence": round(probability, 4)  # send confidence back
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)

