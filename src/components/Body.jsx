import React , {useState} from 'react'
import Dashheader from './Dashheader'
import Balance from './Balance'
import Chart from './Chart'
import Activities from './Activities'
import { useAuthContext } from '../util/authContext'


export default function Body({userInfo}) {
  const {currentUser} = useAuthContext()

  return (
    <div className='dash-body p-2'>
        <Dashheader currentUser = {currentUser} userInfo ={userInfo} />
        <Balance  currentUser={currentUser}/>
        <Chart />
        <Activities />
    </div>
  )
}
