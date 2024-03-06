import React, { useState } from "react";

const FormularioSeguridadSector = ({ onGuardar }) => {
  const [seguridadSector, setSeguridadSector] = useState("");

  const handleChangeSeguridadSector = (event) => {
    setSeguridadSector(event.target.value);
    onGuardar({ seguridadSector: event.target.value });
  };

  return (
    <div>
      <label htmlFor="seguridadSector">
        Selecciona el nivel de seguridad del sector
      </label>
      <select
        id="seguridadSector"
        value={seguridadSector}
        onChange={handleChangeSeguridadSector}
      >
        <option value="">Selecciona una opción</option>
        <option value="10">Alto</option>
        <option value="5">Medio</option>
        <option value="3">Bajo</option>
      </select>
    </div>
  );
};

export default FormularioSeguridadSector;
