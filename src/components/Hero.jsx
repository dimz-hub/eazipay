import React from 'react'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <div className='hero flex w-[100vw] h-[865.41px] ml-[8rem] xs:block xs:ml-[23px] '>
    
      <div className='hero-text m-[auto] w-[80%] h-[80%] xs:w-[100%] '>
        <div className='flex flex-col gap-[24px] mb-[72px]'>

        <h1 className='text-[64px] font-[500] leading-[72px] xs:text-[42px] xs:leading-[43px]' >Run your <span className='text-green-700'>payroll</span>
        <br/> <span className='text-yellow-300'>easily</span> in <span className='text-red-500'>seconds</span>
        </h1>
        <p className='font-[400] text-[20px] leading-[28px] tracking-[0.2px] '>We've built an all-inclusive simple solution for <br/> individual 
          and businesses to manage staff, pay <br /> salaries and relevant taxes all at once
        </p>
        <Link to = {'/signin'}>

        <button className='text-[16px] leading-[24px] font-[500] text-white  rounded-[32px] w-[272px] h-[56px] text-center xs:ml-[2rem] xs:mt-[10px] '>
          Start Using Free Forever
        </button>
        </Link>
        </div>
        <div>
          <p className='mb-[16px] font-[600] leading-[24px] text-[18px] xs:font-[700] xs:text-[25px] xs:mb-[27px]'>
            Download the Eazipay App
          </p>
          <div className=' download-links flex items-center gap-[16px] '>

          <div  className=' link-btn flex items-center gap-[12px]  w-[185px] h-[72px] justify-center bg-blue-500 rounded-[8px] xs:w-[160px] xs:h-[72px] '>
           
           <div className='w-[48px] h-[48px] fa flex items-center justify-center rounded-[50%] '>
            <img src='images/apple.png' alt='apple-logo'/>
            </div> 
            <div  className='flex flex-col  gap-[4px]' >
              <p className='font-[500] leading-[16px] font-[Aeonik] text-[12px]'>Download on the</p>
              <h4 className='font-[Aeonik] font-[700] text-[18px] leading-[24px]'>Appstore</h4> 
            </div>
          </div>
          <div className='link-btn flex items-center  gap-[12px] w-[185px] h-[72px] justify-center  xs:ml-[7px] rounded-[8px]  xs:w-[160px] xs:h-[72px] '>
           <div className='w-[48px] h-[48px] fa flex items-center justify-center rounded-[50%]'>
            <img src='images/googleplay.png' alt='apple-logo'/>

           </div>
            <div className='flex flex-col  gap-[4px]'>
              <p  className='font-[500] font-[Aeonik] leading-[16px] text-[12px]'>Get on </p>
              <h4 className='font-[Aeonik] font-[700] text-[18px] leading-[24px]'>Google Play</h4>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="hero-img  xs:hidden">
        <img src='images/hero-image.png' alt='hero-img'  className='' />
      </div>
    </div>
  )
}
