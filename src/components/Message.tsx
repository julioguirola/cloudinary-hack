import "./Message.css";

export default function ({ who, text }: { who: boolean; text: string }) {
  const name = who ? "Hallow" : "Ween";
  const color = who ? "text-blue-500" : "text-green-500";
  return (
    <>
      {who && <img className="persona" width={200} src="/hallow.png" />}
      {!who && <img className="persona" width={200} src="/ween.png" />}
      <div className="p-3 hover:cursor-pointer hover:bg-opacity-100 bg-opacity-40 text-white w-[300px] border-2 border-orange-600 bg-violet-900 rounded-lg m-2">
        <p className={color}>{name}</p>
        {text}
      </div>
    </>
  );
}
