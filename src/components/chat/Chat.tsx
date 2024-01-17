import { useEffect, useRef, useState } from "react";
import ChatBox from "./ChatBox";
import { api } from "~/utils/api";
import dayjs from "dayjs";
import ChatLoader from "./ChatLoader";
import Footer from "../Footer";
import { getCurrentTimeString } from "~/utils/date";
import type { Message } from "~/shared/types";
import { useAtom } from "jotai";
import { userAtom } from "~/store/atoms/user";
import { getIntroMessageWithName } from "./helper-function";

const CHAT_CONTAINER_ID = "chat-container";

export default function Chat() {
  const [user] = useAtom(userAtom);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (user.name.length > 0) {
      setMessages([
        {
          text: getIntroMessageWithName(user.name),
          time: dayjs().format("h:mm A"),
          sender: "assistant",
        },
      ]);
    }
  }, [user.name]);
  const { mutateAsync: replyToAi, isLoading: aiIsReplying } =
    api.post.replyToAi.useMutation();

  const bottomItemRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (message: string) => {
    const newMessage: Message = {
      text: message,
      time: getCurrentTimeString(),
      sender: "user",
    };
    setMessages((messages) => [...messages, newMessage]);

    const response = await replyToAi({
      messages: [...messages, newMessage],
      user: { name: user.name },
    });
    const botMessage: Message = {
      text: response ?? "Sorry, I didn't get that",
      time: getCurrentTimeString(),
      sender: "assistant",
    };

    setMessages((messages) => [...messages, botMessage]);
  };

  useEffect(() => {
    bottomItemRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <>
      <div className="overflow-auto px-6 py-4" id={CHAT_CONTAINER_ID}>
        {messages.map((message) => (
          <ChatBox
            key={message.text + message.time}
            message={message.text}
            time={message.time}
            position={message.sender === "assistant" ? "start" : "end"}
          />
        ))}
        {aiIsReplying && <ChatLoader />}
        <div ref={bottomItemRef}></div>
      </div>
      <Footer onSendMessage={sendMessage} isLoadingResponse={aiIsReplying} />
    </>
  );
}
