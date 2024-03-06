import React from "react";

const Resultado = ({ Prom }) => {
  let mensaje = "";
  if (Prom >= 0 && Prom <= 2.9) {
    mensaje = "No es rentable";
  } else if (Prom >= 3 && Prom <= 4.9) {
    mensaje = "Es poco rentable";
  } else if (Prom >= 5 && Prom <= 7.9) {
    mensaje = "Es rentable";
  } else if (Prom >= 8 && Prom <= 10) {
    mensaje = "Es muy rentable";
  }

  return (
    <div className="resultado">
      <p>{mensaje}</p>
      <p>{Prom}</p>
    </div>
  );
};

export default Resultado;
