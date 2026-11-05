import React from 'react';
import { useState } from 'react';

export default function WeatherCard() {

const[count, setCount] = useState(0)


return (

<div>
    
    <div className='header-div py-5 flex justify-between items-center'> 

        <button className='step-button shrink-0 font-dot bg-[#723480] text-white rounded-[20px] py-4 
       px-15 ml-3 '>
        Step 1: Weather Analysis
      </button>

        <button className='mr-5 no-underline hover:underline'> Back to Home </button>
       

    </div>





</div>


)
}







