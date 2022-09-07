import React from 'react';
import './Knowledge.css';
import JS from '../../assets/JavaScript.png';
import REACTJS from '../../assets/ReactJs.png';
import HTML from '../../assets/HTML.png';
import MONGODB from '../../assets/MongoDB.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar: JS,
  name: "JavaScript",
  review: 'JavaScript is the programming language of the Web.'
},
{
  avatar:REACTJS,
  name: "ReactJs",
  review: 'A JavaScript library for building user interfaces.'
},
{
  avatar:HTML,
  name: "HTML",
  review: 'HTML is the standard markup language for Web pages.'
},
{
  avatar:MONGODB,
  name: "MongoDB",
  review: 'Is a document database with the scalability and flexibility that you want with the querying and indexing that you need'
},
]

const knowledge1 = () => {
  return (
    <section id='knowledge1'>
      <h5>About</h5>
      <h2>My knowledge</h2>

      <Swiper className="container knowledge__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40} //pixels
       slidesPerView={1} // pixels
       pagination={{ clickable: true }}>
        {
          data.map (({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='knowledge'>
                <div className='knowledge__avatar'>
                <img src={avatar} />
                </div>
                <h2 className='knowledge__name'>{name}</h2>
                <h3 className='knowledge__review'>{review}</h3>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
  )
}

export default knowledge1;