import React from 'react'
import '../../styles/articles.css'
import Online from '../../images/Online.svg'
import Onboarding from '../../images/Onboarding.svg'
import Api from '../../images/Api.svg'
import Budgeting from '../../images/Budgeting.svg'

const Articles = () => {
  return (
    <div className='articles'>
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
          <h3 className="title">Online Banking</h3>
          <p>Our mordern web and mobile applications
            allow you to keep track of your finances wherever 
            you are in the world.
          </p>
        </li>

        <li>
          <img src={Onboarding} alt="" className="icon" />
          <h3 className="title">Online Banking</h3>
          <p>Our mordern web and mobile applications
            allow you to keep track of your finances wherever 
            you are in the world.
          </p>
        </li>

         <li>
          <img src={Api} alt="" className="icon" />
          <h3 className="title">Online Banking</h3>
          <p>Our mordern web and mobile applications
            allow you to keep track of your finances wherever 
            you are in the world.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Articles
