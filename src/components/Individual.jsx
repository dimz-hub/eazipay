import React , {useState} from 'react'
import {auth} from '../util/firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../util/firebase';
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { storage } from '../util/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'


export default function Individual() {

  const [email,setEmail] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState(false)
  const [file, setFile] = useState()
  const navigate = useNavigate()

async function handleSubmit(e) {
  e.preventDefault()
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage, firstName)

    const uploadTask =  uploadBytesResumable(storageRef, file) 

    uploadTask.on(
      (error) => {
        setError(true)
        console.log(error.message)
      }, 
      () => {
          
        setTimeout( async () =>{

          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)


        await updateProfile(res.user, {
        displayName:firstName,
        photoURL:downloadURL
      })

      await setDoc(doc(db, "user", res.user.uid), {
        uid:res.user.uid,
        email,
        firstName,
        lastName,
        photoURL:downloadURL
      })

navigate('/dashboard')
    },4000)
  })
  }catch(err){
    setError(true)
  }
}



  return (
    <form onSubmit={handleSubmit} className='company gap-[20px] p-2 items-center justify-center flex flex-col'> 
      <input  value={firstName}  onChange = {(e) => setFirstName(e.target.value) }className = 'p-2 outline-none w-[300px]' type='text' placeholder='First Name' required/>
        <input value={lastName}  onChange = {(e) => setLastName(e.target.value)}className = 'p-2 outline-none w-[300px]' type='text' placeholder='Last Name' required/>
        <input value={email}  onChange = {(e) => setEmail(e.target.value) }className = 'p-2 outline-none w-[300px]' type='text' placeholder='Email' required/>
        <input value={password}  onChange = {(e) =>setPassword(e.target.value) }className = 'p-2 outline-none w-[300px]' type='password' placeholder='Password' required/>
        <input id='file'  onChange={(e) => setFile(e.target.files[0])} className  = ' hidden p-2 outline-none w-[300px]' type='file' />
        <label htmlFor='file' className=' register-photo p-2 w-[300px]'> 
        <div className='font-[Aeonik] font-[500] text-[18px] leading-[16px]'> Choose Image</div>
        </label>
        <button   className='w-[300px] font-[500]  text-white p-2 '>Register</button>
        {
          error && <p className = 'text-red-400'>Something went wrong</p>
        }
      
    </form>
  )
}
