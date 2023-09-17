import React from 'react'
import { Link } from 'react-router-dom'

export default function Empolyee() {





  const empolyeeInfo = [
    {
      name: 'Wasiu Timi' ,
      role: 'Accountant',
      gender: 'Male',
      salary: '100,600.78'
    },
    {
      name: 'Tami Happy' ,
      role: 'Farmer',
      gender: 'Male',
      salary: '700,600.78'
    },
    {
      name: 'Caleb Nwafor' ,
      role: 'Dancer',
      gender: 'Female',
      salary: '20,600.78'
    },
    {
      name: 'Ada Obi' ,
      role: 'Software Designer',
      gender: 'Female',
      salary: '125,600.78'
    },
    {
      name: 'Bolade Funmi' ,
      role: 'Customer Service',
      gender: 'Female',
      salary: '700,600.78'
    },
    {
      name: 'Musa Ali' ,
      role: 'Unempolyed',
      gender: 'Male',
      salary: '120,600.78'
    },
    {
      name: 'Olawale Dimeji' ,
      role: 'Teacher',
      gender: 'Female',
      salary: '500,600.78'
    },
    {
      name: 'Eyan Mayweather' ,
      role: 'Banker',
      gender: 'Male',
      salary: '50,600.78'
    },
  ]
  return (
    <div className='w-[100vw]'>
        <h1 className=' pb-[40px] pt-[30px] font-[700] text-[18px] leading-[24px] text-center '>Eazipay's Team</h1>
          <div className='ml-[28px]'>
        <div className='flex flex-col gap-[8px] text-white mb-[30px] w-[358px] h-[120px] rounded-[24px] p-[24px] bg-[#11453B]'>
            <p >Total Empolyee</p>
            <p>11264</p>
        </div>
        <div className='mb-[20px] flex w-[358px] h-[56px] border-[1px] border-[#e7e8e7] rounded-[16px] gap-[10px] items-center justify-center'>
           <p className='empolyee-btn w-[165px] h-[40px] rounded-[8px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] bg-[#11453b] text-white font-[Aeonik] text-center font-[500] text-[16px] leading-[24px]'>All Empolyee</p>
           <p className='w-[165px] h-[40px] rounded-[8px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] bg-[#f2f1f1] text-[#11453b] text-center font-[Aeonik] font-[500] text-[16px] leading-[24px]'>Departments</p>
        </div>

        <div className =' mb-[20px] border-b-[0.6px] border-[#2c3e53 p-[5px] flex items-center gap-[12px] w-[356px]' >
            <span className='border-[0.6px] border-[#2c3e53] w-[303.59px] h-[40px] rounded-[12px] pt-[4px] pb-[4px] pr-[10px] pl-[10px] flex items-center justify-between'>
                <input type='text' placeholder='Search' className='outline-none' />
                <img src='../images/search.png'  alt='search'/>
            </span>
            <img src='../images/filter_list.png' alt='fiter-list' className='p-[10px] bg-[#f2f1f1] rounded-[8px]'/>
        </div>

        <div className='w-[358px] mb-[15px] h-[19px] flex justify-between items-center'>
           <div className='flex items-center'>
            <img src='../images/toggle.png' alt='' className='pr-[10px]'/>
            <img src='../images/menu.png' alt='' className='pr-[10px] pl-[10px] border-[grey] border-r-[1px] border-l-[1px]'/>
            <p  className='font-[400] text-[14.08px] leading-[18.77px] text-[#8d8e8d] pl-[10px]'>Archived</p>
           </div>
           <div className='flex items-center'>
            <input type='checkbox'/>
            <p className='font-[400] text-[14.08px] leading-[18.77px] text-[#8d8e8d] pl-[10px]'>Select All</p>
           </div>
        </div>

        <div className='h-[43vh] overflow-scroll overflow-x-hidden'>
          {
            empolyeeInfo.map(empolyee => {
              return (
                <div key= {empolyee.name} className=' p-3 flex gap-[37px] w-[358px]  h-[104px] border-b-[1px]  border-[#e7e8e7] items-center justify-between'>
                  <div className='flex gap-[10px] '>
                  <img src='../images/chelsea.png' className='w-[40px]  h-[40px] rounded-[50%] object-contain mt-[-1px]' />
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className ='font-[400] text-[20px] leading-[24px]'>{empolyee.name}</h1>
                    <p  className='font-[400] text-[12px] leading-[12px]  text-[#515251]'>{empolyee.role}</p>
                    <p className='font-[400] text-[12px] leading-[12px] text-[#515251]'>{empolyee.gender} | Monthly</p>
                  </div>
                  </div>
                  <h1 className = 'font-[700] mt-[50px] text-[16px] leading-[24px] text-[#11453B]'>N{empolyee.salary}</h1>
                </div>
              )
            })
          }
        </div>
        </div>

        <div className='mobile-nav w-[390px] h-[82px] flex items-center justify-center ml-[13px]'>
                  <Link to={'/dashboard'}>
                  <div  className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='../images/another-home.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>Home</p>
                  </div>
                  </Link>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='../images/green-user.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#11453b]'>Empolyee</p>
                  </div>
              
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='../images/payroll.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>Payroll</p>
                  </div>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='../images/Loan.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>Loans</p>
                  </div>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='../images/more.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>More</p>
                  </div>
                </div>

    </div>
  )
}
