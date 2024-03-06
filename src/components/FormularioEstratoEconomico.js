import React, { useState } from 'react';

const FormularioEstratoEconomico = ({ onGuardar }) => {
  const [estrato, setEstrato] = useState('');

  const handleChangeEstrato = (event) => {
    setEstrato(event.target.value);
    onGuardar({ estrato: event.target.value });
  }

  return (
    <div>
      <label htmlFor="estrato">Selecciona el estrato económico</label>
      <select id="estrato" value={estrato} onChange={handleChangeEstrato}>
        <option value="">Selecciona una opción</option>
        <option value="3">Estrato 1 - 2</option>
        <option value="6">Estrato 3 - 4</option>
        <option value="10">Estrato 5 - 6</option>
      </select>
    </div>
  );
}

export default FormularioEstratoEconomico;