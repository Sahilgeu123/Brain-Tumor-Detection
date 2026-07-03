import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

function DragDrop({
  onFileSelected,
}: {
  onFileSelected: (file: File) => void;
}) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "image/*": [] },
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      onFileSelected(acceptedFiles[0]);
    }
  }, [acceptedFiles, onFileSelected]);

  return (
    <div
      {...getRootProps({
        className:
          " mx-4 mt-10 border-2 border-gray-400 shadow-xl h-40 md:mx-30 lg:mx-50 rounded-xl p-6 text-center text-xl",
      })}
    >
       
      <input {...getInputProps()} className=""/>
      <p className="mt-9 text-gray-600">Drag & Drop or Click to Upload</p>
      </div>
  );
}

export default DragDrop;
