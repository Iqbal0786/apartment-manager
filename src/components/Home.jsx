import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
 import {useSelector} from "react-redux"
import {Main} from './Main'
import Login from './Login'
export default function Home() {
  const {isLogged} = useSelector((store)=>store.login)
  return (
   <>
    <AppBar>
       <Toolbar>
           <Typography>
              Welcome home
           </Typography>
       </Toolbar>
   </AppBar>
    {isLogged?<Main/> :<Login/>}
   </>
  )
}
