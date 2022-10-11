import React from 'react'
import './header.css'
import CTA from'./CTA'
import ME from '../../assets/ak.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akshay Jha</h1>
        <h5 className='text-light'>Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img height={25} width={25} src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down

        </a>
      </div>
    </header>
  )
}

export default Header