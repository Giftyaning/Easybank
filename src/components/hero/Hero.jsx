import React from 'react'
import '../../styles/hero.css'
import Button from '../buttons/Button'
import Bg from '../../images/Bg-intro-desktop.svg'


const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="description">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank
          account will be a one-stop-shop for spending, 
          saving, budgeting, investing, and much more.
        </p>
        <Button />
      </div>
      
        <img src={Bg} alt="" className='background-image' />
      
    </div>
  )
}

export default Hero
