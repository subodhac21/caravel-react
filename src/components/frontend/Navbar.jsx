import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useState, useRef} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo.png";
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { loginUser } from '../../auth/authSlice';






const Navbar = () => {
  const dispatch = useDispatch();
  let isLogin = useSelector((state)=>{
    return state.authReducer.signin[0];
  })
  // console.log(isLogin);
  // useEffect(()=>{
  //   let tokenInfilestorage = localStorage.getItem("loginItem");
  //   if(tokenInfilestorage != null){
  //     let token = tokenInfilestorage;
  //     let userData= {
  //       "token": token
  //     };
  //     axios.post(url, userData).then((response) => {
  //       // console.log(response.data.user[0].fullname);
  //       dispatch(loginUser({fullname: response.data.user[0].fullname, email: response.data.user[0].email, token: response.data.user[0].api_token}));

  //     });  
  //   }
    
  // },[]);

 
 

 

  const [drop, setDrop] = useState(false);
  const [cat, setCat] = useState(false);


  const [modalHide, setModalHide] = useState("hidden");
  const modalPlay = () =>{
    if(modalHide === "hidden")
      setModalHide("block");
    else
      setModalHide('hidden');
  }
  const close_cat = () =>{
    setTimeout(() => {
      setCat((prev)=>{
        return !prev;
      })
    }, 2000);
  }
 
  return (
    <>
    <header onClick={()=>setCat((prev)=>{false})} className={`w-full text-white bg-[#0f172a] h-[auto] flex justify-center items-center p-4 z-10`}>
      <nav className='w-[92%] flex justify-between items-center m-auto z-0'>
        <div className='w-12 h-12'>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        
        </div>
        <div  className={`md:static duration-[0.6s] bg-[#18223a] md:bg-[#0f172a] absolute md:min-h-fit min-h-[70vh] pt-[50px] md:pt-[0px] md:w-auto flex flex-row items-start justify-center left-0 top-[-100%] md:top-[-10px] w-full ${drop ? "top-[12%] z-22 md:z-0" : "-z-66"}`}>
          <ul className='flex align-middle text-[16px] justify-between items-center md:flex-row flex-col md:gap-[4em] gap-[2em] z-999999'>
          <li className='hover:text-red-500 duration-[0.6s]'> <Link to="/">Home</Link></li>
            <li className='hover:text-red-500 duration-[0.6s]'><Link to="/contact-us">Contact Us</Link></li>
            <li className='hover:text-red-500 duration-[0.6s] cursor-pointer'><p onClick={()=>setCat((prev)=>{false})} onMouseOver={()=>setCat((prev)=>{return true;})} >Products</p>
            {/* <ul onMouseOver={()=>setCat(true)} className={`w-[100vw] absolute top-[100px] left-0 ${cat ? "block": "hidden"}`}>
              <li>
                <ul className='w-[40%] bg-white relative mx-auto p-12 text-black'>
                  <li className='mb-4'>
                    <Link to="/">Pokhara</Link>
                  </li>
                  <li className='mb-4'>Hetauda</li>
                  <li className='mb-4'>Lumbini</li>
                  <li className='mb-4'>Biratnagar</li>
                  <li className='mb-4'>Nagarkot</li>
                </ul>
              </li>
            </ul> */}
            </li>
            <li className='hover:text-red-500 duration-[0.6s]'><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
        <div className='flex flex-row justify-between md:gap-[1.5em] gap-[1em] items-center'>
          {
            isLogin.token === "" ?
          <Link className='hover:text-red-500 duration-[0.6s]' to="/signin">
          <button type="button" className="bg-[#1da1f2] text-white inline-flex pl-3.5 pr-5 py-2 duration-[0.5] hover:bg-[#59bbf8] font-medium rounded-md items-center text-sm space-x-3 text-[16px">
    <span>Sign In</span>
         </button>
          </Link> : <Link className='w-[40px] hover:text-red-500 duration-[0.6s] rounded-full' to="/user-profile">
              <img className='w-[38px] h-[38px] rounded-full' src={`http://127.0.0.1:8000/assets/${isLogin.image}`} alt="" />
              </Link>  }
          <Link className='hover:text-red-500 duration-[0.6s]' to="/cart-page"><FontAwesomeIcon className='text-[1.5rem]' icon={faCartPlus} /><span className='rounded text-[16px] text-[red]'>4</span></Link>
          <div onClick={()=>{modalPlay()}} className='p-2 md:p-0 bg-white md:bg-black rounded-md md:static right-5 text-white -z-10 md:z-0 md:text-white top-[6em] absolute'>
            <p className='hover:text-red-500 md:text-white text-black' to="/cartpage"><FontAwesomeIcon className='text-[1.5rem]' icon={faMagnifyingGlass} /></p>
          </div>

          <FontAwesomeIcon onClick={()=>{setDrop(!drop)}} className={`w-8 h-8 md:hidden ${drop? "hidden": 'block'}`} icon={faBars} />
          <FontAwesomeIcon onClick={()=>{setDrop(!drop)}} className={`w-8 h-8 md:hidden ${drop? "block": 'hidden'}`} icon={faXmark} />

        </div>
      </nav>
    </header>
    <div onClick={()=>modalPlay()} className={`${modalHide} w-screen top-0 left-0 fixed h-screen z-20 inset-0 bg-gray-500 bg-opacity-75 transition-opacity${modalHide}`}></div>
    <Modal hide={modalHide}/>
    </>
  )
}

export default Navbar