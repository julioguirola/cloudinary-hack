"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Message from "@/components/Message";

function Stage({ stage }: { stage: number }) {
  return (
    <section>
      <Message
        text={"Hola esta es la seccion " + stage}
        who={stage % 2 === 0 ? true : false}
      />
    </section>
  );
}

export default function Home() {
  const [stage, setStage] = useState(1);
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.onresize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
    }
  });

  const handleClick = () => {
    setStage(stage + 1);
  };

  return (
    <>
      {size[0] >= size[1] && (
        <main className="flex h-dvh justify-center items-center">
          <img src="/office.jpeg" className="absolute -z-10 h-full w-full" />
          <Stage stage={stage} />
          <Button text="Continuar" handleClick={handleClick} />
        </main>
      )}
      {size[0] < size[1] && (
        <main className="flex h-dvh justify-center items-center">
          <img src="/rotate.png" />
        </main>
      )}
    </>
  );
}
