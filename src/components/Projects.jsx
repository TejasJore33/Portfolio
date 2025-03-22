import React, { useEffect } from 'react';
import project from "./data/projects.json";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Projects = () => {
  // Initialize AOS once the component is mounted
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <h1>PROJECTS</h1>
      <div className="card-container-wrapper" id='Projects'>
        {project.map((data) => (
          <div
            className="card-container"
            key={data.key}
            data-aos="flip-right" // Apply AOS animation
            data-aos-duration="1000" // Duration of the animation in ms
          >
            {/* Project image */}
            <a href={data.demo} className="hero-image-container">
              <img className="hero-image" src={data.imageSrc} alt={data.title} />
            </a>

            <main className="main-content">
              {/* Project title and description */}
              <h1>
                <a href={data.demo}>{data.title}</a>
              </h1>
              <p>{data.description}</p>
            </main>

            {/* Card footer with source link */}
            <div className="card-attribute">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQG3F2ODBvjn9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710489561937?e=1747872000&v=beta&t=JGd6wisHCSzePU11unjQVUBPKLtuh-ov0jXzErAeD1Y" // Placeholder avatar
                alt="avatar"
                className="small-avatar"
              />
              <p>
                Creation of <span><a href={data.source}>Tejas Jore.</a></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
