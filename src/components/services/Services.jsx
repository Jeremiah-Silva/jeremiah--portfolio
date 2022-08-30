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
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
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
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
          </ul>
      </article>  
      {/* WEB DEVELOPMENT*/}
      <article className="service">
          <div className="service__head">
          <h3>Define the matter</h3>
          </div> 

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>bla bla bla bla abncjfjr 91923ksk skjds</p> 
            </li>
          </ul>
      </article>  
      {/* END OF DEFINE THE MATTER*/}
      </div>
      
      </section>
  )
}

export default Services 