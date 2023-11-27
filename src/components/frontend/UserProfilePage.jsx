import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../auth/authSlice';
import { useSelector } from 'react-redux'




const UserProfilePage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = () =>{
   
    localStorage.setItem("loginItem", "");
    dispatch(loginUser({fullname: "", email: "", token: "", image: ""}));

    nav("/");
  }
  let loginData = useSelector((state)=>{
    return state.signin;
})
  return (

    <div>
      <div className='flex w-100 items-center justify-center flex-col gap-4'>
        <button className='border bg-blue-400 text-white bottom-2 p-3' type='button' onClick={logout}>Logout</button>
        <p>About Me</p>
      <p>Full Name: {loginData.fullname}</p>
      </div>
    </div>
  )
}

export default UserProfilePage
