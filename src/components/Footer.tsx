import React, { useState } from "react";

type Props = {
  onSendMessage: (message: string) => void;
  isLoadingResponse: boolean;
};

export default function Footer({ onSendMessage, isLoadingResponse }: Props) {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (!message) return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="mt-auto flex gap-2 px-6 py-4">
      <input
        placeholder="Type a message"
        max={100}
        onKeyDown={handleKeyDown}
        value={message}
        disabled={isLoadingResponse}
        onChange={(e) => setMessage(e.target.value)}
        className="text-md w-full rounded-lg  border-transparent bg-neutral-700 px-4 py-2 font-normal text-white accent-transparent outline-none focus:border-none focus:border-transparent focus:ring-0 focus:ring-offset-0"
      />
      <button
        className="btn btn-square btn-primary rounded-lg"
        disabled={isLoadingResponse || !message}
        onClick={sendMessage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
}
