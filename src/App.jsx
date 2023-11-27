import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import ContactUs from "./routes/ContactUs";
import Cart from "./routes/Cart";
import UserProfile from "./routes/UserProfile";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { loginUser } from './auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import  axios  from 'axios';
import AboutUs from './routes/AboutUs';
import FPass from './routes/FPass';
import Loader from './components/frontend/Loader';

const App = () => {
 
  const loginData = useSelector((state)=>{
    return state.signin;
  })
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // console.log(isLogin);
  let tokenInfilestorage = localStorage.getItem("loginItem");
  
  useEffect(()=>{
    if(tokenInfilestorage != ""){
  let url = "http://127.0.0.1:8000/api/authme";

      let token = tokenInfilestorage;
      let userData= {
        "token": token
      };
      try{
        const data = axios.post(url, userData).then((response) => {
          // console.log(response.data.user[0].fullname);
          dispatch(loginUser({fullname: response.data.fullname, email: response.data.email, token: response.data.api_token, image: response.data.image}));
  
          setLoading(false); 
        }); 

      }catch(e){

        console.log(e);
      }


      
    
    }
      else{
        dispatch(loginUser({fullname: "", email: "", token: "", image: ""}));
        setLoading(false); 
    
      }
  },[]);
  return (
    <>
    {
      loading === true ? <Loader/> :
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      {/* <Route path='/products' element={<Products/>}/> */}

      <Route path='/signup' element={<SignUp loginData={loginData}/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<SignIn loginData={loginData}/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>

      <Route path='/user-profile' element={<UserProfile/>}></Route>
      <Route path='/fpass' element={<FPass/>}></Route>

    </Routes>
}
    
    </>
  )
}

export default App;