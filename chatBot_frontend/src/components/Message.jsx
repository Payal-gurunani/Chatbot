const Message = ({ text, sender }) => {
    return (
      <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
        <div className={`p-3 rounded-xl text-white ${sender === "user" ? "bg-blue-500" : "bg-gray-500"}`}>
          {text}
        </div>
      </div>
    );
  };
  
  export default Message;
  