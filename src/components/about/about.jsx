import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About MyPhoto" />
        </div>
       </div> 
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year Working</small> 
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Worldwide</small> 
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetcts</h5>
              <small>3 Completed</small> 
            </article>
          </div>
        <p>
        I am a full-stack developer with a passion for coding and learning about the latest 
        technologies and for helping develop a wide variety of features including both frontend 
        and backend components. Over one year of hands-on experience including Python, SQL, 
        MySQL, JavaScript, Vue.js, and React.js. 
        Eager to develop skills in a fast-paced environment and contribute to the success 
        of a company.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;