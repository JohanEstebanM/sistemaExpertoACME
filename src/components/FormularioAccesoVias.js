import React, { useState } from 'react';

const FormularioAccesoVias = ({ onGuardar }) => {
  const [accesoVias, setAccesoVias] = useState('');

  const handleChangeAccesoVias = (event) => {
    setAccesoVias(event.target.value);
    onGuardar({ accesoVias: event.target.value });
  }

  return (
    <div>
      <label htmlFor="accesoVias">Selecciona el acceso a vías</label>
      <select id="accesoVias" value={accesoVias} onChange={handleChangeAccesoVias}>
        <option value="">Selecciona una opción</option>
        <option value="10">Principales</option>
        <option value="5">Limitado</option>
        <option value="1">Ausente</option>
      </select>
    </div>
  );
}

export default FormularioAccesoVias;
