import React, {useState} from 'react'
import Individual from './Individual'
import Company from './Company'
import { Link } from 'react-router-dom'

export default function Signup() {

const [individual, setIndividual] = useState(true)
const [active , setActive] = useState(true)

function handleCompany() {
  setIndividual(false)
  setActive(false)
}
function handleIndividual() {
  setIndividual(true)
  setActive(true)
}

  return (
    
      
    <div className='signup mt-[3rem] flex flex-col  h-[100%]  rounded-[15px]  w-[45vw] m-[auto] items-center gap-[20px]  xs:w-[100%] xs:shadow-none'>
      <h2 className='font-[600]  text-[27px] '> First things first </h2>
      <p className = 'text-[20px]'> <span className='ml-[40px]'>We want to serve you better.</span> <br/> Tell us a bit about yourself or company</p>
      <div className='w-[300px] justify-between p-2 rounded-[16px] flex gap-[10px] items-center signup-buttons'>
        <button  className={`w-[140px] rounded-[10px] p-1 ${active? 'bg-[#11453B] text-white'  : 'bg-[#F2F1F1]'}`} onClick={handleIndividual}>Individual</button>
        <button  className={` w-[140px] rounded-[10px] p-1 ${active? 'bg-[#F2F1F1]' : 'bg-[#11453B] text-white'}`} onClick={handleCompany}>Company</button>
      </div>

      {
        individual? <Individual /> : <Company />
      }
      <Link to={'/signin'}>
        <p className=''> Already have an Account? <span className='underline'>Login</span></p>
      </Link>
    </div>
        
  )
}
