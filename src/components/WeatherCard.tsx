import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function WeatherCard() {

const[count, setCount] = useState(0)


return (

<div className='main-app bg-[#FCFBF4]'>
    
    <div className='header-div py-5 flex justify-between items-center'> 
        <button className='step-button shrink-0 font-dot bg-[#723480] text-white rounded-[20px] py-4 
       px-15 ml-3 '>
        Step 1: Weather Analysis

       
      </button> 
      <Link to='/'>
        <button className='mr-5 no-underline hover:underline'> Back to Home </button>
        </Link>
        
    </div>

    <div className='weathercard-headings flex flex-col items-center '>
        <h1 className='text-6xl font-dot'>
            Today's Date is Date
        </h1>
        <p className='py-10'> 
            We are in the blank season, where temperatures range from. 
        </p>
        <br></br>
        <p className='text-[#808034]'> Please enter your zipcode for weather location </p>
    </div>

    <div className='zipcode-input'>
    
    <input
    
    
    />

    </div>



</div>


)
}







