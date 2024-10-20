"use client";
import { CldUploadWidget } from "next-cloudinary";
import "./page.css";
import { useEffect, useState } from "react";
import Message from "@/components/Message";
import Option from "@/components/Option";
import Image from "next/image";
import office from "../../public/office.jpeg";

function Stage_One({ nextStage }: { nextStage: Function }) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/hallow_m.png"}
          alt="Detective Hallow"
          width={250}
          height={250}
          className="h-[35dvh]"
        />
        <Image
          src={"/ween.png"}
          alt="Detective Ween"
          width={250}
          height={250}
          className="h-[35dvh]"
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
        empty={false}
      />
      <Option
        handleClick={() => {
          const risa = new Audio("/laugh.mp3");
          risa.play();
          nextStage(-1);
        }}
        text={"Jaja muy gracioso... me voy."}
        empty={false}
      />
    </section>
  );
}

function Stage_Two({ nextStage }: { nextStage: Function }) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/ween.png"}
          alt="Detective Ween"
          width={250}
          height={250}
          className="h-[25dvh]"
        />
      </div>

      <Message
        who={false}
        text="Sabemos que posees una imágen de la escena del crimen que estamos investigando, pues recientemente esuviste en lugares embrujados."
      />

      <Option
        handleClick={() => {
          nextStage(-2);
        }}
        text={"No creo haber estado en esos lugares"}
        empty={false}
      />
      <Option
        handleClick={() => {
          nextStage(3);
        }}
        text={"¿Una imágen?"}
        empty={false}
      />
    </section>
  );
}

function Stage_OneTwo({ nextStage }: { nextStage: Function }) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/hallow.png"}
          alt="Detective hallow"
          width={250}
          height={250}
          className="h-[25dvh]"
        />
      </div>

      <Message who={true} text="Irte no es una opción." />

      <Option
        handleClick={() => {
          nextStage(3);
        }}
        text={"¿Qué quieren de mí?"}
        empty={false}
      />
      <Option
        handleClick={() => {
          nextStage(3);
        }}
        text={"¿Qué quieren de mí?"}
        empty={true}
      />
    </section>
  );
}

function Stage_Three({ nextStage }: { nextStage: Function }) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/hallow_m.png"}
          alt="Detective hallow"
          width={250}
          height={250}
          className="h-[25dvh]"
        />
      </div>

      <Message
        who={true}
        text="Posees una imágen que es evidencia clara, al menos para nosotros. Es algo que no puedes ver con tus propios ojos. Revisa en tu galería y entréganos esa imágen."
      />

      <Option
        handleClick={() => {
          const subir = new Audio("/subir.mp3");
          subir.play();
          nextStage(4);
        }}
        text={"De acuerdo."}
        empty={false}
      />
      <Option
        handleClick={() => {
          const subir = new Audio("/subir.mp3");
          subir.play();
          nextStage(4);
        }}
        text={"De acuerdo."}
        empty={true}
      />
    </section>
  );
}

function Stage_TwoThree({ nextStage }: { nextStage: Function }) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/ween_m.png"}
          alt="Detective Ween"
          width={250}
          height={250}
          className="h-[25dvh]"
        />
      </div>

      <Message
        who={false}
        text="Aunque no te diste cuenta, estabas en un lugar espeluznante, tomaste una foto, por favor dánoslas y te mostraré de qué estamos hablando."
      />

      <Option
        handleClick={() => {
          const subir = new Audio("/subir.mp3");
          subir.play();
          nextStage(4);
        }}
        text={"De acuerdo."}
        empty={false}
      />
      <Option
        handleClick={() => {
          const subir = new Audio("/subir.mp3");
          subir.play();
          nextStage(4);
        }}
        text={"De acuerdo."}
        empty={true}
      />
    </section>
  );
}

function Stage_Four({ nextStage }: { nextStage: Function }) {
  return (
    <section className="flex flex-col items-center sticky top-20">
      <div className="flex justify-evenly">
        <Image
          src={"/ween_m.png"}
          alt="Detective Ween"
          width={250}
          height={250}
          className="h-[25dvh]"
        />
        <CldUploadWidget
          options={{
            sources: ["local"],
            multiple: false,
            maxFiles: 1,
            language: "es",
            theme: "purple",
            text: {
              es: {
                or: "O",

                menu: {
                  files: "Subir desde tu dispositivo",
                },
                local: {
                  browse: "Seleccionar",
                  dd_title_single: "Arrastra tu imagen aquí",
                },
              },
            },
          }}
          uploadPreset="ml_default"
        >
          {({ open }) => {
            return (
              <button
                className="bg-orange-600 self-center px-4 py-2 text-white rounded-lg hover:saturate-150 transition"
                onClick={() => open()}
              >
                <strong>Subir Imágen</strong>
              </button>
            );
          }}
        </CldUploadWidget>
        <Image
          src={"/hallow.png"}
          alt="Detective Hallow"
          width={250}
          height={250}
          className="h-[25dvh]"
        />
      </div>

      <Message who={false} text="Sabíamos que estabas dispuesto a colaborar." />
      <Option
        handleClick={() => {
          const subir = new Audio("/subir.mp3");
          subir.play();
          nextStage(4);
        }}
        text={"De acuerdo."}
        empty={true}
      />
      <Option
        handleClick={() => {
          const subir = new Audio("/subir.mp3");
          subir.play();
          nextStage(4);
        }}
        text={"De acuerdo."}
        empty={true}
      />
    </section>
  );
}

export default function Home() {
  const [stage, setStage] = useState(1);
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const sound = new Audio("/halloween.mpga");
    sound.play();
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
        <>
          <Image src={office} alt="Office" className="absolute -z-10 h-dvh" />
          <main className="flex h-[95dvh] justify-center items-end">
            {stage === 1 && <Stage_One nextStage={setStage} />}
            {stage === 2 && <Stage_Two nextStage={setStage} />}
            {stage === -1 && <Stage_OneTwo nextStage={setStage} />}
            {stage === 3 && <Stage_Three nextStage={setStage} />}
            {stage === -2 && <Stage_TwoThree nextStage={setStage} />}
            {stage === 4 && <Stage_Four nextStage={setStage} />}
          </main>
        </>
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
