import React from "react";
import Image from "next/image";

export default function Header() {
  const handleNewSessionCreation = () => {
    const confirmation = window.confirm(
      "Are you sure you want to start a new session?",
    );
    if (confirmation) {
      window.location.reload();
    }
  };

  const handleExitFullScreen = async () => {
    const isFullScreen = document.fullscreenElement;
    if (!isFullScreen) {
      const doc = document.documentElement;
      await doc.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="flex w-full items-center gap-6 border-b px-6 py-4">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <Image
            src="https://res-2.cloudinary.com/dcp9dwff4/image/upload/t_webp/8eo31x90fecmjjbhaloa7gh05k0x"
            alt={"Bianca Avatar"}
            width={56}
            height={56}
          />
        </div>
      </div>
      <h2 className="text-xl font-bold">Bianca Moretti</h2>
      <div className="ml-auto flex gap-2">
        <button
          className="btn btn-circle btn-outline ml-auto"
          onClick={handleNewSessionCreation}
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
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </button>
        <button
          className="btn btn-circle btn-outline"
          onClick={handleExitFullScreen}
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
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
