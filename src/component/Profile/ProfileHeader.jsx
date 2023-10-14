import React, {  useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";

function ProfileHeader() {

  const avatar=localStorage.getItem('avatar')
  const bio=localStorage.getItem('bio')
  const userName=localStorage.getItem('userName')
  
  return (
    <div className="profile">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={2}  >
          <Avatar
            alt="Travis Howard"
            src={avatar}
            style={{ backgroundColor: "red",  }}
            sx={{ width: 130, height: 130  }}
          />
        </Grid>
        <Grid item xs={8}>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
          >
            <Stack
              style={{ height: "40px" }}
              className="buttons"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <h4
                style={{
                  fontFamily: " Poppins",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {userName}
              </h4>
              <Button
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "600",
                  fontFamily: " Poppins",
                  textTransform: "capitalize",
                }}
              >
                Edit profile
              </Button>
              <Button
                sx={{
                  fontFamily: " Poppins",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                View actions
              </Button>
              <SettingsIcon></SettingsIcon>
            </Stack>

            <Stack
              className="follow"
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={4}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: " Poppins",
                }}
              >
                9 posts
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: " Poppins",
                }}
              >
                268 followers
              </span>

              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: " Poppins",
                }}
              >
                
                269 following
              </span>
            </Stack>
            <span  style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  fontFamily: " Poppins",
                }}>{userName}</span>
            <span style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: " Poppins",
                }}>Palestinian</span>
 <span style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: " Poppins",
                }}>{bio}</span>
            <span style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: " Poppins",
                }}>AAUP 👩‍💻💻📚</span>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileHeader;
