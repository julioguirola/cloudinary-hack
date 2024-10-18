import { MouseEventHandler } from "react";

export default function ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={handleClick}
      className="relative active:top-1 border-0 bg-violet-900 text-white rounded-lg p-3 h-12 hover:bg-violet-950 m-2"
    >
      {text}
    </button>
  );
}
