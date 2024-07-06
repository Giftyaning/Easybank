import React from 'react'
import '../../styles/about.css'
import Online from '../../images/Online.svg'
import Onboarding from '../../images/Onboarding.svg'
import Api from '../../images/Api.svg'
import Budgeting from '../../images/Budgeting.svg'

const About = () => {
  return (
     <div className='about'>
      <h1>Why choose Easybank?</h1>
      <p>We leverage Open Banking to turn your bank 
        account into your financial hub.
        <br />
        Control your finances like never before
      </p>

      <ul>
        <li>
          <img src={Online} alt="" className="icon" />
          <h3 className="title">Online Banking</h3>
          <p>Our mordern web and mobile applications
            allow you to keep track of your finances wherever 
            you are in the world.
          </p>
        </li>

        <li>
          <img src={Budgeting} alt="" className="icon" />
          <h3 className="title">Simple budgeting</h3>
          <p>See exactly where your money goes each
            month. Receive notifications when you're 
            close to hitting your limits.
          </p>
        </li>

        <li>
          <img src={Onboarding} alt="" className="icon" />
          <h3 className="title">Fast Onboarding</h3>
          <p>We don't do branches. Open your account in 
            minutes online and start taking control of 
            your finances right away.
          </p>
        </li>

         <li>
          <img src={Api} alt="" className="icon" />
          <h3 className="title">Open API</h3>
          <p>Manage your savings, investments, pensions,
            and much more from one account. tracking your money
            has never been easier.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default About
