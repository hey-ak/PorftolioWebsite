import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook,  BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import { useState } from 'react';


const Nav = () => {
  const [ activeNav , SetActiveNav]=useState('#')
  return (
    <nav>
      <a href="#"onClick={() => SetActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => SetActiveNav('#about')}className={activeNav ==='#about' ? 'active':''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => SetActiveNav('#experience')}className={activeNav ==='#experience' ? 'active':''}><BiBook/></a>
      <a href="#services"onClick={() => SetActiveNav('#services')}className={activeNav ==='#services' ? 'active':''}><RiServiceLine/> </a>
      <a href="#contact"onClick={() => SetActiveNav('#contact')}className={activeNav ==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav