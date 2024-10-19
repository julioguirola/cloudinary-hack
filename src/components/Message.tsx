export default function ({ who, text }: { who: boolean; text: string }) {
  const name = who ? "Hallow" : "Ween";
  const color = who ? "text-blue-500" : "text-green-500";
  return (
    <>
      <div className="p-3 bg-opacity-40 w-[700px] text-white border-2 border-orange-600 bg-violet-900 rounded-lg m-2">
        <strong className={color}>{name}</strong>
        <p>{text}</p>
        <small>(Toca para continuar)</small>
      </div>
    </>
  );
}
