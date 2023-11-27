import React from 'react'
import Navbar from '../components/frontend/Navbar';
import Footer from '../components/frontend/Footer';
import UserProfilePage from '../components/frontend/UserProfilePage';
const UserProfile = () => {
  return (
    <div className='font-[poppins] h-screen'>
    <Navbar/>
    <UserProfilePage/>
    <Footer/>
    </div>
  )
}

export default UserProfile