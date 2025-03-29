import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const clearHistory = () => {
    alert("Interview history cleared!");
  };

  return (
    <div className="ml-64 p-10">
      <h2 className="text-2xl font-bold mb-5">Settings</h2>

      <div className="bg-white p-5 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 font-semibold">Dark Mode</span>
          <button
            className={`px-4 py-2 rounded ${darkMode ? "bg-green-600 text-white" : "bg-gray-300 text-gray-800"}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "On" : "Off"}
          </button>
        </div>

        <button
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          onClick={clearHistory}
        >
          Clear Interview History
        </button>
      </div>
    </div>
  );
};

export default Settings;
