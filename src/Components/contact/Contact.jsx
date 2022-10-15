import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md' 
import {BsWhatsapp} from 'react-icons/bs' 


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
        <MdOutlineEmail className='icn'/>
          <h4>Email</h4>
          <h5>akshay0127.be21@chitkara.edu.in</h5>
          <a href="mailto:akshay0127.be21@chitkara.edu.in" target='_blank'>Send A Message</a>
        </article>
        {/* <article className='contact__option'>
        <MdOutlineEmail/>
          <h4>Message</h4>
          <h5></h5>
          <a href="mailto:akshay0127.be21@chitkara.edu.in">Send A Message</a>
        </article> */}
        <article className='contact__option'>
        <BsWhatsapp className='icn'/>
          <h4>Whatsapp</h4>
          <h5>7632061200</h5>
          <a href="https://web.whatsapp.com/send?phone+917632061200" target='_blank'>Send A Message</a>
        </article>

        </div>
        {/* End Of Contact Option */}
        <form action="">
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email"  name='email' placeholder='Your Email' required/>
            <textarea name="message" placeholder='Message' rows="10" required></textarea>
            <button type='submit' className='btn btn-primary cnt'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact