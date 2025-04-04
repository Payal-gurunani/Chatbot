import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    
    messages: [
      {
        role: {
          type: String,
          enum: ["user", "bot"],
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
