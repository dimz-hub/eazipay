import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import MobileDashboard from './MobileDashboard'
import { doc, getDoc , onSnapshot} from "firebase/firestore";
import { db } from '../util/firebase';
import { useAuthContext } from '../util/authContext';

export default function Dashboard() {
  
  const {currentUser} = useAuthContext()
  const [userInfo, setUserInfo] = useState({})


  

 

   
    
  const getData =  () =>{
    const unsub = onSnapshot(doc(db, 'user' , currentUser.uid), (doc) => {
   if (doc.exists()) {
     setUserInfo(doc.data())

   }else{
    console.log('error')
   }
   
    })
    return () => {
      unsub()
    }
   }

   useEffect(() => {
    if (currentUser?.uid) {
      getData();
    }
   },[currentUser])
   
  



//   async function getDatas() {
//       const docRef = doc(db, "user", currentUser.uid);
//   const docSnap = await getDoc(docRef);
 
//  if (docSnap.exists()) {
//     setUserInfo(docSnap.data());
//    } else {
//      // docSnap.data() will be undefined in this case
//      console.log("No such document!");
//    }
  
//  }


//    getDatas()

//    console.log(userInfo)







  return (
    <div className = 'dashboard'> 
    <div className='xs:hidden'>

         <Sidebar  />
    </div>
    <div className='xs:hidden'>

        <Body  userInfo = {userInfo} /> 
    </div>
    <div className='hidden xs:block'>

        <MobileDashboard userInfo={userInfo} />
    </div>
    </div>
  )
}
