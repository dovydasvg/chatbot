import React from "react";

type Props = {
  position: "start" | "end";
  message: string;
  time: string;
};

export default function ChatBox({ position, message, time }: Props) {
  return (
    <div className={`chat ${position === "start" ? "chat-start" : "chat-end"}`}>
      <div className="chat-bubble-primary chat-bubble rounded">{message}</div>
      <div className="chat-footer opacity-50">
        <time className="text-xs opacity-50">{time}</time>
      </div>
    </div>
  );
}
