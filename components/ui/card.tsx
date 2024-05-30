import React from "react";
import Button from "./button";
type CardInterface = {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText?: string;
};
export default function Card(props: CardInterface) {
  const { title, icon, description, buttonText = "Get it for Free!" } = props;

  return (
    <div className="group select-none h-full flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
      <div className="">
        <div className="text-center p-3 flex-auto justify-center">
          <div className="group-hover:animate-none animate-bounce w-12 h-12 flex items-center text-gray-600 fill-purple-600 mx-auto">
            {icon}
          </div>
          <h2 className="text-xl font-bold py-4 text-gray-200">{title}</h2>
          <p className="font-bold text-sm text-gray-500 px-2">{description}</p>
        </div>
        <div className="p-2 mt-2 text-center space-x-1 md:block">
          <Button >{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
