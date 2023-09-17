import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)


  function onToggle() {
    setToggle(!toggle)
  }
  return (
    <div className={`w-[100vw] xs:flex xs:justify-between xs:p-3 ${toggle? 'xs:mb-[10rem]' : ''} xs:pt-[30px]`}>

    <div className='h-[80px] w-[80%]  m-[auto] flex items-center justify-between xs:block xs:w-[100%]' >
        <img src='images/logo.png' alt='logo'/>
        <ul className={`${toggle? '' :'xs:hidden'}  xs:w-[100%] xs:text-center xs:ml-[15px]  flex items-center gap-[48px] mr-[6rem] font-[500] text-[16px] xs:block xs:mt-[20px] `}>
           <Link to = {'/signup'}>
            <li className='xs:border-b xs:border-[#b5b6b5] xs:p-2 xs:text-[20px]'>Individual</li>
           </Link>
           <Link to={'/signup'}>
            <li className='xs:border-b xs:border-[#b5b6b5] xs:p-2 xs:text-[20px]'>Business</li>
           </Link>
            <li className='xs:border-b xs:border-[#b5b6b5] xs:p-2 xs:text-[20px]'>Pricing</li>
            <li className='xs:border-b xs:border-[#b5b6b5] xs:p-2 xs:text-[20px]'>Set your payroll</li>
        </ul>
        <div className = 'flex items-center gap-[24px]'>
            <button onClick= {() => navigate('/signin')} className='login-btn xs:hidden'>Log in</button>
            <button onClick= {() => navigate('/signup')} className='reg-btn xs:hidden'>Register</button>
        </div>
    </div>
        <div onClick={onToggle} className='xs:mr-[10px] hidden xs:block'>

        <FaBars size={25}  />
        </div>
    </div>
  )
}
