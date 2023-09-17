import React from 'react'

export default function Balance({currentUser}) {
   
  return (
    <div className='w-[80%] pl-[40px] pt-[50px] '>
        <h1 className=' text-[36px] font-[700]'>Welcome {currentUser?.displayName}</h1>
        <p  className='text-[16px] font-[500]'>Pay and manage your empolyee in minutes</p>
        <div className='balance-page flex  gap-[3rem] mt-[2rem]'>
            <div className='balance flex flex-col gap-[48px] '>
                <div className='account-balance items-center flex box-border justify-between h-[154px] w-[770px]'>
                    <div className='text-[white]'>
                    <p>Wallet Balance</p>
                    <div className='flex items-center gap-[5px]'> 
                        <h1 className='font-[700] text-[34px]'>N12,560,078.00</h1>
                        <img  src='images/eye.png' alt='no see'/>
                    </div>

                    </div>
                    <button>Fund Wallet</button>
                </div>
                <div className='user-features flex  gap-[2rem]' >
                    <div  className='feature'>
                        <img src='images/reduser.png' className='mb-[0.7rem] p-[14px] bg-red-200 rounded-[12px]' />
                        <p>Add Empolyee</p>
                    </div>
                    <div className='feature'>
                        <img src='images/salary.png'  className='mb-[0.7rem] bg-green-200 rounded-[12px] p-[14px]'/>
                        <p>Pay Salaries</p>
                    </div>
                    <div className='feature'>
                        <img src='images/send.png' className='mb-[0.7rem] p-[14px] bg-green-200 rounded-[12px]' />
                        <p>Pay Compliances</p>
                    </div>
                    <div className='feature'>
                        <img src='images/bluehand.png' className='mb-[0.7rem] p-[14px] bg-green-200 rounded-[12px] text-[blue]' />
                        <p>Quick Loan</p>
                    </div>
                </div>
            </div>
            <div className='payroll-date h-[314px] box-border w-[188px] bg-white rounded-bl-[32px] rounded-br-[32px] rounded-tl-[16px] rounded-tr-[16px]'>
                <div className=' date-top flex flex-col items-center'>

                <p className=' w-[188px] payroll-head pt-[8px] pb-[8px] pr-[36px] pl-[36px] text-center bg-green-200 rounded-tl-[16px] font-[700] text-[16px] rounded-tr-[16px]'>Next Payroll</p>
                <div className='flex gap-[5px] mb-[10px] items-center mt-[15px]'>
                    <img src='images/calendar.png'/>
                    <p>Friday</p>
                </div>
                <h3 className='font-[700] text-[18px]' >09/11/2022</h3>
                </div>
                <div className='pt-[26px] pb-[15px] pr-[16px] pl-[16px]' >
                    <p className='font-[500] text-[16px]'>Total Empolyee</p>
                    <h3 className='font-[700] text-[32px]'>64</h3>
                    <div className='flex items-center text-[10px]'>
                        <div>
                            <div className='w-[78px] h-[8px] male'></div>
                            <p>
                                Male
                            </p>
                            <p>
                                32
                            </p>
                        </div>
                        <div>
                            <div className='w-[78px] h-[8px] female'></div>
                            <p>
                                Female
                            </p>
                            <p>
                                32
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
