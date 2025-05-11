import React, { useState } from 'react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (projectName) => {
    setSelectedProject(projectName === selectedProject ? null : projectName);  // Toggle the selected project
  };

  return (
    <div style={{ backgroundColor: '#111', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'Courier New, monospace' }}>
      <header style={{ textAlign: 'center' }}>
        <img src="/me.jpg" alt="me" style={{ width: 120, height: 120, borderRadius: '50%' }} />
        <h1>Sayan Saha</h1>
        <p>Mechatronics Engineering Student & Space Enthusiast</p>
      </header>

      <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <div style={cardStyle} onClick={() => handleCardClick('astro')}>
          <img src="/astro.jpg" alt="project 1" style={imgStyle} />
          <h3>Astro Project</h3>
          <p>#Python #OpenCV</p>
        </div>
        {selectedProject === 'astro' && (
          <div style={descriptionStyle}>
            <h3>Astro Project Description</h3>
            <p>This project involved using Python and OpenCV to analyze astronomical data. It focused on image processing and pattern recognition for star mapping.</p>
          </div>
        )}

        <div style={cardStyle} onClick={() => handleCardClick('furnace')}>
          <img src="/furnace.jpg" alt="project 2" style={imgStyle} />
          <h3>Furnace Simulation</h3>
          <p>#MATLAB #Thermal</p>
        </div>
        {selectedProject === 'furnace' && (
          <div style={descriptionStyle}>
            <h3>Furnace Simulation Description</h3>
            <p>This project simulated the thermal properties of a furnace using MATLAB. The goal was to model heat transfer and optimize energy usage.</p>
          </div>
        )}
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
  color: 'white',
  cursor: 'pointer',  // Make the cards clickable
};

const imgStyle = {
  width: '100%',
  borderRadius: '10px',
};

const descriptionStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  borderRadius: '10px',
  flex: '1 1 200px',
  marginTop: '1rem',  // Space between the card and description
  maxWidth: '600px',  // Limit the description width
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};
