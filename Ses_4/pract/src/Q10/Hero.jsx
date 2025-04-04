import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="hero-section text-center text-white" style={{ backgroundImage: 'url(hero-bg.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <div className="container">
        <h1>Hi, I'm [Your Name]</h1>
        <p>Welcome to my portfolio website</p>
      </div>
    </div>
  );
};

export default Hero;