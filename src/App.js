import React from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import {Route, Routes} from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Empolyee from './components/Empolyee';
import ProtectRoute from './components/ProtectRoute';
function App() {
  return (
    <div >
      <Routes>
     <Route path='/' element = { <LandingPage />}/>
     <Route path='/dashboard' element ={
     <ProtectRoute>
     <Dashboard />
     </ProtectRoute>
     }/>
     <Route path='/Signin' element ={<Signin />} />
     <Route path='/Signup' element ={<Signup />} />

     <Route path='/dashboard/empolyee' element ={<Empolyee/>} />

     
      </Routes>



    

   
    </div>
  );
}

export default App;
