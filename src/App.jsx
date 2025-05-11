import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AstroProject from './AstroProject';
import FurnaceProject from './FurnaceProject';

export default function App() {
  return (
    <div style={{ backgroundColor: '#111', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'Courier New, monospace' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astro" element={<AstroProject />} />
        <Route path="/furnace" element={<FurnaceProject />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <img src="/me.jpg" alt="me" style={{ width: 120, height: 120, borderRadius: '50%' }} />
        <h1>Sayan Saha</h1>
        <p>Mechatronics Engineering Student & Space Enthusiast</p>
      </header>
      <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <Link to="/astro" style={cardStyle}>
          <img src="/astro.jpg" alt="project 1" style={imgStyle} />
          <h3>Astro Project</h3>
          <p>#Python #OpenCV</p>
        </Link>
        <Link to="/furnace" style={cardStyle}>
          <img src="/furnace.jpg" alt="project 2" style={imgStyle} />
          <h3>Furnace Simulation</h3>
          <p>#MATLAB #Thermal</p>
        </Link>
      </section>
    </div>
  );
}

const cardStyle = {
  background: '#222',
  padding: '1rem',
  borderRadius: '10px',
  flex: '1 1 200px',
  textDecoration: 'none',
  color: 'white'
};

const imgStyle = {
  width: '100%',
  borderRadius: '10px'
};
