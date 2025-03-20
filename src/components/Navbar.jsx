import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items" aria-label="Go to Home Section">Home</a>
          <a href="#experience" className="nav_items" aria-label="Go to Experience Section">Experience</a>
          <a href="#skills" className="nav_items" aria-label="Go to Skills Section">Skills</a>
          <a href="#projects" className="nav_items" aria-label="Go to Projects Section">Project</a>
          <a href="#contact" className="nav_items" aria-label="Go to Contact Section">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
