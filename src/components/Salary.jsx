import React from 'react'

export default function Salary() {
  return (
    <div className=' h-[796px] bg-pink-200 items-center '>
<img src='images/salarybackground.png' alt='' className='salary-background xs:hidden' />
    <div className='salary m-[auto] h-[80%]  w-[80%] flex items-center justify-between xs:block xs:w-[100%] xs:h-[80%] xs:pt-[50px]'>
      <div>

      <div>
        <h3 className=' mb-[42px] xs:w-[100%] xs:text-center'>
        Free forever <br/> for your <span className='text-red-500'>salary <br/> payment</span>
        </h3>
        <p className='font-[500] text-[18px] mb-[16px] leading-[24px] font-[Aeonik] xs:font-[500] xs:text-[28px] xs:ml-[20px]'> Subscribe to the Eazilife today</p>
      </div>
      <div className='flex items-center gap-[16px] xs:ml-[25px] '>

          <div  className='flex link-btn items-center gap-[12px]  w-[185px] h-[72px] justify-center rounded-[8px]  xs:w-[160px] xs:h-[72px] '>
          <div className='w-[48px] h-[48px] fa flex items-center justify-center rounded-[50%]'>
            <img src='images/apple.png' alt='apple-logo'/>
            </div>  
            <div  className='flex flex-col  gap-[4px]' >
              <p className='font-[500] leading-[16px] text-[12px]'>Downlod on the</p>
              <h4>Appstore</h4> 
            </div>
          </div>
          <div className='flex items-center xs:ml-[7px] link-btn  gap-[12px] w-[185px] h-[72px] justify-center  bg-blue-500 rounded-[8px] xs:w-[160px] xs:h-[72px] '>
           <div className='w-[48px] h-[48px] fa flex items-center justify-center rounded-[50%]'>

            <img src='images/googleplay.png' alt='apple-logo'/>
           </div>
            <div className='flex flex-col  gap-[4px]'>
              <p  className='font-[500] leading-[16px] text-[12px]'>Get on </p>
              <h4>Google Play</h4>
            </div>
          </div>
      </div>
          </div>
          <div className='xs:w-[350px] xs:mt-[14px]'>
            <img src='images/salarypay.png' alt='salary-img'/>
          </div>

    </div>
    </div>
  )
}
