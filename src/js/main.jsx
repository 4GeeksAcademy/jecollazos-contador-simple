import React from 'react';
import ReactDOM from 'react-dom/client';

// Tus imports de CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// --- CORRECCIÓN #3 (La de ahora) ---
import '../styles/index.css'; // <--- El '..' sube un nivel

// --- CORRECCIÓN #1 ---
// La ruta correcta a tu componente Home (incluyendo "js/")
import Home from './components/Home';

// --- CORRECCIÓN #2 ---
// 1. Creamos el "React Root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Creamos la variable para guardar los segundos
let segundosTotales = 0;

// 3. Usamos setInterval()
setInterval(() => {
  
  // 4. Renderizamos la app
  root.render(
    <React.StrictMode>
      <Home seconds={segundosTotales} />
    </React.StrictMode>
  );

  // 5. Aumentamos el contador
  segundosTotales++;

}, 1000);