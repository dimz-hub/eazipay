import React from 'react'


export default function Dashheader({currentUser , userInfo}) {
  
  
  
  return (
    <div className='dash-header box-border  pt-[11px] pb-[11px] pr-[48px] pl-[40px]'>

    <div className=' w-[100%] items-center dash-center flex gap-[42vw] items-center'>
        <img  src='images/Company Logo.png'/>
        <div className='flex  w-[500px] items-center gap-[50px]'>
            <img src='images/notification.png'/>
            <div className = 'flex items-center gap-[16px]'>
              <img src={userInfo.photoURL} className='w-[50px]  h-[50px] rounded-[50%] '/>
                <div className='w-[6rem]'>
                    <h3 className='font-bold chelsea'>{currentUser.displayName} </h3>
                    <p className='font-extralight'>Admin</p>
                </div>
                <img className = 'mt-[30px] ' src='images/arrow-right.png' alt='arrow' />
            </div>
        </div>
    </div>
    </div>
  )
}
