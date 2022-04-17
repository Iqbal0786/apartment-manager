import { AppBar, Button, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainData } from '../Redux/MainRedux/MainAction';

export const Main = ()=> {
   const dispatch=useDispatch()
   const {data}=useSelector((store)=>store.data)
   console.log(data)
  useEffect(()=>{
       dispatch(fetchMainData())

  },[])
   
  return (
   <>
   <AppBar>
       <Toolbar>
           Welcome to Sarla Apartment
       </Toolbar>
   </AppBar>
   <Box sx={{ margin:"auto" ,marginTop:"100px"}}>
       <Button variant='outlined'>Sort</Button>
       <Button variant='outlined'>Sort</Button>
   </Box>
     
        <Box>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Serial No</TableCell>
            <TableCell>Flat No</TableCell>
            <TableCell align="right">Block</TableCell>
            <TableCell align="right">Total Residents</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item,index) => (
            <TableRow
              key={item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{item.flatNumber}</TableCell>
              <TableCell align="right">{item.block}</TableCell>
              <TableCell align="right">{item.resident_id.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
   </>
  )
}
