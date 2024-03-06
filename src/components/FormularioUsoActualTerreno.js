import React, { useState } from "react";

const FormularioUsoActualTerreno = ({ onGuardar }) => {
  const [usoActual, setUsoActual] = useState("");

  const handleChangeUsoActual = (event) => {
    setUsoActual(event.target.value);
    onGuardar({ usoActual: event.target.value });
  };

  return (
    <div>
      <label htmlFor="usoActual">Selecciona el uso actual del terreno</label>
      <select id="usoActual" value={usoActual} onChange={handleChangeUsoActual}>
        <option value="">Selecciona una opción</option>
        <option value="4">Agrícola</option>
        <option value="6">Comercial</option>
        <option value="9">Residencial</option>
      </select>
    </div>
  );
};

export default FormularioUsoActualTerreno;
