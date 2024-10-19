"use client";
import "./page.css";
import { useEffect, useState } from "react";
import Message from "@/components/Message";
import Option from "@/components/Option";
import Image from "next/image";
import office from "../../public/office.jpeg";

function Stage_One({
  stage,
  nextStage,
}: {
  stage: number;
  nextStage: Function;
}) {
  return (
    <section className="flex flex-col items-center sticky top-20">
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
        text="Saludos, soy el Detective Hallow y ella es mi companera Ween, te hemos traído a la oficina del terror."
      />

      <Option
        handleClick={() => {
          nextStage(2);
        }}
        text={"¿Por qué estoy aquí?"}
        stage={stage}
      />
      <Option
        handleClick={() => {
          nextStage(-1);
        }}
        text={"Jaja muy gracioso... me voy."}
        stage={stage}
      />
    </section>
  );
}

function Stage_Two({
  stage,
  nextStage,
}: {
  stage: number;
  nextStage: Function;
}) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/ween.png"}
          alt="Detective Ween"
          width={250}
          height={250}
        />
      </div>

      <Message
        who={false}
        text="Sabemos que posees dos imágenes de la escena del crimen que estamos investigando, pues recientemente esuviste en lugares embrujados."
      />

      <Option
        handleClick={() => {
          nextStage(3);
        }}
        text={"No creo haber estado en esos lugares"}
        stage={stage}
      />
      <Option
        handleClick={() => {
          nextStage(3);
        }}
        text={"¿Dos imágenes?"}
        stage={stage}
      />
    </section>
  );
}

function Stage_OneTwo({
  stage,
  nextStage,
}: {
  stage: number;
  nextStage: Function;
}) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/hallow.png"}
          alt="Detective hallow"
          width={250}
          height={250}
        />
      </div>

      <Message who={true} text="Irte no es una opción." />

      <Option
        handleClick={() => {
          nextStage(2);
        }}
        text={"¿Qué quieren de mí?"}
        stage={stage}
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
          <Image src={office} alt="Office" className="absolute -z-10 h-fit" />
          {stage === 1 && <Stage_One stage={1} nextStage={setStage} />}
          {stage === 2 && <Stage_Two stage={2} nextStage={setStage} />}
          {stage === -1 && <Stage_OneTwo stage={2} nextStage={setStage} />}
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
