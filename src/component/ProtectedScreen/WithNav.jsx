import React from 'react'
import { Outlet } from 'react-router';
import Sidebar from './Sidebar.jsx';
import Grid from "@mui/material/Grid";


function WithNav() {
  
  return (
    <>
     <Grid item xs={2.5 } >
        <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={9} >
        <Outlet></Outlet>
        </Grid>
    </>
  )
}

export default WithNav


