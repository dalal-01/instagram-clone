import React from 'react'
import { Outlet } from 'react-router';
import Grid from "@mui/material/Grid";

function WithoutNav() {
  return (
    <><Grid item xs={12}>
        <Outlet></Outlet>
        </Grid>
    </>
  )
}

export default WithoutNav


