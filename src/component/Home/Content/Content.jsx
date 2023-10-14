import React, { useState } from "react";
import Story from "./Story.jsx";
import Container from "@mui/material/Container";
import Posts from "./Posts.jsx";
import Divider from '@mui/material/Divider';

function Content() {

  
  const options = [
    'Edit',
    'Delete',
    
  ];
  return (
    
      <Container maxWidth="sm" style={{marginLeft:'40px'}}>
           
        <Story></Story>
        <Divider  style={{backgroundColor:'rgb(140,140,140)' ,marginTop:'9px'}}></Divider>


        <Posts></Posts>
      </Container>
   
  );
}

export default Content;
