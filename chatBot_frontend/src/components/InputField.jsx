import React from "react";

const InputField = ({ input, setInput, sendMessage }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-lg p-2"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default InputField;
