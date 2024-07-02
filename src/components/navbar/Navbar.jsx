import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from '../buttons/Button'
import '../../styles/navbar.css'
import Logo from '../../images/logo.svg'


const navbar = () => {
  return (
    <div className='nav' style={{backgroundColor: 'white'}}>
        <div className="logo">
            <img src= {Logo} alt="" />
        </div>

        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
            <li>
                <a href="">Blog</a>
            </li>
            <li>
                <a href="">Careers</a>
            </li>
        </ul>

      <Button />
    </div>
  )
}

export default navbar