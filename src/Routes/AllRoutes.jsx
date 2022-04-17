
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

export default function AllRoutes() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route/>
   </Routes>
   </>
  )
}