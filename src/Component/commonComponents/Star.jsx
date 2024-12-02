import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Star = ({ rating = 3.5 }) => {
     const stars = Array.from({length:5} , (_,index)=>{
          if(rating >= index + 1){
               return <FaStar key={index} className='text-yellow-500' />
          }else if( rating >=index + 0.5) {
               return <FaStarHalfAlt key={index} className='text-yellow-500' />

          }else{
               return <FaRegStar key={index} className='text-gray-500' />
               
          }
     })
     return  <div className='flex gap-x-1 items-center ' >{stars}</div>
};

export default Star