import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Chat from "~/components/chat/Chat";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>The Great ChatBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 font-mono text-gray-50">
        <div className="container flex w-full max-w-lg flex-col rounded-lg border border-gray-50">
          <Header />
          <Chat />
          <Footer />
        </div>
      </main>
    </>
  );
}
