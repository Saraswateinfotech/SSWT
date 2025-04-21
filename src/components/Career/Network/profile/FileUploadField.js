// components/forms/profile/FileUploadField.js
import { useState } from 'react';

export default function FileUploadField({ onFileChange }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onFileChange(file);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
        <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-sm font-medium text-gray-600 group-hover:text-gray-700">
          {fileName ? fileName : "Upload Resume"}
        </span>
        <input 
          type='file' 
          className="hidden" 
          name="resume"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}