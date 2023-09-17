import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../util/firebase';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

    let sidebarItems = [
        {
            image: 'images/square.png',
            name: 'dashboard',
            id:1
        },
        {
            image: 'images/Wallet.png',
            name: 'wallet',
            id:2
        },
        {
            image: 'images/empolyee.png',
            name: 'empolyee management',
            arrow: 'images/arrow.png',
            id:3
        },
        {
            id:4,
            image: 'images/payroll.png',
            name: 'payroll',
            arrow: 'images/arrow.png'
        },
        {
            id:5,
            image: 'images/compliance.png',
            name: 'compliance',
            arrow: 'images/arrow.png'
        },
        {
            id:6,
            image: 'images/Loan.png',
            name: 'quick loan',
            arrow: 'images/arrow.png'
        },
        {
            id:7,
            image: 'images/book.png',
            name: 'book keeping',
            arrow: 'images/arrow.png'
        },
        {
            id:8,
            image: 'images/support.png',
            name: 'support',
            arrow: 'images/arrow.png'
        },
        {
            id:9,
            image: 'images/settings.png',
            name: 'settings',
            arrow: 'images/arrow.png'
            
        },
        
    ]
    const navigate = useNavigate()
  function logOut() {
    signOut(auth).then(() => {
        navigate('/signin')
    })
          
      
    
  }
  return (
    <div  className='bg-white h-[150vh]'>
        <img src= 'images/dashboard-logo.png' alt ='dashlogo'  />
        <div className='mt-[25px] '>
            {
                sidebarItems.map(item =>{
                    return (
                        <div key = {item.id} className=' sidebar-item flex justify-between h-[auto] w-[272px] box-border'>
                            <div className='flex gap-2'>

                            <img src={item.image} alt='image'/>
                            <p>{item.name}</p>
                            </div>
                            { item.arrow && <img src={item.arrow} alt='arrow'/>} 
                        </div>
                    )
                })
            }
        </div>
        <button onClick={logOut} className='p-2 mt-[12rem] font-[600] bg-[#D9EBCD] rounded-[10px] box-border w-[100%] h-[60px] mb-[10px]];
] '>
            Log Out
        </button>
    </div>
  )
}
