import React from 'react'
import './about.css'
import Me from '../../assets/ak.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <arctice className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year</small>
            </arctice>
            <arctice className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+</small>
            </arctice>
            <arctice className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </arctice>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur pariatur nam dolorum, earum, modi, expedita voluptas sapiente illo mollitia quisquam fugit corrupti porro eligendi deserunt provident ducimus quis. Architecto, suscipit. Consectetur cumque fugit rerum quae, veniam perferendis dignissimos quasi quisquam est amet, fugiat, possimus inventore velit laudantium neque aliquam quo eveniet? Adipisci culpa repellat ipsum qui sit quibusdam enim, officiis soluta tempore ipsam mollitia non, ad obcaecati labore quas nesciunt? Officia atque esse minima veritatis tempora autem nemo, inventore in similique voluptates hic quibusdam dolor aliquid nulla vel consectetur ut dolore id eos itaque? Aperiam corrupti aliquam eveniet voluptatibus possimus nemo quasi qui enim quaerat, iusto asperiores, atque, corporis iste veritatis? Ea, maxime incidunt?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About