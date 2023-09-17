import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='w-[1512px] h-[320px] footer xs:h-[550px]  xs:mt-[-70px] xs:w-[660px] xs:overflow-x-scroll xs:mb-[30px]'>

    <div className='flex w-[80%] ml-[7rem] gap-[10rem] items-center justify-center xs:block xs:w-[100%]'>
      <div className=''>
        <img src='images/logo.png' alt='logo' />
        <div>
        <p className=' mt-[40px] mb-[8px] font-[Aeonik] font-[400] text-[14px] tracking-[0.25px] leading-[20px]  '>Copyright © 2023 Eazipay.</p>
        <p className='font-[Aeonik] font-[400] text-[14px] tracking-[0.25px] leading-[20px]' >All rights reserved</p>

        </div>
        <div className='flex items-center gap-[16px] mt-[40px]'>
          <div className='w-[32px] h-[32px] fa flex items-center justify-center rounded-[50%]'>

           <FaInstagram size={17} color="#333333" />
          </div>
          <div className='w-[32px] h-[32px] fa flex items-center justify-center rounded-[50%]'>
        <FaTwitter size={17} color="#333333" /> 

          </div>
          <div className='w-[32px] h-[32px] fa flex items-center justify-center  rounded-[50%]'>

          <FaLinkedin size={17} color="#333333" />
          </div>
          <div className='w-[32px] h-[32px] fa flex items-center justify-center rounded-[50%]'>
            <FaFacebook size={17} color="#333333" />

          </div>
          
        
        </div>
      </div>
      <div className=' xs:pb-[30px] product flex w-[825px] gap-[60px]    xs:ml-[-80px] xs:w-[500px]  xs:gap-[20px] xs:flex-wrap' >
        

        <div className = ''>
          <p className = 'font-[Aeonik] font-[500] text-[20px] leading-[24px] mb-[24px] tracking-[0.2px]'>Product</p>
          <div className ='text-[16px] flex flex-col gap-[12px] font-[400] leading-[24px] font-[Aeonik]   '>

          <p>Individual</p>
          <p>Businesses</p>
          <p>Request Demo</p>
          <p>Pricing</p>
          </div>
        </div>
        <div className = ''>
          <p className = 'font-[Aeonik] font-[500] text-[20px] leading-[24px] mb-[24px] tracking-[0.2px]'>Legal</p>
          <div className ='text-[16px] flex flex-col gap-[12px]  font-[400] leading-[24px] font-[Aeonik]  '>

          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          </div>
        </div>
        <div className = ''>
          <p className = 'font-[Aeonik] font-[500] text-[20px] leading-[24px] mb-[24px] tracking-[0.2px]'>Resources</p>
          <div className ='text-[16px] flex flex-col gap-[12px]  font-[400]leading-[24px] font-[Aeonik]   '>

          <p>FAQs</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Customer Stories</p>
          </div>
        </div>
        <div className = ''>
          <p className = 'font-[Aeonik] font-[500] text-[20px] leading-[24px]  mb-[24px] tracking-[0.2px]'>Contact us</p>
          <div  className ='text-[16px] flex flex-col gap-[12px]  font-[400] leading-[24px] font-[Aeonik]  '>

          <p>eazipay@gmail.com</p>
          <p>+234 816 878 9518</p>
       <div className=' your-email pr-[8px] pl-[8px] flex items-center justify-between w-[255px] h-[40px] rounded-[16px] '>
        <p>Your email address</p>
        <img src ='images/sendblack.png' alt='send'/>
          </div>
       </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}
