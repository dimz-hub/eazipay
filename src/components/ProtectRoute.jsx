import React from 'react'
import { useAuthContext } from '../util/authContext'
import { useNavigate } from 'react-router-dom'

export default function ProtectRoute({children}) {

const navigate = useNavigate()

const {currentUser} = useAuthContext()


if(currentUser == null) {
    setTimeout(() => {
      navigate('/')
    }, 1000)
}

  return children

}
