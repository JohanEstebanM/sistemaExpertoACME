import React, { useState } from "react";

const FormularioTelecomunicaciones = ({ onGuardar }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleChange = (event) => {
    setOpcionSeleccionada(event.target.value);
    onGuardar({ telecomunicaciones: event.target.value });
  };

  return (
    <div>
      <label>Infraestructura de Telecomunicaciones</label>
      <select value={opcionSeleccionada} onChange={handleChange}>
        <option value="">Selecciona una opción</option>
        <option value="10">
          Conexión 4G, Disponibilidad de proveedores de Internet, Conexión a
          Internet de alta velocidad
        </option>
        <option value="7">
          Conexión 4G, Disponibilidad de proveedores de Internet
        </option>
        <option value="4">Conexión 4G</option>
        <option value="0">Ninguna</option>
      </select>
    </div>
  );
};

export default FormularioTelecomunicaciones;
