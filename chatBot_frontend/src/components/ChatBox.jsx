import { useState, useEffect, useRef } from "react";
import Message from "./Message.jsx";
import InputField from "./InputField.jsx";
import Loader from "./Loader.jsx";

const ChatBox = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true)
    try {
      //  MESSAGE  HANDLE BY TIMEOUT
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello! I am responding!!", sender: "bot" } // Ensure response is an object inside an array
      ]);
      setLoading(false)//hide loader
    }, 600);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setMessages([...newMessages, { text: "Error: Unable to fetch response", sender: "bot" }]);
      setLoading(false)
    }
  };
  return (
  <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 ">
      <div className="flex flex-col h-[80vh]  max-w-full bg-white shadow-lg rounded-2xl m-4 p-4">
      {/* Chat Messages */}
      <h1 className="text-2xl font-bold m-2 text-center">CHATBOT</h1>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}
          {loading && <Loader />}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Box */}
      {/* Input Field with Fixed Props */}
      <InputField input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  </div>
  );
};

export default ChatBox;
