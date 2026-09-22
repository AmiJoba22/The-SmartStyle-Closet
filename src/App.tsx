import { useState } from 'react';

export default function App() {

const[count, setCount] = useState(0)

return (
  <div className='main-app bg-[#FCFBF4]'>

    <div className='hero-section bg-[#FCFBF4] flex flex-col items-center p-20' >
        <h1 className='font-dot color-brand-olive text-6xl py-3'> The SmartStyle Closet </h1>
        <p className='py-7'>Here to make fashion and styling choices simpler on any day of the week.    </p>
      <button className='first-button font-dot bg-[#723480] text-white rounded-[20px] p-4 
      border-2 border-black px-10'>
        Get Started
      </button>
    </div>
    

       <div className="flex gap-4 overflow-hidden w-full relative box-border">
      <div className="flex gap-4 w-max animate-[scroll-gallery_30s_linear_infinite]">
        <img className="w-[100px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_1.png" alt="Style 1" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_2.png" alt="Style 2" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_3.png" alt="Style 3" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_4.png" alt="Style 4" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_5.png" alt="Style 5" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_6.png" alt="Style 6" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_7.png" alt="Style 7" />

    
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_1.png" alt="Style 1" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_2.png" alt="Style 2" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_3.png" alt="Style 3" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_4.png" alt="Style 4" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_5.png" alt="Style 5" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_6.png" alt="Style 6" />
        <img className="w-[200px] h-auto rounded-[10px] shrink-0" src="/assets/style_img_7.png" alt="Style 7" />
      </div>
    </div>




  </div>
)
}