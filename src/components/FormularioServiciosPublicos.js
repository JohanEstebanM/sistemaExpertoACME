import React, { useState } from "react";

const FormularioServiciosPublicos = ({ onGuardar }) => {
  const [servicios, setServicios] = useState([]);

  const handleChangeServicios = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setServicios(selectedOptions);
    onGuardar({ servicios: selectedOptions });
  };

  return (
    <div>
      <label htmlFor="servicios">
        Selecciona los servicios públicos disponibles
      </label>
      <select id="servicios" value={servicios} onChange={handleChangeServicios}>
        <option value="">Selecciona una opción</option>
        <option value="10">Agua, Luz y Gas</option>
        <option value="5">Agua y Luz</option>
        <option value="4">Agua y Gas</option>
        <option value="3">Luz y Gas</option>
        <option value="2">Luz</option>
        <option value="1">Agua</option>
        <option value="0.5">Gas</option>
        <option value="0">Ninguno</option>
      </select>
    </div>
  );
};

export default FormularioServiciosPublicos;
