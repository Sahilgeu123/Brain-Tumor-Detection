import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface NavbarProps {
  onClose: () => void;
  showNavbar: boolean;
  onSelectDisease: (disease: string) => void; // ✅ new prop
}

const Navbar: React.FC<NavbarProps> = ({
  onClose,
  showNavbar,
  onSelectDisease,
}) => {

  const diseases = [
    "Brain Tumor",
    "Pneumonia",
    "Tuberculosis",
    "Covid-19",
    "Skin Cancer Detection",
  ];

  return (
    <div className={`relative h-full ${showNavbar ? "block" : "hidden"}`}>
      <XMarkIcon
        className={`absolute  top-2 right-2 h-6 w-6 text-gray-500 cursor-pointer`}
        onClick={onClose}
      />
      <ul className={showNavbar ? "list-disc ml-10" : "list-none"}>
        {diseases.map((disease, index) => (
          <li
            key={index}
            className="p-3 hover:text-[17px] cursor-pointer font-semibold transition-all"
            onClick={() => onSelectDisease(disease)} // ✅ update state in Head
          >
            <Link
              to={`/${disease.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={onClose}
            >
              {disease}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
