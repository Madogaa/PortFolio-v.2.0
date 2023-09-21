import React from "react";
import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiSpring, SiDjango } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "DotShare- Demo Red Social",
      startDate: "ABR, 2023",
      endDate: "JUL, 2023",
      technologies: {
        frontEnd: [
          "Vue",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind",
          "MaterialUI",
        ],
        backEnd: ["Spring", "JPA/Hibernate", "JavaScript", "MySQL"],
      },
      frontEnd: FaVuejs,
      frontEndDesc: "Vue",
      backEnd: SiSpring,
      backEndDesc: "Spring",
      mockup: "dotshare-mock",
      link: "https://sc.madoga.dev",
      description:
        "Dotshare es una demo de una red social de comparticion de apuntes, donde podrás crear nuevas relaciones de amistad, compartir y enriquecer tu red con datos de interes, optimizando el tiempo de estudio y de busqueda de material util para el estudio.",
    },
    {
      title: "Daily-Calendar",
      startDate: "AGTO, 2023",
      endDate: "SEPT, 2023",
      technologies: {
        frontEnd: [
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind",
          "MaterialUI",
        ],
        backEnd: ["Node", "JavaScript", "MySQL"],
      },
      frontEnd: FaReact,
      frontEndDesc: "React",
      backEnd: FaNodeJs,
      backEndDesc: "Node",
      mockup: "daily-mock",
      link: "https://day.madoga.dev",
      description:
        "Daily es un calendario donde podrás crear, borrar y personalizar tus eventos, para tener una mayor organización y optimización de tus tareas.",
    },
    {
      title: "ShopyCheep- Price Comparator",
      startDate: "JUL, 2023",
      endDate: "AGTO, 2023",
      technologies: {
        frontEnd: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
        backEnd: ["Django", "Node", "JavaScript", "MySQL"],
        others: ["Web Scraping", "Selenium", "Beautifoul Soup"],
      },
      frontEnd: FaReact,
      frontEndDesc: "React",
      backEnd: SiDjango,
      backEndDesc: "Django",
      mockup: "shopy-mock",
      link: "https://sc.madoga.dev",
      description:
        "Shopycheep es un comparador de precios donde podrás ver los productos disponibles en cada supermercado. Además podrás buscar productos y ver donde se encuentran más baratos para optimizar tus compras y salvar tu bolsillo.",
    },
  ];

  return (
    <div className="w-full m-auto flex flex-col gap-28">
      <h1 className="boujee-text text-center">Personal Projects</h1>
      <div className="w-full grid grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} indice={index} item={project} />
        ))}
        <div className="col-span-3 text-center">
          <a
            href="https://github.com/Madogaa"
            className="bg-orange-200-t py-3 px-4 rounded-md border-orange-300 border-2 font-semibold text-orange-500"
          >
            Ver más...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
