import React, {useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../util/firebase'
import { useNavigate, Link } from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()



  async function handleSubmit(e) {
  e.preventDefault()
  try{
   await signInWithEmailAndPassword(auth, email, password)
   navigate('/dashboard')
  }catch(error) {
   setError(true)
  };

  }


  return (
    

    <form  onSubmit={handleSubmit} className='signin flex flex-col justify-center items-center mt-[9rem] gap-[2rem] h-[60vh]  rounded-[15px]  w-[45vw] m-[auto] xs:w-[100%] xs:shadow-none  ' >
        <h1 className='font-[700] text-[28px]'>LOGIN</h1>
        <input  value={email} onChange={(e) => setEmail(e.target.value) }  className = 'w-[300px] p-2 outline-none  xs:mb-[15px]'id='email' type='text' placeholder='Email' required/>
        <input value={password} onChange={(e) => setPassword(e.target.value) } className='w-[300px] p-2 outline-none  xs:mb-[15px]' id='password' type='password' placeholder='Password' required/>
        <button className='w-[300px] p-2 rounded-[14px] text-white font-[600] text-[16px] xs:mb-[15px]'> Login </button>
        <Link to={'/signup'}> 
        <p>Don't have an account? <span className='underline'>Register</span></p>
        </Link>
        {
          error && <p className='text-red-400'>Something went wrong</p>
        }
    </form>

  )
}
