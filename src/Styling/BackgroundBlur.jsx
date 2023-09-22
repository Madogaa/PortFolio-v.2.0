import React from "react";

function BackgroundBlur() {
  return (
    <div
      className="fixed left-1/2 top-0 -z-10 -translate-x-1/2 w-full h-full blur-3xl xl:-top-6"
      aria-hidden="true"
    >
      <div
        className="max-w-screen aspect-[1155/678] bg-gradient-to-tr from-[#FECACA] to-[#FDBA74] opacity-30"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
  );
}

export default BackgroundBlur;
