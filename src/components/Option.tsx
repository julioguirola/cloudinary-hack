import { MouseEventHandler } from "react";

export default function ({
  text,
  handleClick,
  empty,
}: {
  text: string;
  handleClick: MouseEventHandler;
  empty: boolean;
}) {
  return (
    <>
      {!empty && (
        <div
          onClick={handleClick}
          className="p-3 bg-opacity-80 hover:border-orange-600 cursor-pointer w-[500px] text-white border-2 border-blue-950 bg-violet-900 rounded-lg m-2"
        >
          <p>{text}</p>
        </div>
      )}
      {empty && <div className="h-[52px]"></div>}
    </>
  );
}
