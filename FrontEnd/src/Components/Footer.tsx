

const Footer = () => {
  return (
    <footer style={{  
      padding: "20px", 
      textAlign: "center", 
      fontSize: "14px", 
      color: "#555", 
    }} className="backdrop-blur-md  w-full bottom-0 border-t-2 border-gray-300 p-5 text-center text-sm text-gray-500 ">
      
    <div className="">
      <p>
        <strong>Disclaimer:</strong> This website provides AI-based analysis for 
        educational purposes only and is not a substitute for professional medical advice.{" "}
        <a href="/disclaimer" style={{ color: "#0073e6" }}>Read full disclaimer</a>
      </p>
      <p>
        <a href="/terms" style={{ margin: "0 10px", color: "#0073e6" }}>Terms of Use</a> | 
        <a href="/privacy" style={{ margin: "0 10px", color: "#0073e6" }}>Privacy Policy</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Brain Tumor Detection Website</p>
    
    </div>
    </footer>
  );
};

export default Footer;
