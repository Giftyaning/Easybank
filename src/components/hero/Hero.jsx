import React from 'react'
import '../../styles/hero.css'
import Button from '../buttons/CustomButton'
import BgMobile from '../../images/Bg-intro-desktop.svg'
import BgDesktop from '../../images/Bg-intro-mobile.svg'
import Mockups from '../../images/Mockups.png'
import 'bootstrap/dist/css/bootstrap.min.css'; 

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
    </div>
  )
}

export default Hero
