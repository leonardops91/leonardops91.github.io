import { X } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Text } from "../textComponent";


type ModalProps = {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div
          className={`flex gap-2 justify-center items-center flex-col p-6 fixed -bottom-54 z-50 rounded-lg  backdrop-blur-md bg-gray-300 container h-[50%] w-[80%] lg:w-[40%] transition-all duration-[.1s] ease-linear opacity-0 -y-1000 ${
            props.isModalOpen && "mb-0 bg-opacity-50 opacity-100 bottom-20"
          }`}
        >
          <div
            className="absolute top-4 right-4 hover:brightness-75 cursor-pointer"
            onClick={() => props.setIsModalOpen(false)}
          >
            <X size={20} className=" hover:animate-[spin_.9s_ease]" />
          </div>
          <Text
            variant="title"
            content="Congratulations!"
            className="text-center"
          />
          <Text
            variant="subtitle"
            content="You found an easter egg"
            className="text-center hidden lg:block"
          />
          <Text
            variant="medium"
            content="Now you can look the code of this page"
            className="text-center"
          />
          <Text
            variant="bold"
            content="Have fun!"
            className="hidden lg:block"
          />
          <a
            className="rounded-md py-1 px-2 bg-gray-200 hover:bg-gray-300 text-gray-900 transition-all"
            target="_blanck"
            rel="noopener noreferrer"
            href="https://github.com/leonardops91/leonardops91.github.io"
          >
            Go to repository
          </a>
          <div>
            <a
              title="Contador de Visitas do MegaContador"
              href="https://megacontador.com.br/"
            >
              <img
                src="https://megacontador.com.br/img-RE1aZU7BXyz60I8E-3.gif"
                alt="Contador de visitas"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}