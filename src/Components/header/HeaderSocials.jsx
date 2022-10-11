import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/akshay-jha-a95486238/" target="blank"><BsLinkedin/></a>
    <a href="https://github.com" target="blank"><FaGithub/></a>
    <a href="https://dribbble.com" target="blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials