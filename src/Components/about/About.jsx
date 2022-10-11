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
      <div className="container about__container">
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laborum natus molestiae labore, voluptatibus, dolor odit vero asperiores aperiam voluptas ut cupiditate sed perferendis similique suscipit illum nesciunt, quae deserunt distinctio recusandae quo dolorum. Voluptatibus sit non maxime cumque esse officia. Reiciendis consectetur illum minus expedita. Numquam nesciunt illum laudantium.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About