import { useEffect, useState } from "react";
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

  return (
    <>
      <div className="overflow-auto px-6 py-4">
        {messages.map((message) => (
          <ChatBox
            key={message.text + message.time}
            message={message.text}
            time={message.time}
            position={message.sender === "assistant" ? "start" : "end"}
          />
        ))}
        {aiIsReplying && <ChatLoader />}
      </div>
      <Footer onSendMessage={sendMessage} isLoadingResponse={aiIsReplying} />
    </>
  );
}
