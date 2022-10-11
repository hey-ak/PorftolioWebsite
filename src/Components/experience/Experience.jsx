import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

 const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>HTML</h4>
          <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>CSS</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Javascript</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Bootstrap</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Tailwind</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>React</h4>
          <small className="text-light">Basic</small>
          </article>
        </div>
      </div>
      {/* End  Of Frontend */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>NodeJs</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Mysql</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Python</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>Java</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4>MongoDB</h4>
          <small className="text-light">Basic</small>
          </article>
          <article className="experience__details">
          <BsPatchCheckFill/>
          <h4></h4>
          <small className="text-light">Basic</small>
          </article>
        </div>
        
      </div>
    </section>
  )
}
export default Experience