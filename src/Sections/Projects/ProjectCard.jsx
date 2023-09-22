import React, { useState } from "react";
import "./ProjectCard.css";
import { BiDetail } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";
import { MdMilitaryTech } from "react-icons/md";
import { BiLogoGithub } from "react-icons/bi";
function ProjectCard({ item, indice }) {
  const [activeContent, setActiveContent] = useState("check");
  const paletes = [
    {
      backgroundColor: "bg-green-300",
      borderColor: "border-green-400",
      textColor: "text-green-500",
      logoColor: "green",
    },
    {
      backgroundColor: "bg-red-300",
      borderColor: "border-red-400",
      textColor: "text-red-500",
      logoColor: "red",
    },
    {
      backgroundColor: "bg-orange-300",
      borderColor: "border-orange-400",
      textColor: "text-orange-500",
      logoColor: "orange",
    },
  ];

  const contentMap = {
    check: <div className={`w-full h-72 ${item.mockup}`}></div>,
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
      <div className="m-auto px-6 py-6">
        <h2 className="text-lg font-semibold pb-2">Front-end</h2>
        <div className="w-full flex flex-wrap gap-4">
          {item.technologies.frontEnd.map((tech, index) => (
            <p
              key={index}
              className={`w-fit px-2 py-1 border-2 rounded-md ${paletes[indice].borderColor} ${paletes[indice].backgroundColor}`}
            >
              {tech}
            </p>
          ))}
          <a
            href={item.frontGit}
            target="_blank"
            rel="noreferrer"
            className={`w-fit px-2 py-1 border-2 rounded-md ${paletes[indice].borderColor} ${paletes[indice].backgroundColor}`}
          >
            <BiLogoGithub size={24} />
          </a>
        </div>
        <h2 className="text-lg font-semibold py-2">Back-end</h2>
        <div className="w-full flex flex-wrap gap-4">
          {item.technologies.backEnd.map((tech, index) => (
            <p
              key={index}
              className={`w-fit px-2 py-1 border-2 rounded-md ${paletes[indice].borderColor} ${paletes[indice].backgroundColor}`}
            >
              {tech}
            </p>
          ))}
          <a
            href={item.backGit}
            target="_blank"
            rel="noreferrer"
            className={`w-fit px-2 py-1 border-2 rounded-md ${paletes[indice].borderColor} ${paletes[indice].backgroundColor}`}
          >
            <BiLogoGithub size={24} />
          </a>
        </div>
      </div>
    ),
  };

  const handleLinkClick = (contentKey) => {
    setActiveContent(contentKey);
  };

  return (
    <div
      className={`react-icons project flex flex-col relative border rounded-lg overflow-hidden border-2 ${paletes[indice].borderColor} ${paletes[indice].textColor}`}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className={`p-4 ${paletes[indice].backgroundColor}  `}
      >
        <h3 className="font-semibold ">{item.title}</h3>
        <p>2023</p>
      </a>

      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="flex-grow flex flex-col justify-around "
      >
        {contentMap[activeContent]}
      </a>

      <div
        className={`footer w-full p-2 flex justify-around ${paletes[indice].backgroundColor}`}
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
