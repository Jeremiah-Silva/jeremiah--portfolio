import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div> 

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Research and evaluate a variety of interactive media software products.</p> 
            <br></br> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prepare mock-ups and storyboards.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lead and co-ordinate multidisciplinary teams to develop Website graphics, content, 
                capacity and interactivity.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Source, select and organize information for inclusion and design the appearance, layout and flow of the Website.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create and optimize content for Website using a variety of graphics, database, animation and other software.</p> 
            <br></br>
            </li>
          </ul>
      </article>  
      {/* END OF UI/UX*/}
      <article className="service">
          <div className="service__head">
          <h3>Web Development</h3>
          </div> 
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop Website architeture and determine hardware and software requirements.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Research and evaluate a variety of interactive media software products.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Source, select and organize information for inclusion and design the appearance, layout and flow of the Website.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lead and co-ordinate multidisciplinary teams to develop Website graphics, content, capacity and interactivity.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct tests and perform security and quality controls.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Plan, design, write, modify, integrate and test Web-site related code.</p> 
              <br></br>
            </li>
          </ul>
      </article>  
      {/* WEB DEVELOPMENT*/}
      <article className="service">
          <div className="service__head">
          <h3>e-Commerce</h3>
          </div> 

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop eCommerce platforms to analyze and process data for different clients. </p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a new payment processing method for merchants.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement navigation features in Website and app.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build integrations for next generation of card readers.</p> 
            <br></br>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop and support an image recognition service.</p> 
            <br></br>
            </li>
          </ul>
      </article>  
      {/* END OF DEFINE THE MATTER*/}
      </div>
      
      </section>
  )
}

export default Services 