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
  const [size, setSize] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setSize(window.innerWidth + " " + window.innerHeight);
    }
  }, []);

  const handleClick = () => {
    setStage(stage + 1);
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <img src="/office.jpeg" className="absolute -z-10 h-full w-full" />
      <Stage stage={stage} />
      <Button text="Continuar" handleClick={handleClick} />
    </main>
  );
}
