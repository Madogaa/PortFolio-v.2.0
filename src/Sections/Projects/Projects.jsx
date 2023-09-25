import React from "react";
import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiSpring, SiDjango } from "react-icons/si";
import { useDataContext } from "../../Context/DataContext";

function Projects() {

  const { language } = useDataContext(); // Obtiene el idioma actual del contexto de datos

  const translations = {
    es: {
      personalProjects: "Proyectos Personales",
      seeMore: "Ver más...",
      projects: [
        {
          title: "DotShare- Demo Red Social",
          startDate: "ABR, 2023",
          endDate: "JUL, 2023",
          description:
            "Dotshare es una demo de una red social de compartición de apuntes, donde podrás crear nuevas relaciones de amistad, compartir y enriquecer tu red con datos de interés, optimizando el tiempo de estudio y de búsqueda de material útil para el estudio.",
        },
        {
          title: "Daily- Calendario",
          startDate: "AGO, 2023",
          endDate: "SEP, 2023",
          description:
            "Daily es un calendario donde podrás crear, borrar y personalizar tus eventos, para tener una mayor organización y optimización de tus tareas.",
        },
        {
          title: "ShopyCheep- Comparador de Precios",
          startDate: "JUL, 2023",
          endDate: "AGO, 2023",
          description:
            "Shopycheep es un comparador de precios donde podrás ver los productos disponibles en cada supermercado. Además podrás buscar productos y ver donde se encuentran más baratos para optimizar tus compras y salvar tu bolsillo.",
        },
      ],
    },
    en: {
      personalProjects: "Personal Projects",
      seeMore: "See more...",
      projects: [
        {
          title: "DotShare- Social Media Demo",
          startDate: "APR, 2023",
          endDate: "JUL, 2023",
          description:
            "Dotshare is a demo of a note-sharing social network, where you can create new friendships, share and enrich your network with interesting data, optimizing study time and material search for study purposes.",
        },
        {
          title: "Daily- Calendar",
          startDate: "AUG, 2023",
          endDate: "SEP, 2023",
          description:
            "Daily is a calendar where you can create, delete, and customize your events for better organization and task optimization.",
        },
        {
          title: "ShopyCheep- Price Comparator",
          startDate: "JUL, 2023",
          endDate: "AUG, 2023",
          description: "Shopycheep is a price comparison tool where you can see the products available at each supermarket. You can also search for products and find where they are cheaper to optimize your shopping and take care of your wallet."
        }
      ]
    },
  };
  const translation = translations[language];

  const projects = [
    {
      title: translation.projects[0].title,
      startDate: translation.projects[0].startDate,
      endDate: translation.projects[0].endDate,
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
      frontGit: "https://github.com/Madogaa/TFG-Frontend",
      backGit: "https://github.com/Madogaa/TFG-Backend",
      description:  translation.projects[0].description

    },
    {
      title: translation.projects[1].title,
      startDate: translation.projects[1].startDate,
      endDate: translation.projects[1].endDate,
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
      frontGit: "https://github.com/Madogaa/Calendar",
      backGit: "https://github.com/Madogaa/DailyApi-Node",
      description:  translation.projects[1].description
    },
    {
      title: translation.projects[2].title,
      startDate: translation.projects[2].startDate,
      endDate: translation.projects[2].endDate,
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
      frontGit: "https://github.com/Madogaa/Shopycheep",
      backGit: "https://github.com/Madogaa/ShopycheepAPI",
      description:  translation.projects[2].description
    },
  ];

  return (
    <div className="w-full pt-28 m-auto flex flex-col gap-8 sm:gap-10 md:gap-20 xl:gap-28">
      <h1 className="boujee-text text-center">{translation.personalProjects}</h1>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} indice={index} item={project} />
        ))}
        <div className="w-full text-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Madogaa"
            className="bg-orange-200-t py-3 px-4 rounded-md border-orange-300 border-2 font-semibold text-orange-500"
          >
            {translation.seeMore}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
