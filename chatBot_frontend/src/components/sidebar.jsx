import { FaChartLine, FaUpload, FaClipboardList, FaCog } from "react-icons/fa";
import logo from "../assets/logo1.png"
const Sidebar = ({ setActivePage }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed">
      <img src={logo} alt="Logo" className="w-12 h-12 rounded-full"/>
      <h2 className="text-xl font-bold mb-6">Interview Bot</h2>
      <ul className="space-y-4">
        <li
          className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setActivePage("dashboard")}
        >
          <FaChartLine className="mr-3" /> Dashboard
        </li>
        <li
          className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setActivePage("upload")}
        >
          <FaUpload className="mr-3" /> Upload Resume
        </li>
        <li
          className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setActivePage("mockInterview")}
        >
          <FaClipboardList className="mr-3" /> Mock Interview
        </li>
        <li
          className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setActivePage("settings")}
        >
          <FaCog className="mr-3" /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
