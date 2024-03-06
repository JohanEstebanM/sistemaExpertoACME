import React, { useState } from "react";

const FormularioTopografiaTerreno = ({ onGuardar }) => {
  const [topografia, setTopografia] = useState("");

  const handleChangeTopografia = (event) => {
    setTopografia(event.target.value);
    onGuardar({ topografia: event.target.value });
  };

  return (
    <div>
      <label htmlFor="topografia">Selecciona la topografía del terreno</label>
      <select
        id="topografia"
        value={topografia}
        onChange={handleChangeTopografia}
      >
        <option value="">Selecciona una opción</option>
        <option value="10">Plano</option>
        <option value="6">Irregular</option>
        <option value="3">Montañoso</option>
      </select>
    </div>
  );
};

export default FormularioTopografiaTerreno;
