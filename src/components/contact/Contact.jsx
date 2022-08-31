import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('jeremiah.ca9@gmail.com', 'template_bo7cadh', form.current, 'L1zSmwDX1o2Wy77M0')
 
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>E-mail</h4>
          <h5>jeremiah.ca9@gmail.com</h5>
          <a href="mailto:jeremiah.ca9@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>jeremiah Silva</h5>
          <a href="https://m.me/profile.php?id=100012588603955" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5> +1 (587) 434-3195 </h5>
          <a href="https://api.whatsapp.com/send?phone+15874343195" target="_blank">Send a message</a>
        </article>
        </div>
          {/* END CONTACT OPTIONS*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder ='Your Full Name' required />
            <input type='email' name='email' placeholder='Your E-mail' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'> Send Message </button>
          </form>
        </div>
    </section>
  )
}

export default Contact 