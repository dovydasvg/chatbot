import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { userAtom } from "~/store/atoms/user";

const MODAL_ID = "user_intro_modal";

export default function IntroPopup() {
  const [_, setUser] = useAtom(userAtom);
  const [newUserName, setNewUserName] = useState("");
  useEffect(() => {
    const modal = document.getElementById(MODAL_ID) as HTMLDialogElement;
    modal?.showModal();
  }, []);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Enter") {
      await handleStartClick();
    }
  };

  const handleStartClick = async () => {
    if (!newUserName) return;
    setUser((prev) => ({ ...prev, name: newUserName }));
    const modal = document.getElementById(MODAL_ID) as HTMLDialogElement;
    modal?.close();
    // make full screen
    const doc = document.documentElement;

    await doc.requestFullscreen();
  };

  return (
    <dialog id={MODAL_ID} className="modal" onKeyDown={handleKeyDown}>
      <div className="modal-box bg-neutral-800">
        <h3 className="text-lg font-bold">Hey! 👋</h3>
        <p className="py-4">
          Enter your name to start chatting with Bianca Moretti 🍒
        </p>
        <input
          type="text"
          placeholder="Your name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          className="text-md w-full rounded-lg  border-transparent bg-neutral-700 px-4 py-2 font-normal text-white accent-transparent outline-none focus:border-none focus:border-transparent focus:ring-0 focus:ring-offset-0"
        />
        <div className="modal-action">
          <form method="dialog">
            <button
              onClick={handleStartClick}
              className="btn btn-primary"
              disabled={!newUserName}
            >
              Start
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
