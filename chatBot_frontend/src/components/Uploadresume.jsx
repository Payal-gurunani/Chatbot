import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const UploadResume = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="ml-64 p-10">
      <h2 className="text-2xl font-bold mb-5">Upload Your Resume</h2>

      <div className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center">
        <label className="flex flex-col items-center bg-gray-200 p-4 rounded-lg cursor-pointer">
          <FaUpload size={40} className="text-gray-700 mb-2" />
          <span className="text-gray-700 font-semibold">Click to Upload Resume (PDF)</span>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {file && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-semibold">Uploaded: {file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
