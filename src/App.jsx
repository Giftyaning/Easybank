import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Herobg from './components/background/Herobg'
import Footer from './components/footer/Footer'
import Articles from './components/articles/Articles'
import About from './components/about/About'

const App = () => {
  return (
    <>
    <Navbar />
    
    <div className="hero-section">
      <Hero />
      <Herobg />
    </div>
   
    
    <About />
    <Articles />
    <Footer />
    </>
   
  )
}

export default App
