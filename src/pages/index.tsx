import dynamic from "next/dynamic";
import Head from "next/head";

import Header from "~/components/Header";
import IntroPopup from "~/components/IntroPopup";

const Chat = dynamic(() => import("~/components/chat/Chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>The Great ChatBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex  min-h-screen flex-col items-center justify-center bg-neutral-900  font-mono text-gray-50">
        <div className="container flex h-[99dvh] max-h-[99dvh] w-full max-w-lg flex-col rounded-lg border border-gray-50 sm:max-h-[500px]">
          <Header />
          <Chat />
        </div>
        <IntroPopup />
      </main>
    </>
  );
}
