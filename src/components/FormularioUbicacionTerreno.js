import React, { useState } from "react";
import "../App.css";

const FormularioUbicacionTerreno = ({ onGuardar }) => {
  const [ubicacion, setUbicacion] = useState("");

  const handleChangeUbicacion = (event) => {
    setUbicacion(event.target.value);
    onGuardar({ ubicacion: event.target.value });
  };
  return (
    <div>
      <label htmlFor="ubicacion">Selecciona la ubicación del terreno</label>
      <select id="ubicacion" value={ubicacion} onChange={handleChangeUbicacion}>
        <option value="">Selecciona una opción</option>
        <option value="10">Urbana</option>
        <option value="5">Rural</option>
      </select>
    </div>
  );
};

export default FormularioUbicacionTerreno;
