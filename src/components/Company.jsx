import React, {useState} from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../util/firebase'
import { storage } from '../util/firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../util/firebase';
import { useNavigate } from 'react-router-dom';





export default function Company() {

const states = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsea', 'Benue', 'Borno', 'Cross River', 'Delta', 'Eboniyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 
'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',  'Nasarawa',  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara' ]



const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(false)
const [companyName, setCompanyName] = useState('')
const [file, setFile] = useState()
const [address, setAddress] = useState('')
const [companySize, setcompanySize] = useState('less than 50')
const [state, setState] = useState('abia')
const [payID, setPayID] = useState('')
const [website, setWebsite] = useState('')
const [industry, setIndustry] = useState('')
const [pension, setPension] = useState('')
const navigate = useNavigate()

async function handleSubmit(e){
  e.preventDefault()
 try{

  const res = await createUserWithEmailAndPassword(auth,email,password) 
   
 const storageRef = ref(storage, companyName)

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
        displayName:companyName,
        photoURL:downloadURL
      })

      
      await setDoc(doc(db, "user", res.user.uid), {
  uid: res.user.uid,
  email,
  photoURL: downloadURL,
  displayName: companyName,
  address,
  companySize,
  state,
  payID,
  website,
  industry,
  pension 

});
   
    
navigate('/dashboard')

  },4000)

    
  }
  );
}catch(err){
  setError(true)

}
 }



 




  return (
    <form onSubmit= {handleSubmit} className='gap-[20px] p-2 h-[100%]  rounded-[15px]  w-[45vw] m-[auto] company flex flex-col items-center justify-center'>
      <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]'  type='text' placeholder='Company Name' value ={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
      <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]' value={email} type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
      <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]' value={address} onChange={(e) => setAddress(e.target.value)} type='text' placeholder='Office Address'  required/>
     <div className='company-size'>

     <label htmlFor = 'company-size'  className='text-[grey] relative top-[-20px] left-[120px] xs:top-[12px] xs:bg-opacity-0 '>Company Size</label>
     <select value={companySize} onChange={(e) => setcompanySize(e.target.value)} className='w-[300px] mr-[84px] xs:mb-[13px] xs:mt-[17px] outline-none text-[14px] font-[Aeonik] font-[400] text-[grey] xs:ml-[85px]' id='company-size ' required>
      <option className='text-white' >
        less than 50
      </option>
      <option>
        50 and above 
      </option>
      <option>
    100 and above
      </option>
     </select>
        </div>
      <input className = 'p-2 outline-none xs:mb-[13px] w-[300px]' value={pension} onChange={(e) => setPension(e.target.value)} type='text' placeholder='Pension code' required/>
   <div className= ' states'>

     <label htmlFor = 'states' className='text-[grey] relative top-[-20px] left-[120px] xs:top-[12px] xs:bg-opacity-0 '>PAYE State</label>
      <select id = 'states'value={state} onChange={(e) => setState(e.target.value)} className=' mr-[65px] w-[300px] xs:mb-[13px] outline-none xs:mt-[17px] text-[14px] font-[Aeonik] font-[400] text-[grey] xs:ml-[60px]' required>
        {
          states.map(state => {
            return (
              <option key= {state}>{state }</option>
              ) 
          })
        }
      </select>
              </div>
        <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]' value={payID} onChange={(e) => setPayID(e.target.value)} type='text' placeholder='PAYE ID' required/>
        <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]' value={website} onChange={(e) => setWebsite(e.target.value)} type='text' placeholder='Website' required/>
        <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]' value={industry} onChange={(e) => setIndustry(e.target.value)} type='text' placeholder='Industry' required/>
        <input id='file'  onChange={(e) => setFile(e.target.files[0])} className  = ' hidden p-2 outline-none w-[300px]' type='file' />
        <label htmlFor='file' className=' register-photo p-2 w-[300px] xs:mb-[13px]'> 
        <div className='font-[Aeonik] font-[500] text-[18px] leading-[16px]'> Choose Image</div>
        </label>
        <input className = 'p-2 outline-none w-[300px] xs:mb-[13px]' value={password} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
        <button className='w-[300px] font-[500]  text-white p-2 '>Register</button>
       {error && <p  className = 'text-red-400'>Something went wrong</p> }

    </form>
  )
}
