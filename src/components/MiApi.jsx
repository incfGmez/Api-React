import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

function MiApi() {

  const [monedas, setMonedas] = useState([]);
  const [monedasOriginales, setMonedasOriginales] = useState([]); 
  const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    fetch('https://mindicador.cl/api')
      .then(response => response.json())
      .then(data => {
        const monedasDisponibles = Object.entries(data).filter(([key, value]) => key !== 'version' && key !== 'autor' && key !== 'fecha');
        setMonedas(monedasDisponibles);
        setMonedasOriginales(monedasDisponibles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener las monedas:', error);
        setLoading(false);
      });
  }, []);
  const ordenarMonedasAlfabeticamente = () => {
    const monedasOrdenadas = [...monedas];
    monedasOrdenadas.sort((a, b) => {
      const nombreMonedaA = a[0];
      const nombreMonedaB = b[0];
      return nombreMonedaA.localeCompare(nombreMonedaB);
    });
    setMonedas(monedasOrdenadas);
  };
  const restaurarMonedasOriginales = () => {
    setMonedas(monedasOriginales);
  };
  return (
    <div className='contenedor-api'>
      <h2>Monedas</h2>
      <section className="botones">
        <button onClick={ordenarMonedasAlfabeticamente}>Ordenar alfabéticamente</button>
        <button onClick={restaurarMonedasOriginales}>Volver</button>
      </section>
      <Buscador monedas={monedasOriginales} setMonedas={setMonedas} /> 
      {loading ? (
        <p>Cargando monedas...</p>
      ) : (
        <section className="tabla-api">
          <table>
            <thead>
              <tr>
                <th className='titulo-tbl-moneda'>Moneda</th>
                <th className='titulo-tbl-valor'>Valor</th>
              </tr>
            </thead>
            <tbody>
              {monedas.map(([moneda, valor], index) => (
                <tr key={index}>
                  <td>{moneda}</td>
                  <td>{valor.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
export default MiApi;




