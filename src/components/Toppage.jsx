import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Toppage() {
  return (
    <div className='min-h-[100vh] toppage'>
        <Navbar />
        <Hero />
    </div>
  )
}
