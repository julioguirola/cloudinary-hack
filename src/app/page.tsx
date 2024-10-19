"use client";
import "./page.css";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Message from "@/components/Message";
import { MouseEventHandler } from "react";
import Image from "next/image";

function Stage_One() {
  return (
    <section>
      <div className="flex justify-evenly">
        <Image
          src={"/hallow_m.png"}
          alt="Detective Hallow"
          width={250}
          height={250}
        />
        <Image
          src={"/ween.png"}
          alt="Detective Ween"
          width={250}
          height={250}
        />
      </div>
      <Message
        who={true}
        text="Saludos, soy el Detective Hallow y ella es mi companera Ween, te hemos traído aquí porque tienes pruebas de un caso aterrador."
      />
    </section>
  );
}

export default function Home() {
  const [stage, setStage] = useState(1);
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    if (typeof window !== undefined) {
      setSize([window.innerWidth, window.innerHeight]);
      window.onresize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
    }
  }, []);

  return (
    <>
      {size[0] >= size[1] && (
        <main className="flex h-dvh justify-center items-center">
          <Image
            src="/office.jpeg"
            className="absolute -z-10 h-full w-full"
            alt="Office backgroung"
            fill={true}
          />
          <Stage_One />
        </main>
      )}
      {size[0] < size[1] && (
        <main className="flex h-dvh justify-center items-center">
          <Image
            src="/rotate.png"
            alt="Rotate Screen"
            width={200}
            height={200}
          />
        </main>
      )}
    </>
  );
}
