import dynamic from "next/dynamic";
import Head from "next/head";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

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
        <div className="container flex max-h-[99dvh] w-full max-w-lg flex-col rounded-lg border border-gray-50">
          <Header />
          <Chat />
        </div>
      </main>
    </>
  );
}
