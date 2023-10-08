import React from "react";
import Stack from "@mui/material/Stack";
import messengerlogo from "../assets/messengar-logo.png";
import Button from "@mui/material/Button";

function SendMessage() {
  return (
    <div style={{paddingTop:'180px'}}> 
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <img src={messengerlogo} width={"80px"}></img>
        <span
          style={{
            fontFamily: " Poppins",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Your Messages
        </span>
        <span
          style={{
            fontFamily: " Poppins",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          Send private photos and messages to a friend or group
        </span>
        <Button 
          sx={{
            borderRadius: "8px",
            fontFamily: " Poppins",
            fontSize: "10px",
            fontWeight: "600",
            backgroundColor:"rgb(33, 150, 243)"
          }}
          variant="contained"
        >
          Send Message
        </Button>
      </Stack>
    </div>
  );
}

export default SendMessage;
