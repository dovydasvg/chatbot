import React from "react";

export default function Header() {
  return (
    <div className="flex w-full items-center gap-6 border-b px-6 py-4">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src="https://res-2.cloudinary.com/dcp9dwff4/image/upload/t_webp/8eo31x90fecmjjbhaloa7gh05k0x" />
        </div>
      </div>
      <h2 className="text-xl font-bold">Bianca Moretti</h2>
    </div>
  );
}
