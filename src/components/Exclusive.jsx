import React from 'react'

export default function Exclusive() {
  return (
    <>
    <div className=' w-[1512px] h-[947px] xs:w-[400px] mt-[120px]'  >
    <img src='images/exclusive-background.png' className='exclusive-background xs:hidden'/>
      <div className='flex items-center gap-[24px] m-[auto] mt-[-40px] w-[80%] h-[80%] xs:block xs:w-[100%] xs:h-[100%]'>
        <div>
          <h3 className=' mb-[24px] whitespace-nowrap font-[700] text-[64px] leading-[72px] font-[Aeonik] xs:text-[35px] xs:leading-[40px] ml-[70px]' >
          Get an Exclusive <br />Demo of Eazipay
          </h3>
          <p className='font-[400] text-[24px] leading-[32px] font-[Aeonik] '>Our greatest priority is to put you and<br/>
            your business first. 
            Let’s show you how <br/> we can help.</p>
        </div>
        <img src='images/form.png' alt='exclusive-image'/>
      </div>
    </div>
    </>
  )
}
