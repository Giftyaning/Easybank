import React from 'react'
import '../../styles/herobgmobile.css'
import BgMobile from '../../images/Bg-intro-desktop.svg'
import Mockups from '../../images/Mockups.png'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Herobgmobile = () => {
  return (
    <div className="bg-container-mobile">
      <img src={BgMobile} alt="" className='background-image-mobile' />
      <img src={Mockups} alt="" className='mockups' />
          
    </div>

   
  )
}

export default Herobgmobile
