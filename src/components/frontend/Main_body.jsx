import React from 'react'
import {useState, useEffect} from "react";
import fashion from "../../assets/images/fashion.png";
import fashion2 from "../../assets/images/fashion2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Main_body = () => {
  let obj = [{
    title: "Stylish Clothes",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque in culpa eum rem asperiores",
    image: fashion
  },
  {
    title: "Cool clothing Habits",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita itaque in incidunt odit error eius.",
    image: fashion2
  
  }
  ]
  const [hover, setHover] = useState(false);
  const [imgLen, setImgLen] = useState(0);
  const [class1, setClass1] = useState("");
 

  const increaseImage = () =>{
    if(imgLen === obj.length-1){
      setTimeout(()=>{
        setImgLen(0);
        setClass1('animate-pulse');
      },400)
    }
    else{
      setTimeout(()=>{
        setImgLen(imgLen+1);
      },400)

    }
  }
  const decreaseImage = () =>{
    if(imgLen === 0){
      setTimeout(()=>{
        setImgLen(obj.length-1);
      },400)

    }
    else{
      setTimeout(()=>{
        setImgLen(imgLen-1);
      },400)

    }
  }

  return (
    <>
    <section className='mt-8 -z-20 w-full min-h-screen relative flex flex-row' onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
      {obj.map((hero,id)=>{
        if(id===imgLen){
        return (
          <div key={id} className={`w-[90%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] m-auto bg-faintblue md:h-screen flex items-center h-screen justify-between lg:flex-row sm:flex-row sm:h-screen flex-col md:px-[100px] sm:px-[60px] px-[100px] ${class1}`}>
            <div className='flex flex-col items-start justify-center gap-[40px] md:w-[50%] sm:w-[50%]'>
              <h1 className='md:text-[65px] font-bold sm:text-[50px] text-[45px]'>{hero.title}</h1>
              <p>{hero.para}</p>
              <button className=' outline border-1 border-black border-solid px-5 py-3 hover:bg-red-500 hover:outline-red-500 duration-[0.4s]' >SHOP NOW</button>
            </div>
            <div className='flex justify-center items-center h-[40vh] lg:w-[50%] sm:w-[50%] sm:h-[60vh] h-60vh md:h-[80vh]'>
              <img className='md:w-[100%] lg-w-[100%]  object-fit' src={hero.image} alt="" />
            </div>
        </div>
        );
        }
      })}
       
        <div className='h-screen w-[78%] h-[150px] top-[32%] left-[12%] flex justify-between items-center'>
        <FontAwesomeIcon className={`absolute top-[40%] left-[10%] duration-[0.5s] text-[30px] p-5 bg-white rounded-[100%] hover:bg-red-500 hover:text-white ${hover? "block": "hidden"}`} icon={faChevronLeft} onClick={decreaseImage}/>
        <FontAwesomeIcon className={`absolute top-[40%] right-[10%] duration-[0.5s] text-[30px] p-5 bg-white rounded-[100%] hover:bg-red-500 hover:text-white ${hover? "block": "hidden"}`} icon={faChevronRight} onClick={increaseImage}/>
        </div>
    </section>
    </>
  )
}

export default Main_body