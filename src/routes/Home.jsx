import React from 'react'
import Main_body from '../components/frontend/Main_body'

import Navbar from '../components/frontend/Navbar';
import Footer from '../components/frontend/Footer';


const Home = () => {
  return (
    <>
    <div className='font-[poppins] h-screen'>
    <Navbar/>
    <Main_body/>
    <Footer/>
    </div>
    </>
  )
}

export default Home