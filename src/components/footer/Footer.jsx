import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jeremiah Silva</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">PortFolio</a></li>
          <li><a href="#knowledge1">Knowledge</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href='https://www.facebook.com/profile.php?id=100012588603955' target="_blank"><FaFacebookF/></a>
          <a href='https://www.instagram.com/jeremiah_i19/' target="_blank"><FiInstagram/></a>
          <a href='https://twitter.com/Jeremiah_ca9' target="_blank"><IoLogoTwitter/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Jeremiah Silva. All rights reserved.</small>
        </div>
      </footer>
  )
}

export default Footer;