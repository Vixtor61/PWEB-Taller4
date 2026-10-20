import React, { useEffect, useState } from 'react';
import { Card, CardBody } from 'reactstrap'; // Componentes mínimos de Reactstrap

function App() {
  const [health, setHealth] = useState('');
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/health').then(r => r.json()).then(d => setHealth(d.health));
    fetch('http://localhost:3000/api/info').then(r => r.json()).then(d => setInfo(d.integrantes));
  }, []);

  return (
    <div>
      <h1>Taller IV</h1>

      {/* Requerimiento 4: Etiquetas obligatorias + estilo inline */}
      <section style={{ background: 'lightgreen', padding: '10px' }}>
        <div>
          <h4>Estado API</h4>
          <p>El API esta funcionando: {health}</p>
        </div>
      </section>

      {/* Requerimiento 5: Componentes de Reactstrap elegidos */}
      <h3>Integrantes</h3>
      {info.map((i, idx) => (
        <Card key={idx} style={{ margin: '10px 0' }}>
          <CardBody>
            <p>Carnet: {i.catnet} | Origen: {i.ciudad_origen} | Carrera: {i.carrera} | Proyectos: {i.num_proyecto}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default App;
