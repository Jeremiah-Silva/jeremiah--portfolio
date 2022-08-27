import React from 'react';
import './experience.css';
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>HTML</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>CSS</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>JavaScript</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>ReactJS</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>VueJS</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND*/}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>NodeJs</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>MongoDB</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>SQL</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill />
            <h2>Phyton</h2>
            <medium className='text-light'>Experienced</medium>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience 