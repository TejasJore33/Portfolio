import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="container footer" id='Footer'>
        <h1>Get In Touch</h1>
        <div className="footer icons" data-aos="fade-up" data-aos-duration="1000">
        <a className='logo' href="https://github.com/TejasJore33"target='_blank'><FaGithub /></a>
        <a className='logo' href="https://x.com/tejasjore33" target='_blank'><FaXTwitter /></a>
        <a className='logo' href="https://www.linkedin.com/in/tejas-jore-207794254"target='_blank'><FaLinkedin /></a>
        <a className='logo' href="mailto:tejasjore33@gmail.com"target='_blank'><IoIosMail /></a>
        <a className='logo' href="https://www.instagram.com/tejas__jore?igsh=eWRrNTR1MGhndTdl" target='_blank'><FaInstagram /></a>
        </div>
       
    </div>
    </>
    
  );
};

export default Footer;
