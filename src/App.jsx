import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import ContactUs from "./routes/ContactUs";
import SignIn from "./routes/SignIn";
import Cart from "./routes/Cart";
import UserProfile from "./routes/UserProfile";

const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      {/* <Route path='/products' element={<Products/>}/> */}

      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/user-profile' element={<UserProfile/>}></Route>
    </Routes>
    </>
  )
}

export default App;