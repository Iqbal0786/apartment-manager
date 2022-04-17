
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import { Main } from '../components/Main'

export default function AllRoutes() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/main' element={<Main/>}/>
   </Routes>
   </>
  )
}
