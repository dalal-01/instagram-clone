import React from "react";
import Grid from "@mui/material/Grid";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import one from "../assets/Avatars/boy.png";
import two from "../assets/Avatars/cock-man.png";
import three from "../assets/Avatars/man.png";
import four from "../assets/Avatars/nurse.png";
import five from "../assets/Avatars/shop-assistant.png";
import Message from "./Message.jsx";
import SendMessage from "./SendMessage.jsx";

const MessagesArray = [
  { id: 1, img: one, name: "Farah Zakarneh", message: "Followed by moath"  ,active:'yes'},
  { id: 2, img: two, name: "Batool Azzam", message: "Lorem ipsum dolor sit."  ,active:'no'},
  { id: 3, img: three, name: "Hala", message:"Lorem ipsum dolor sit."  ,active:'yes'},
  { id: 4, img: four, name: "Anwar Ghannam", message:"Lorem ipsum dolor sit."  ,active:'no'},
  { id: 5, img: five, name: "Jenan Kmail", message:"Lorem ipsum dolor sit." ,active:'no' },
];

function Messages() {
  return (
    <div>
      <Grid  container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
        <Grid item xs={3.5}>
          <div>
            <div className="Messagesheader" style={{ margin: "0px" }}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className="postinfo">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "nowrap",
                      p: 1,
                      maxWidth: 300,
                      borderRadius: 1,
                      alignItems: "center",
                    }}
                  >
                    <span style={{fontFamily:'Poppins',fontWeight:'600', fontSize:'13px'}}>dalalzakarneh</span>
                    <ExpandMoreOutlinedIcon fontSize="15"></ExpandMoreOutlinedIcon>
                  </Box>
                </div>
                <div className="Newmessage">
                  <ModeOutlinedIcon fontSize="15"></ModeOutlinedIcon>
                </div>
              </Grid>
            </div>
            <Divider  style={{backgroundColor:'rgb(140,140,140)' ,marginTop:'9px'}}></Divider>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <span style={{fontFamily:'Poppins',fontWeight:'600', fontSize:'12px',marginLeft:'7px'}}>Messages</span>
              <span style={{fontFamily:'Poppins',fontWeight:'400', fontSize:'11px'}}>Request</span>
            </Grid>
            {MessagesArray.map((msg) => {
              return <Message name={msg.name} message={msg.message} img={msg.img } active={msg.active}></Message>;
            })}
          </div>
        </Grid>
        <Grid item xs={8.5}>
          <SendMessage></SendMessage>
        </Grid>
      </Grid>
    </div>
  );
}

export default Messages;
