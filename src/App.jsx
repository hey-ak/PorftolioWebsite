import React from 'react'
import Footer from './Components/footer/Footer'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Header from './Components/header/Header'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Nav from './Components/nav/Nav'
import Services from './Components/services/Services'
// import Testimonials from './Components/testimonials/Testimonials'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>

    </>
  )
}

export default App