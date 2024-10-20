import { MouseEventHandler } from "react";

export default function ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: MouseEventHandler;
}) {
  return (
    <>
      <div
        onClick={handleClick}
        className="p-3 bg-opacity-80 hover:border-orange-600 cursor-pointer w-[500px] text-white border-2 border-blue-950 bg-violet-900 rounded-lg m-2"
      >
        <p>{text}</p>
      </div>
    </>
  );
}
