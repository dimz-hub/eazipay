import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileDashboard({userInfo}) {

  

  return (
    <div className='w-[390px] '>
        <div className='w-[80%] ml-[28px] flex gap-[14px] p-3 pt-[20px] items-center pb-[20px]'>
            <img src={userInfo.photoURL} className='w-[50px]  h-[50px] rounded-[50%] ' />
            <h1 className = 'font-[Aeonik] font-[500] text-[24px] leading-[32px] text-[#515251]'>Hello {userInfo.firstName}</h1>
        </div>
        <div className='flex flex-col items-center justify-center w-[358px] ml-[28px] flex flex-col box-border justify-between h-[192px]  rounded-[24px] bg-[#11453B] box-border p-[24px]'> 
                    <div className='text-[white]'>
                    <p>Wallet Balance</p>
                    <div className='flex items-center justify-between'> 
                        <h1 className='font-[700] text-[34px] mr-[30px] '>N12,560,078.00</h1>
                        <img  src='images/eye.png' alt='no see'/>
                    </div>

                    </div>
                    <button className='w-[90%] bg-[#D9EBCD] h-[40px] w-[310px] text-[#11453B] rounded-[24px] font-[500] text-[15px] font-[Aeonik]'>Fund Wallet</button>
                </div>

                <div className='ml-[28px] p-3 w-[358px]'>
                  <h1 className='font-[Aeonik] text-[14px] font-[500] leading-[16px] mb-[5px]'>QUICK STATS</h1>
                  <div className='flex gap-[16px] w-[100%] '>
                    <div className='w-[174px] h-[80px] rounded-[16px] flex flex-col gap-[8px] bg-[#f2f1f1]  items-center justify-center' >
                      <p className = 'font-[Aeonik] font-[400] text-[14px] leading-[20px]'>Total Payroll</p>
                      <h3 className='font-[Aeonik] font-[700] text-[14px] leading-[20px]'>N 2,293,044,345.05</h3>
                    </div>
                    <div className='w-[174px] h-[80px] rounded-[16px] flex flex-col gap-[8px] bg-[#f2f1f1] items-center justify-center'>
                      <p className = 'font-[Aeonik] font-[400] text-[14px] leading-[20px]'>Total Empolyee</p>
                      <h3 className='font-[Aeonik] font-[700] text-[14px] leading-[20px]'>10,000</h3>
                    </div>
                  </div>
                </div>
                <div className='ml-[39px]'>
                  <h1 className='font-[Aeonik] font-[500] leading-[16px] text-[14px] mt-[5px]'>QUICK ACTIONS</h1>
                  <div className='flex flex-wrap gap-[16px] w-[358px] h-[382px] border-[1px] rounded-[24px] border-[#e7e8e7] items-center justify-center pb-[10px] ml-[-10px] mt-[5px]'>
                    <div  className = 'w-[104px] h-[84px]  flex flex-col gap-[10px] items-center  '>
                      <img src='images/salary.png' alt='icon'  className = 'p-[20px] bg-[#F0F7EB] rounded-[14px]'/>
                      <p> Pay Salaries</p>
                    </div>
                    <div className = 'w-[104px] h-[84px]  flex flex-col gap-[10px] items-center'>
                      <img src='images/reduser.png' alt='icon' className = 'p-[20px] bg-[#ffedec] rounded-[14px]'/>
                      <p>Add Empolyee</p>
                    </div>
                    <div className = 'w-[104px] h-[84px] flex flex-col gap-[10px] items-center '>
                      <img src='images/payslip.png' alt='icon' className = 'p-[20px] bg-[#f0eeff] rounded-[14px]'/>
                      <p>Send Payslips</p>
                    </div>
                    <div className = 'w-[104px] h-[84px] flex flex-col gap-[10px] items-center '>
                      <img src='images/edit-salary.png' alt='icon' className = 'p-[20px] bg-[#fff2db] rounded-[14px]'/>
                      <p>Edit Salaries</p>
                    </div>
                    <div className = 'w-[104px] h-[84px]  flex flex-col gap-[10px] items-center'>
                      <img src='images/bluehand.png' alt='icon' className = 'p-[20px] bg-[#e5f6fe] rounded-[14px]'/>
                      <p>Get a Loan</p>
                    </div>
                    <div className = 'w-[104px] h-[84px]  flex flex-col gap-[10px] items-center'>
                      <img src='images/send.png' alt='icon' className = 'p-[20px] bg-[#e7fbef] rounded-[14px]'/>
                      <p className='whitespace-nowrap'>Make a Transfer</p>
                    </div>
                    <div className = 'w-[104px] h-[84px]  flex flex-col gap-[10px] items-center'>
                      <img src='images/airtime.png' alt='icon' className = 'p-[20px] bg-[#e7fbef] rounded-[14px]'/>
                      <p>Airtime</p>
                    </div>
                    <div className = 'w-[104px] h-[84px] flex flex-col gap-[10px] items-center '>
                      <img src='images/data.png' alt='icon' className = 'p-[20px] bg-[#f0eeff]  rounded-[14px] '/>
                      <p>Data</p>
                    </div>
                    <div className = 'w-[104px] h-[84px] flex flex-col gap-[10px] items-center '>
                      <img src='images/electricity.png' alt='icon' className = 'p-[20px] bg-[#ffedec] rounded-[14px]'/>
                      <p>Electricity</p>
                    </div>
                  </div>
                </div>

                <div className='mobile-nav w-[390px] h-[82px] flex items-center justify-center ml-[13px]'>
                  <div  className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='images/home.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#11453B]'>Home</p>
                  </div>
                  <Link to={'/dashboard/empolyee'}>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='images/empolyee.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>Empolyee</p>
                  </div>
                  </Link>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='images/payroll.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>Payroll</p>
                  </div>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='images/loan.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>Loans</p>
                  </div>
                  <div className='w-[78px] h-[82px] flex flex-col items-center justify-center'>
                    <img src ='images/more.png' alt = 'icon' />
                    <p className = 'font-[450] text-[12px] leading-[16px] text-[#8d8e8d]'>More</p>
                  </div>
                </div>
    </div>
  )
}
