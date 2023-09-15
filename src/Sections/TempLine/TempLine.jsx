import React, {useEffect,useState} from "react";
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

    const animateLine = (line, start, end, totalLength) => {
      const scrollY = window.scrollY;
      let progress =
        1 -
        (scrollY - start) /
          (end - start); // Calcular el progreso relativo a cada línea
      progress = Math.min(1, Math.max(0, progress));
      const currentOffset = totalLength * progress;

      line.style.strokeDashoffset = currentOffset;

      if (line === line01 && progress < 1) {
        console.log("line01")
        setLineOpacity({ ...lineOpacity, line01: 1 });
      } else if (line === line02 && progress < 1) {
        console.log("line02")
        setLineOpacity({ ...lineOpacity, line02: 1 });
      } else if (line === line03 && progress < 1) {
        console.log("line03")
        setLineOpacity({ ...lineOpacity, line03: 1 });
      }
    };

    const path = document.querySelector(".theLine");
    const line01 = document.querySelector(".theLine01");
    const line02 = document.querySelector(".theLine02");
    const line03 = document.querySelector(".theLine03");

    const totalLength = path.getTotalLength();
    const pathStart = totalLength * (10 / 100);
    const line01Start = totalLength * (32.5 / 100);
    const line02Start = totalLength * (55 / 100);
    const line03Start = totalLength * (74.5 / 100);

    window.addEventListener("scroll", () => {
      animateLine(path, pathStart, path.dataset.totalLength, path.dataset.totalLength);
      animateLine(line01, line01Start, line01Start + parseFloat(line01.dataset.totalLength), line01.dataset.totalLength);
      animateLine(line02, line02Start, line02Start + parseFloat(line02.dataset.totalLength), line02.dataset.totalLength);
      animateLine(line03, line03Start, line03Start + parseFloat(line03.dataset.totalLength), line03.dataset.totalLength);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="ewMFQeD8cLd1"
      viewBox="0 0 920 1500"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <line
        x1="460"
        y1="0"
        x2="-460"
        y2="0"
        transform="matrix(.08344 0 0-1 161.065244 199.981971)"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        className="line01"
        style={{ opacity: lineOpacity.line01 }}
      />
      <line
        x1="460"
        y1="0"
        x2="-460"
        y2="0"
        transform="matrix(.08344 0 0-1 640.635035 601.852178)"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        className="line02"
        style={{ opacity: lineOpacity.line02 }}
      />
      <line
        x1="460"
        y1="0"
        x2="-460"
        y2="0"
        transform="matrix(.08344 0 0-1 260.930726 997.600332)"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        className="line03"
        style={{ opacity: lineOpacity.line03 }}
      />
      <path
        d="M719.250478,0Q199.447641,59.845058,199.447641,199.981971c0,140.136913,401.11953,246.741408,401.11953,398.379718s-300.596032,237.815625-300.596032,403.29421s496.879208,297.284003,499.160323,397.814051"
        className="theLine"
        transform="translate(.000003 0.000002)"
        fill="none"
        stroke="#000"
        strokeWidth="4"
      />
      <path
        d="M179.951453,199.981971q-13.003825,82.32523,201.059154,201.311958t198.988588,200.558249h20.567977"
        className="theLine01"
        transform="translate(.000002 0)"
        fill="none"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M620.207716,601.852178q-4.449639,100.341587-148.026292,198.66333t-151.707851,197.084824h-20.502432"
        className="theLine02"
        transform="translate(.000002 0)"
        fill="none"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M279.933122,997.600332q7.270008,73.69931,50.163056,102.779343t60.007013,28.486483"
        className="theLine03"
        transform="translate(0 0.000001)"
        fill="none"
        stroke="#000"
        strokeWidth="3"
      />
    </svg>
  );
}

export default TempLine;
