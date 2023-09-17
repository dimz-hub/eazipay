import React from 'react'

export default function Activities() {
    return (
      <>
      <div className='ml-[38px] mt-[25px] mb-[18px]'>

      <h2 className='mb-[15px] text-[32px] font-[500]'> Recent Activities </h2>

    <div className='flex w-[1006px] items-center gap-[16px]' >

     <div className=' dash-input flex items-center w-[904px] h-[48px] bg-white rounded-[16px]' >
     <input type='text' className= 'outline-none w-[802px] pl-[2rem] ' placeholder='search empolyee'/>
     <button className='pt-[11px] pb-[11px] flex justify-center rounded-tr-[16px] rounded-br-[16px] w-[102px] bg-green-200 text-center '><img src='images/search.png' alt = 'search'/></button>
    </div>       
<button className=' filter w-[86px] flex justify-center bg-white h-[48px] items-center rounded-[16px]'>

    <img src='images/filter.png' alt='filter'/>
</button>

    </div>
      </div>
      
      <div className='activities mb-[20px]'>
        <div>

        <h2 className='font-[500] text-[18px] p-3'>Wednesday, November 09, 2022</h2>
        <div className='act-with-time flex flex-col w-[1006px] h-[104px] bg-white rounded-[16px] pt-[20px] pb-[8px] pl-[48px] gap-[22px] mb-[20px]'>
                <p className = 'font-[400] text-[12px] mt-[-10px] text-gray-500 '>PAYROLL</p>
           <div className='payroll-activity items-center'>

            <div>
                <div  className = 'flex items-center gap-[10px]'>
                    <img  src = 'images/bm.png' alt = 'user'/>
                    <p className='font-[500] text-[16px]'>Badmus Kemis</p>
                </div>
            </div>
            <div>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2'>ACTIVITY</p>
                <div>
                    <p className='font-[500] text-[16px]'>Paid November 2022 salary</p>
                </div>
            </div>
            <div>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2 '>EMPOLYEE</p>
                <div>
                    <p className='font-[500] text-[16px]'>52</p>
                </div>
            </div>
            <div>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2 '>TIME</p>
                <div>
                    <p className='font-[500] text-[16px]'>16:15</p>
           </div>
                </div>
            </div>

        </div>
        <div className='act-no-time flex flex-col w-[1006px] h-[104px]  bg-white rounded-[16px] pt-[8px] pb-[8px] pr-[48px] pl-[48px] gap-[22px] mb-[30px]'>
               
                <p className = 'font-[400] text-[12px] text-gray-500 '>EMPOLYEE MANAGEMENT</p>
            <div className='empolyee-activity items-center'>

            <div>
                <div className = 'flex items-center gap-[10px]'>
                    <img src='images/chelsea.png' alt = 'user' />
                    <p className='font-[500] text-[16px]'>Chelsea Emecheta</p>
                </div>
            </div>
            <div  className = ''>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2 '>ACTIVITY</p>
                <div>
                    <p className='font-[500] text-[16px]'>Added new empolyee</p>
                </div>
            </div>
            <div className='ml-[51px]'>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2 '>EMPOLYEE</p>
                <div>
                    <p className='font-[500] text-[16px]'>04</p>
                </div>
            </div>

        </div>
            </div>
        </div>
        <div>
    <h2 className='font-[500] text-[18px] p-3'>
        Friday, November 04, 2022
    </h2>
    <div className='act-no-time flex-col gap-[22px] flex w-[1006px] h-[104px] bg-white rounded-[16px] pt-[8px] pb-[8px] pr-[48px] pl-[48px] mb-[20px]'>
                <p className = 'font-[400] text-[12px] text-gray-500 '>BONUS</p>
            <div  className='empolyee-activity items-center'>

            <div>
                <div className = 'flex items-center gap-[10px]'>
                    <img src='images/bm.png'  alt = 'user'/>
                    <p className='font-[500] text-[16px]'>Badmus Kemis</p>
                </div>
            </div>
            <div>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2 '>ACTIVITY</p>
                <div>
                    <p className='font-[500] text-[16px]'>Added new bonus</p>
                </div>
            </div>
            <div className='ml-[55px]'>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2'>BONUS NAME</p>
                <div>
                    <p className='font-[500] text-[16px]'>XMAS Bonus</p>
                </div>
            </div>
            </div>

        </div>
        <div className='act-with-time  flex w-[1006px] h-[104px] bg-white rounded-[16px] pt-[8px] pb-[8px] pr-[48px] pl-[48px] gap-[22px] flex-col'>
                <p className = 'font-[400] text-[12px] text-gray-500 '>WALLET</p>
            <div className='wallet-activity items-center'>

            <div>
                <div className = 'flex items-center gap-[10px]'>
                    <img src='images/bm.png' alt ='user'/>
                    <p className='font-[500] text-[16px]'>Badmus Kemis</p>
                </div>
            </div>
            <div className='ml-[20px]'>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2'>ACTIVITY</p>
                <div>
                    <p className='font-[500] text-[16px]'>Paid November 2022 salary</p>
                </div>
            </div>
            <div className='ml-[5px]'>
                <p className = 'font-[400] text-[12px] text-gray-500 mb-2'>AMOUNT</p>
                <div>
                    <p className='font-[500] text-[16px] text-red-500'>N11,678,900.00</p>
                </div>
            </div>
            <div className='ml-[80px]'>
                <p className = 'font-[400] text-[12px] text-gray-500  mb-2'>TIME</p>
                <div>
                    <p className='font-[500] text-[16px]'>15:31</p>
                </div>
            </div>

        </div>
            </div>

        </div>
    </div>
                    </>
  )
}
