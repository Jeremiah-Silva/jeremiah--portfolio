import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jeremiah</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Sercives</a></li>
          <li><a href="#portfolio">PortFolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href='https://facebook.com'></a>
          <a href='https://instagram.com'></a>
          <a href='https://twitter.com'></a>
        </div>
      </footer>
  )
}

export default Footer 