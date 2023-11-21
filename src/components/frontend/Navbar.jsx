import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useRef} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';


import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [drop, setDrop] = useState(false);
  return (
    <>
    <header className='w-full bg-white h-[60px] flex justify-center items-center p-4'>
      <nav className='w-[92%] flex justify-between items-center m-auto'>
        <div className='w-12 h-12'>
        <img src={logo} alt="" />
        </div>
        <div className={`md:static duration-[0.6s] z-10 bg-white absolute md:min-h-fit min-h-[60vh] md:w-auto flex flex-col left-0 top-[-100%] w-full ${drop ? "top-[10%]" : ""}`}>
          <ul className='flex justify-between items-center md:flex-row flex-col md:gap-[4em] gap-[2em]'>
          <li className='hover:text-red-500 duration-[0.6s]'> <Link to="/">Home</Link></li>
            <li className='hover:text-red-500 duration-[0.6s]'><Link to="/contact-us">Contact Us</Link></li>
            <li className='hover:text-red-500 duration-[0.6s]'><Link to="/products">Products</Link></li>
            <li className='hover:text-red-500 duration-[0.6s]'><Link to="/user-profile">User Profile</Link></li>
            

          </ul>
        </div>
        <div className='flex flex-row justify-between md:gap-[3em] gap-[1.5em] items-center'>
          <Link className='hover:text-red-500 duration-[0.6s]' to="/sign-in"><FontAwesomeIcon className="text-[1.6rem]" icon={faUser} /></Link>
          <Link className='hover:text-red-500 duration-[0.6s]' to="/cart-page"><FontAwesomeIcon className='text-[1.6rem]' icon={faCartPlus} /><span className='rounded'>4</span></Link>
          <FontAwesomeIcon onClick={()=>{setDrop(!drop)}} className={`w-8 h-8 md:hidden ${drop? "hidden": 'block'}`} icon={faBars} />
          <FontAwesomeIcon onClick={()=>{setDrop(!drop)}} className={`w-8 h-8 md:hidden ${drop? "block": 'hidden'}`} icon={faXmark} />
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar