import React from "react";
import ChatBox from "./ChatBox";

type Chat = {
  message: string;
  time: string;
  sender: "bot" | "user";
};

export default function Chat() {
  const chats: Chat[] = [
    {
      message: "Hello there!",
      time: "2 hours ago",
      sender: "bot",
    },
    {
      message: "General Kenobi!",
      time: "2 hours ago",
      sender: "user",
    },
    {
      message: "You are a bold one.",
      time: "2 hours ago",
      sender: "bot",
    },
  ];
  return (
    <div className="px-6 py-4">
      {chats.map((chat) => (
        <ChatBox
          message={chat.message}
          time={chat.time}
          position={chat.sender === "bot" ? "start" : "end"}
        />
      ))}
    </div>
  );
}
