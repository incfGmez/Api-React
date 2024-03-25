// App.jsx
import React from 'react';
import LandingPage from './components/LandingPage';
import MiApi from './components/MiApi';

function App() {
  return (
    <div className='contenedor-principal'>
      <LandingPage/>
      <MiApi />
    </div>
  );
}

export default App;
