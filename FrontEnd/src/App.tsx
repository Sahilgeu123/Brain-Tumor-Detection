import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Components/Header";
import BrainTumorPage from "./Components/BrainTumorPage";
import PneumoniaPage from "./Components/PneumoniaPage";
import TuberculosisPage from "./Components/TuberculosisPage";
import CovidPage from "./Components/CovidPage";
import SkinCancerPage from "./Components/SkinCancerPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Head />
      <Routes>
        
        <Route path="/" element={<BrainTumorPage />} />
        <Route path="/brain-tumor" element={<BrainTumorPage />} />
        <Route path="/pneumonia" element={<PneumoniaPage />} />
        <Route path="/tuberculosis" element={<TuberculosisPage />} />
        <Route path="/covid-19" element={<CovidPage />} />
        <Route path="/skin-cancer-detection" element={<SkinCancerPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
