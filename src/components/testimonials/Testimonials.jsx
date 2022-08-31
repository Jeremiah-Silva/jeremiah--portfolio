import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar:AVTR1,
  name: "image1",
  review: 'TExt ASDJFJNV and bla blab bla PERSON 1 dsf dsffdlffghfgy5675675676575676575676575676556 75 67 56 756 756gkdfgl dflkgdlkfg'
},
{
  avatar:AVTR2,
  name: "image2",
  review: 'kdjdfkjgkldfjgdlfkjgdlfkjgdfkljgdklfjgldfkjgdfkljgfdlkjgd'
},
{
  avatar:AVTR3,
  name: "image3",
  review: 'kdjdfkjgkldfjgdlfkjgdlfkjgdfkljgdklfjgldfkjgdfkljgfdlkjgd'
},
{
  avatar:AVTR4,
  name: "image4",
  review: 'kdjdfkjgkldfjgdlfkjgdlfkjgdfkljgdklfjgldfkjgdfkljgfdlkjgd'
},
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination8]}
       spaceBetween={40} //pixels
       slidesPerView={1} // pixels
       pagination={{ clickable: true }}>
        {
          data.map (({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
  )
}

export default Testimonials