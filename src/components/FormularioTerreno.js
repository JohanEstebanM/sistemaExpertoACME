import React, { useState } from "react";
import "../App.css";

const FormularioTerreno = ({ onGuardar }) => {
  const [tamTerreno, setTamTerreno] = useState("");

  const handleChangeTamTerreno = (event) => {
    setTamTerreno(event.target.value);
    onGuardar({ tamTerreno: event.target.value });
  };
  return (
    <div>
      <label htmlFor="tamTerreno">Ingresa el tamaño del terreno</label>
      <select
        id="tamTerreno"
        value={tamTerreno}
        onChange={handleChangeTamTerreno}
      >
        <option value="">Selecciona una opción</option>
        <option value="2">65m - 100m</option>
        <option value="6">101m - 150m</option>
        <option value="10">150m - 200m</option>
      </select>
    </div>
  );
};

export default FormularioTerreno;
