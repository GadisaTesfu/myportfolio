import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Issue Tracking System',
    description: `An ITS is a software application that helps organizations manage and track reported issues in their products throughout their lifecycle. It enables teams to capture, prioritize, assign, track progress, and resolve issues efficiently.`,
    images: [
      '././src/assets/img/login.png',
      '././src/assets/img/login.jpg',
      '././src/assets/img/branch.png',
      '././src/assets/img/kb.png',
    ],
  },
  {
    title: 'Human Resource Management System',
    description: `A HRMS is a software application that helps organizations manage all aspects of their workforce, from recruitment to retirement`,
    images: [
      '../../src/assets/img/hrm/login.png',
      'https://gadisatesfu.vercel.app/static/media/port3.be51d361f5e2ca20e98d.jpg',
    ],
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
    images: [
      'https://gadisatesfu.vercel.app/static/media/gad.077429bf3aaaf273b05e.png',
      'https://gadisatesfu.vercel.app/static/media/gad.077429bf3aaaf273b05e.png',
      'https://gadisatesfu.vercel.app/static/media/port3.be51d361f5e2ca20e98d.jpg',
    ],
  },
  {
    title: 'Project 4',
    description: 'Description of Project 4.',
    images: [
      'https://gadisatesfu.vercel.app/static/media/gad.077429bf3aaaf273b05e.png',
      '../../src/assets/img/kb.png',
      '../../src/assets/img/kb.png',
    ],
  },
];

function Project() {
  const [currentSlides, setCurrentSlides] = useState(projects.map(() => 0));
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prevSlides => prevSlides.map((slide, index) => (slide + 1) % projects[index].images.length));
    }, 5000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const prevSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      newSlides[index] = (newSlides[index] - 1 + projects[index].images.length) % projects[index].images.length;
      return newSlides;
    });
    setShowDescription(false);
  };

  const nextSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      newSlides[index] = (newSlides[index] + 1) % projects[index].images.length;
      return newSlides;
    });
    setShowDescription(false);
  };

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div>
      <div> <marquee behavior="" direction="left"> <h2>My Projects</h2></marquee></div>
<div className="project-section">
      {projects.map((project, projectIndex) => (
        <div className={`project-card ${projectIndex === currentSlides[projectIndex] ? 'active' : ''}`} key={projectIndex}>
          <div
            className="project-image"
            style={{ backgroundImage: `url(${project.images[currentSlides[projectIndex]]})` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="prev-btn" onClick={() => prevSlide(projectIndex)}>&#10094;</button>
            <button className="next-btn" onClick={() => nextSlide(projectIndex)}>&#10095;</button>
            {showDescription && (
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  
  );
}

export default Project;
