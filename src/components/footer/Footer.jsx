import React from 'react'
import '../../styles/footer.css'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/Facebook.svg'
import Instagram from '../../images/Instagram.svg'
import Pinterest from '../../images/Pinterest.svg'
import Twitter from '../../images/Twitter.svg'
import Youtube from '../../images/Youtube.svg'
import CustomButton from '../buttons/CustomButton'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <img src={Logo} alt="Logo" className='white-logo'/>

      <div className="socials">
          <img src={Facebook} alt="Facebook" />
          <img src={Youtube} alt="Facebook" />
          <img src={Twitter} alt="Facebook" />
          <img src={Pinterest} alt="Facebook" />
          <img src={Instagram} alt="Facebook" />
        </div>
      </div>

      <ul className="nav-list-footer-wrapper">
       <li className="nav-list-footer">
        <a href="">About Us</a>
       </li>

       <li className="nav-list-footer">
        <a href="">Careers</a>
       </li>

       <li className="nav-list-footer">
        <a href="">Contact</a>
       </li>

       <li className="nav-list-footer">
        <a href="">Support</a>
       </li>

       <li className="nav-list-footer">
        <a href="">Blog</a>
       </li>

       <li className="nav-list-footer">
        <a href="">Privacy Policy</a>
       </li>

      </ul>

      <div className="right">
        <CustomButton />
        <p>
          Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
