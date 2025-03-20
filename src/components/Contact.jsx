import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1 style={{ marginTop: '60px' }}>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up" data-aos-duration="1000">
        <a href='https://www.instagram.com/tejas__jore?igsh=eWRrNTR1MGhndTdl' target='_blank' className="items"><FaInstagram className='icons'/>
        </a>
        <a className="items"><CiFacebook className='icons'/></a>
        <a href='https://www.linkedin.com/in/tejas-jore-207794254' target='_blank' className="items"><FaLinkedin className='icons'/>
        </a>
        <a href='https://x.com/tejasjore33' target='_blank' className="items"><FaXTwitter className='icons'/>
        </a>
        <a href='https://github.com/TejasJore33'target='_blank' className="items"><FaGithub className='icons'/> 
        </a>
        <a href='mailto:tejasjore33@gmail.com' target='_blank' className="items"><SiGmail className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact
