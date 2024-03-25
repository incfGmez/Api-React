import React, { useState } from 'react';

function Buscador({ monedas, setMonedas }) {
  const [filtro, setFiltro] = useState('');
  const handleChange = event => {
    setFiltro(event.target.value);
  };
  const filtrarMonedas = () => {
    const monedasFiltradas = monedas.filter(([moneda, valor]) => {
      return moneda.toLowerCase().includes(filtro.toLowerCase());
    });
    setMonedas(monedasFiltradas);
  };
  return (
    <div className='buscador'>
      <h2>Buscador</h2>
      <section className="oper-buscador">
        <input type="text" value={filtro} onChange={handleChange} placeholder="Buscar por moneda" />
        <button onClick={filtrarMonedas}>Buscar</button>
      </section>
    </div>
  );
}
export default Buscador;
