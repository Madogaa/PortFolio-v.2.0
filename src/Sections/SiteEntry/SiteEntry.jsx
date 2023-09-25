import React from "react";
import "./SiteEntry.css";
import { useDataContext } from "../../Context/DataContext";
function SiteEntry() {
  const { language } = useDataContext();

  const translations = {

    es: {
      title: "¡Es Mario!  <br/> Full Stack Developer",
      description:
        "Apasionado del proceso resolutivo de retos complejos e innovadores. Una persona curiosa e inquieta que disfruta aprendiendo. En constante formación intentando profundizar y abarcar en la variedad de tecnologías del mercado.",
    },
    en: {
      title: "It's Mario!  <br/> Full Stack Developer",
      description:
        "Passionate about solving complex and innovative challenges. A curious and restless person who enjoys learning. Constantly training, trying to delve into and cover the variety of technologies on the market.",
    },
  };
  const translation = translations[language];
  return (
    <div className="sizereg">
    <div className="entry flex justify-center gap-4 md:gap-10 md:justify-around items-center">
    <div className="imagen xl:order-last overflow-hidden rounded-full">
      <img className="w-full" src="/Removal.png" alt=""></img>
    </div>
      <div className="texto xl:order-first">
      <h1 className="boujee-text"  dangerouslySetInnerHTML={{ __html: translation.title }} />
          <p>{translation.description}</p>
      </div>
    </div>
      <div className="lottie">
      <lottie-player src="https://lottie.host/79035015-f64a-4ac5-8e8d-89233af3aa20/TtEgjp50OL.json" background="transparent" speed="1" style={{width: 100, height: 100}} loop autoplay></lottie-player>
      </div>
    </div>
  );
}

export default SiteEntry;
