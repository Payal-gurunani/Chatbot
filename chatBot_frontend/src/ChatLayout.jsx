import Sidebar from "./components/sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Upload from "./components/Uploadresume.jsx";
import MockInterview from "./components/MockInterview";
import Settings from "././components/Setting.jsx";
import ChatBox from "././components/chatBox.jsx";
import { useState } from "react";

const ChatLayout = () => {
  const [activePage, setActivePage] = useState("chat");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64"> {/* ml-64 to avoid overlap with sidebar */}
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "upload" && <Upload />}
        {activePage === "mockInterview" && <MockInterview />}
        {activePage === "settings" && <Settings />}
        {activePage === "chat" && <ChatBox />}
      </div>
    </div>
  );
};

export default ChatLayout;
