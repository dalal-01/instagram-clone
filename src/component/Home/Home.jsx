import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Content from './Content/Content.jsx';
import Suggestion from './Suggestions.jsx';

function Home() {
  return (
    <div>
        <div>
        <Box sx={{ flexGrow: 1 }} style={{ paddingTop: 35 }}>
      <Grid container >
      
        <Grid item xs={6.5}>
            <Content></Content>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={3}>
            <Suggestion></Suggestion>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    </div>
  )
}

export default Home