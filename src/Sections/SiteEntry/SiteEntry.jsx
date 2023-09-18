import React from "react";
import "./SiteEntry.css";
function SiteEntry() {
  return (
    <div className="sizereg">
    <div className="entry flex justify-center gap-10 md:justify-around items-center">
    <div className="imagen xl:order-last h-96 w-96 bg-black rounded-full"></div>
      <div className="texto xl:order-first">
        <h1 className="boujee-text">
          It's Mario! <br /> Full Stack Developer
        </h1>
        <p>
          Apasionado del proceso resolutivo de retos complejos e innovadores.
          Una persona curiosa e inquieta que disfruta aprendiendo. En constante
          formación intentando profundizar y abarcar en la variedad de
          tecnologías del mercado.
        </p>
      </div>
    </div>
      <div className="lottie">
      <lottie-player src="https://lottie.host/79035015-f64a-4ac5-8e8d-89233af3aa20/TtEgjp50OL.json" background="transparent" speed="1" style={{width: 100, height: 100}} loop autoplay></lottie-player>
      </div>
    </div>
  );
}

export default SiteEntry;
