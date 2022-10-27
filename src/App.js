import React from 'react';
import './styles/index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';


function App() {
  return (
    <div className="h-screen bg-gradient-radial from-greennnn to-pinkkk">
        <NavBar /> 
        <Hero />
    </div>
  );
}

export default App;
