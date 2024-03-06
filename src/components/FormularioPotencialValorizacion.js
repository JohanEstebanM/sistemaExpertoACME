import React, { useState } from 'react';

const FormularioPotencialValorizacion = ({ onGuardar }) => {
  const [potencialValorizacion, setPotencialValorizacion] = useState('');

  const handleChangePotencialValorizacion = (event) => {
    setPotencialValorizacion(event.target.value);
    onGuardar({ potencialValorizacion: event.target.value });
  }

  return (
    <div>
      <label htmlFor="potencialValorizacion">Selecciona el potencial de valorización</label>
      <select id="potencialValorizacion" value={potencialValorizacion} onChange={handleChangePotencialValorizacion}>
        <option value="">Selecciona una opción</option>
        <option value="10">Alto</option>
        <option value="5">Medio</option>
        <option value="3">Bajo</option>
      </select>
    </div>
  );
}

export default FormularioPotencialValorizacion;
