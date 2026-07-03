import React, { useState } from "react";
import DragDrop from "./DragDrop";
import skinConfusion from "../assets/SkinConfusion.png";

const SkinCancerPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);

  const handlePredict = async () => {
    if (!selectedFile) {
      alert("Please upload an MRI image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setPrediction(data.result);
    setConfidence(data.confidence);
  };

  return (
    <div className="flex flex-col h-full mb-7">
      <DragDrop onFileSelected={setSelectedFile} />

      <div className="mt-6 flex justify-center items-center">
        <button
          onClick={handlePredict}
          className="px-17 py-4 bg-gray-700 text-white hover:text-gray-800 text-3xl border-2 rounded-4xl border-gray-200 hover:border-gray-600 hover:bg-gray-400 transition-all duration-300"
        >
          Predict
        </button>
      </div>
      {selectedFile && (
        <div className="mt-6 flex justify-center">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded MRI"
            className="w-80 h-auto border-2 border-gray-400 rounded-lg"
          />
        </div>
      )}

      {prediction && (
        <div className="mt-4 text-center text-xl font-bold">
          Result: {prediction}
          {confidence !== null && (
            <p className="text-gray-600 mt-2">
              Confidence: {(confidence * 100).toFixed(2)}%
            </p>
          )}
        </div>
      )}
      <div className="ml-2 mt-10 xl:ml-80 w-220 border-t-2 border-gray-400 pt-4">
        <h1 className="text-2xl font-semibold">#About Brain Tumor Detector</h1>
        <p className="text-gray-700 mt-1 ml-2">
          Build a detection model using a convolutional neural network in
          TensorFlow & Keras. Used a brain MRI images data founded on Kaggle.
        </p>
        <p className="mt-1 ml-2 text-gray-700">
          {" "}
          You can find it here:
          <a
            className="ml-1 hover:text-blue-700 transition-colors"
            href="https://www.kaggle.com/navoneel/brain-mri-images-for-brain-tumor-detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.kaggle.com/navoneel/brain-mri-images-for-brain-tumor-detection
          </a>
        </p>
        <div className="mt-4 flex flex-row gap-4 w-230 h-100">
          <img src={skinConfusion} alt="" />
          </div>
        </div>
        <p className="font-semibold flex justify-center texts-center mt-4">
          Now, the best model (the one with the best validation accuracy)
          detects brain tumor with:
        </p>
        <p className="text-center">-88.7% accuracy on the test set </p>
        <p className="text-center">-0.88% f1 score on the test set</p>
      </div>
  );
};

export default SkinCancerPage;
