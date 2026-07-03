import { useState } from "react";

function TumorPredictor() {
  const [result, setResult] = useState("");

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <p>Prediction: {result}</p>
    </div>
  );
}

export default TumorPredictor;
