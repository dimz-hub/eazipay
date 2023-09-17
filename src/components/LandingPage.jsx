import React from 'react'
import Toppage from './Toppage'
import Business from './Business'
import Eazipay from './Eazipay'
import Salary from './Salary'
import Exclusive from './Exclusive'
import Footer from './Footer'

export default function LandingPage() {


  return (
    <div className='xs:overflow-x-hidden xs:h-[auto]'>
     
    <Toppage className = 'toppage' />
      <Business />
      <Eazipay />
      <Salary />
      <Exclusive />
      <Footer />
    </div>
  )
}
