import { useState } from "react";
import DragDrop from "./DragDrop";
import pipeline from "../assets/pipeline.png";
import accuracy from "../assets/accuracy.png";
import loss from "../assets/loss.png";

const BrainTumorPage = () => {
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
    <div className="w-full flex flex-col h-full pb-7 mt-5 relative ">
      <img
        className="absolute hidden md:flex w-35 left-15 xl:left-30 top-10 opacity-60 img-animation"
        src="/image1.png"
        alt=""
      />
      <img
        className="absolute hidden md:flex w-35 right-15 xl:right-45 opacity-60 rotate-45"
        src="/image2.png"
        alt=""
      />
     <div>
       <img
        className="absolute hidden md:flex w-35 right-15 xl:right-85 top-50 opacity-70 rotate-45"
        src="/image9.png"
        alt=""
      />
       <img
        className="absolute hidden md:flex w-25 right-15 xl:right-73 top-50 opacity-70 rotate-45"
        src="/image9.png"
        alt=""
      />
       <img
        className="absolute hidden md:flex w-15 right-15 xl:right-81 top-67 opacity-70 rotate-45"
        src="/image9.png"
        alt=""
      />
       <img
        className="absolute hidden md:flex w-20 right-15 xl:right-85 top-43 opacity-70 "
        src="/image9.png"
        alt=""
      />
     </div>

      <img
        className="absolute hidden -z-1 moveRobot  xl:flex w-35 right-15 xl:right-250 top-76 opacity-60"
        src="/image6.png"
        alt=""
      />
      

      <div className=" relative h-64 w-full rounded-lg flex items-center justify-center z-10">
        <DragDrop onFileSelected={setSelectedFile} />
      </div>

      <div className="mt-5 pb-15 flex justify-center items-center">
        <button
          onClick={handlePredict}
          className="px-10  py-2 bg-[#0f0b2c] text-white font-semibold text-2xl rounded-2xl"
        >
          Predict
        </button>
      </div>
      {selectedFile && (
        <div className="mt-6 flex justify-center">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded MRI"
            className="w-80 2651 h-auto border-2 border-gray-400 rounded-lg"
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

      <div className="z-40 mx-30 mt-6 border-t-2 border-gray-400 pt-4">
        <h1 className="text-2xl flex items-center font-bold italic">
          <div className="perspective-[800px] mr-3 flex items-center top-20 ">
            <img
              src="/image5.png"
              alt="Rotating Image"
              className="w-15 h-15 animate-spinYspin"
            />
          </div>{" "}
          About Brain Tumor Detector
        </h1>
        <p className="text-gray-700 mt-1 ml-1 italic">
          Build a detection model using a convolutional neural network in
          TensorFlow & Keras. Used a brain MRI images data founded on Kaggle.
        </p>
        <p className="mt-1 ml-1 text-gray-700 italic">
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
        <div className="mt-4 flex flex-col xl:flex-row gap-4 ">
          <div className="mx-auto">
            <img className="w-200 h-90 rounded-3xl p-3" src={pipeline} alt="" />
          </div>
          <div className="flex items-center justify-center mx-auto xl:flex-col w-100 gap-4">
            <img className="w-60 h-60 rounded-3xl p-2" src={accuracy} alt="" />
            <img className="w-60 h-60 rounded-3xl p-2" src={loss} alt="" />
          </div>
        </div>
        <div>
          <p className="font-semibold italic ">
            Now, the best model (the one with the best validation accuracy)
            detects brain tumor with:
          </p>
          <p className="italic">-88.7% accuracy on the test set</p>
          <p className="italic">-0.88% f1 score on the test set</p>
        </div>
      </div>
    </div>
  );
};

export default BrainTumorPage;
