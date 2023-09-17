import React from 'react'

export default function Eazipay() {
  return (
    <div className='w-[1512px]  h-[937.35px] flex xs:w-[500px] xs:mt-[30rem] xs:mb-[5rem] xs:ml-[30px]'>

    <div className=' eazipay w-[80%]  m-[auto] xs:w-[100%]'>
      <div className='text-center  mr-[10rem] mb-[5rem] xs:mt-[25rem] xs:mb-[0px]'>

      <h1 className='text-[56px] font-[500] leading-[64px]'>How Eazipay Works</h1>
      <p className='font-[400] leading-[36px] text-[28px] text-[#515251] font-[Aeonik]'>Get started in 3 simple steps.</p>
      </div>
      <div className='flex items-center mt-[-40px] xs:w-[300px] xs:mt-[-120px] xs:ml-[20px]'>
        <img src='images/eazipayBG.png' className='xs:hidden'/>
        <img src='images/eazipay.png' className='eazipayimg w-[984px] h-[682px] object-contain xs:right-[0rem]  '  />
      </div>
    </div>

    </div>
  )
}
