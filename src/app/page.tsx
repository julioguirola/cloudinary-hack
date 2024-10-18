"use client";
import { useState } from "react";
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

  const handleClick = () => {
    setStage(stage + 1);
  };

  return (
    <main className="flex h-dvh justify-center items-center">
      {window.visualViewport?.width + " "}
      {window.visualViewport?.height}
      <img src="/office.jpeg" className="absolute -z-10 h-dvh w-dvw" />
      <Stage stage={stage} />
      <Button text="Continuar" handleClick={handleClick} />
    </main>
  );
}
