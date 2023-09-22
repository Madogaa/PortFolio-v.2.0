import React, { useEffect, useState } from "react";
import "./TempLine.css";

function TempLine() {
  const [lineOpacity, setLineOpacity] = useState({
    line01: 0,
    line02: 0,
    line03: 0,
  });
  useEffect(() => {
    const lines = document.querySelectorAll(
      ".theLine, .theLine01, .theLine02, .theLine03"
    );

    lines.forEach((line) => {
      const totalLength = line.getTotalLength(); // Obtén la longitud total para cada línea
      line.style.strokeDasharray = totalLength;
      line.style.strokeDashoffset = totalLength;
      line.dataset.totalLength = totalLength; // Almacena la longitud total en un atributo personalizado
    });

    const animateLine = (line, start, end, totalLength) => { // Ajusta esta velocidad según tus preferencias
      let portion = 6.5
      if (window.innerWidth > 600 && window.innerWidth < 1000) portion = 4
      if (window.innerWidth > 500 && window.innerWidth < 600) portion = 0.5
      if (window.innerWidth < 500) portion = -1.5;
      const scrollY = window.scrollY - (window.innerHeight * portion / 10 );
      let progress = 1 - (scrollY - start) / (end - start); // Calcular el progreso relativo a cada línea
      progress = Math.min(1, Math.max(0, progress));
      const currentOffset = totalLength * progress;

      line.style.strokeDashoffset = currentOffset;

      setLineOpacity((prevOpacity) => {
        if (line == line01) {
          return { ...prevOpacity, line01: progress < 1 ? 1 : 0 };
        }
        if (line == line02) {
          return { ...prevOpacity, line02: progress < 1 ? 1 : 0 };
        }
        if (line == line03) {
          return { ...prevOpacity, line03: progress < 1 ? 1 : 0 };
        }
        return prevOpacity;
      });

      //console.log(line.className.baseVal + "/" + progress)
    };

    const path = document.querySelector(".theLine");
    const line01 = document.querySelector(".theLine01");
    const line02 = document.querySelector(".theLine02");
    const line03 = document.querySelector(".theLine03");

    const totalLength = path.getTotalLength();
    const pathStart = 0;
    const line01Start = totalLength * (20 / 100);
    const line02Start = totalLength * (51 / 100);
    const line03Start = totalLength * (78 / 100);

    window.addEventListener("scroll", () => {
      animateLine(
        path,
        pathStart,
        path.dataset.totalLength,
        path.dataset.totalLength
      );
      animateLine(
        line01,
        line01Start,
        line01Start + parseFloat(line01.dataset.totalLength),
        line01.dataset.totalLength
      );
      animateLine(
        line02,
        line02Start,
        line02Start + parseFloat(line02.dataset.totalLength),
        line02.dataset.totalLength
      );
      animateLine(
        line03,
        line03Start,
        line03Start + parseFloat(line03.dataset.totalLength),
        line03.dataset.totalLength
      );
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="temp-line mb-20 relative flex justify-center items-center w-full ">
      <div
        id="box01"
        className={`box ${
          lineOpacity.line01 > 0 ? "box-visible" : "opacity-0"
        }`}
      >
        <h4>Bachillerato Cientifico</h4>
        <h6>IES Juanelo Turriano</h6>
        <p>Toledo, Spain</p>
      </div>
      <div
        id="box02"
        className={`box ${
          lineOpacity.line02 > 0 ? "box-visible" : "opacity-0"
        }`}
      >
        <h4>Desarrollo de Aplicaciones Multiplataforma</h4>
        <h6>IES Azarquiel</h6>
        <p>Toledo, Spain</p>
      </div>
      <div
        id="box03"
        className={`box ${
          lineOpacity.line03 > 0 ? "box-visible" : "opacity-0"
        }`}
      >
        <h4>Data Analyst Jr.</h4>
        <h6>ICSRed</h6>
        <p>Toledo, Spain</p>
        <p>Tech: Python, Numpy, Pandas, Plotly, Excel, Git, Azure Devops, Scrum.</p>
      </div>
      <svg
        id="eR9PWMKTw8l1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 553 1256"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <line
          x1="-1034.4559"
          y1="0"
          x2="-1930.309208"
          y2="0.007919"
          transform="matrix(.08344 0 0-1 161.065 199.982)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          className="line01"
          style={{ opacity: lineOpacity.line01 }}
        />

        <line
          x1="-1050.275647"
          y1="0"
          x2="-1946.09784"
          y2="0"
          transform="matrix(.08344 0 0-1 640.635 601.852)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          className="line02"
          style={{ opacity: lineOpacity.line02 }}
        />

        <line
          x1="-1050.244532"
          y1="0"
          x2="-1946.09784"
          y2="0"
          transform="matrix(.08344 0 0-1 263.931 997.6)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          className="line03"
          style={{ opacity: lineOpacity.line03 }}
        />

        <path
          d="M55.951453,199.981971q-13.003825,82.32523,201.059154,201.311958t198.988588,200.558249h20.567977"
          transform="translate(.000002 0)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          className="theLine01"
        />

        <path
          d="M496.207716,601.852178q-4.449639,100.341587-148.026292,198.66333t-151.707851,197.084824h-20.502432"
          transform="translate(.000002 0)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          className="theLine02"
        />

        <path
          d="M155.933122,997.600332q7.270008,73.69931,50.163056,102.779343t60.007013,28.486483"
          transform="translate(0 0.000001)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
          className="theLine03"
        />

        <path
          d="M375.955559,1.88772C259.218047,41.493189,75.750533,93.800016,75.447641,199.974079c0,140.131329,401,246.731577,401,398.363846s-300.506457,237.80615-300.506457,403.278142s288.535774,153.857888,290.816209,254.383931"
          transform="translate(.000003 0.000002)"
          fill="none"
          stroke="#000"
          strokeWidth="4"
          className="theLine"
        />
      </svg>
    </div>
  );
}

export default TempLine;
