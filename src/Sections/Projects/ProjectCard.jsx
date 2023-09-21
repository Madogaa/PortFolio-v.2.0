import React, { useState } from "react";
import "./ProjectCard.css";
import { BiDetail } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import { MdMilitaryTech } from "react-icons/md";

function ProjectCard({ item, indice }) {
  const [activeContent, setActiveContent] = useState("check");
  const paletes = [
    {
      backgroundColor: "bg-green-200-t",
      borderColor: "border-green-300",
      textColor: "text-green-400",
      logoColor: "green",
    },
    {
      backgroundColor: "bg-red-200-t",
      borderColor: "border-red-300",
      textColor: "text-red-400",
      logoColor: "red",
    },
    {
      backgroundColor: "bg-orange-200-t",
      borderColor: "border-orange-300",
      textColor: "text-orange-400",
      logoColor: "orange",
    },
  ];

  const contentMap = {
    check: <div className={`w-full h-full ${item.mockup}`}></div>,
    detail: (
      <>
        <div className="flex justify-between items-center px-6 py-3">
          <p>{item.startDate}</p>
          <p>{item.endDate}</p>
        </div>
        <div
          className={`flex justify-around items-center ${paletes[indice].logoColor}`}
        >
          <div className="contenido flex font-semibold flex-col items-center justify-center gap-2">
            <item.frontEnd size={96} />
            <p>{item.frontEndDesc}</p>
          </div>
          <div className="flex gap-2 flex-col items-center justify-center font-semibold">
            <item.backEnd size={96} />
            <p>{item.backEndDesc}</p>
          </div>
        </div>
      </>
    ),
    code: (
      <div className="px-6 py-3">
        <h2 className="text-lg font-semibold mb-2">Descripción</h2>
        <p className=""> {item.description}</p>
      </div>
    ),
    militaryTech: (
      <div className="contenedor">
        {/* Aquí coloca el contenido relacionado con el enlace Military Tech */}
        {/* Por ejemplo: <p>Tecnologías militares utilizadas</p> */}
      </div>
    ),
  };

  const handleLinkClick = (contentKey) => {
    setActiveContent(contentKey);
  };

  return (
    <div
      className={`react-icons flex flex-col relative w-full h-96 border rounded-lg overflow-hidden border-2 ${paletes[indice].borderColor} ${paletes[indice].textColor}`}
    >
      <a href={item.link} className={`p-4 ${paletes[indice].backgroundColor}  `}>
        <h3 className="font-semibold ">{item.title}</h3>
        <p>2023</p>
      </a>

      <a href={item.link} className="flex-grow flex flex-col justify-around ">
        {contentMap[activeContent]}
      </a>

      <div
        className={`footer w-full p-2 gap-10 flex justify-center ${paletes[indice].backgroundColor}`}
      >
        <button className="px-5" onClick={() => handleLinkClick("check")}>
          <AiOutlineCheck size={32} />
        </button>
        <button className="px-5" onClick={() => handleLinkClick("detail")}>
          <GoCodeReview size={32} />
        </button>
        <button className="px-5" onClick={() => handleLinkClick("code")}>
          <BiDetail size={32} />
        </button>
        <button
          className="px-5"
          onClick={() => handleLinkClick("militaryTech")}
        >
          <MdMilitaryTech size={32} />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
