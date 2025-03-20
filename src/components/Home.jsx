import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/TejasJore-Resume.pdf';  // Ensure this path is correct
import hero from './data/hero.json'; // Make sure hero.json contains the 'imgSrc' key
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to my profile", "My name is Tejas Jore", "I'm a Full Stack developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id='home'>
        <div className="left"data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1> {/* Corrected the reference name */}
          {/* Ensure the button has correct styling */}
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img"data-aos="fade-up-left" data-aos-duration="1000">
            {/* Make sure hero.imgSrc points to a valid image in /assets/ */}
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
