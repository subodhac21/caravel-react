import React from 'react'
import Navbar from '../components/frontend/Navbar'
import Footer from '../components/frontend/Footer'
import { Link } from 'react-router-dom'

const AboutUs = () => {
   
  return (
    <div className='font-[poppins] h-screen'>
    <div>
      <Navbar/>
        <h1>About Us</h1>
        <Link to="/" >Go To Home</Link>
      <Footer/>
    </div>
    </div>
  )
}

export default AboutUs
