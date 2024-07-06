import React from 'react'
import '../../styles/herobg.css'
import BgMobile from '../../images/Bg-intro-desktop.svg'
import Mockups from '../../images/Mockups.png'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Herobg = () => {
  return (
    <div className="bg-container">
        <img src={BgMobile} alt="" className='background-image' />
        <img src={Mockups} alt="" className='mockups' />
        
    </div>

   
  )
}

export default Herobg
