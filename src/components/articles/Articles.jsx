import React from 'react'
import '../../styles/articles.css'
import Currency from '../../images/Currency.jpg'
import Confetti from '../../images/Confetti.jpg'
import Plane from '../../images/Plane.jpg'
import Restaurant from '../../images/Restaurant.jpg'

const Articles = () => {
  return (
    <div className="about">
      <h1>Latest Articles</h1>
      <ul>
        <li className="card">
          <img src={Currency} alt="Currency" />

          <div className="content">
            <p className='name'>By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we're
              becoming more mobile. So why should you be forced 
              to only receive money in a single ...
            </p>
          </div>
          
        </li>

        <li className="card">
          <img src={Restaurant} alt="Restaurant" />

          <div className="content">
            <p className='name'>By Wilson Hutton</p>
            <h3>Treat yourself without worring about money</h3>
            <p>
              Our simpler budgeting feature allows you
              to separate out your spending and set realistic
              limits eash month. That means you ...
            </p>
          </div>
          
        </li>

        <li className="card">
          <img src={Plane} alt="Travel" />

          <div className="content">
            <p className='name'>By Wilson Hutton</p>
            <h3>Take your Easybank card whereve you go</h3>
            <p>
              We want you to enjoy your travels.
              This is why we don't charge any fees on 
              on purchases while you're abroad. We'll
              even show you ...
            </p>
          </div>
          
        </li>

        <li className="card">
          <img src={Confetti} alt="Confetti" />

          <div className="content">
            <p className='name'>By Claire Robinson</p>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team,
              we're excited to lauch our closed beta. It's 
              easy to request an invite through the site ...
            </p>
          </div>
          
        </li>
      </ul>
    </div>
  )
}

export default Articles
