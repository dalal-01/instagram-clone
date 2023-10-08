import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";

function ProfileHeader() {
  return (
    <div className="profile">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Avatar
            alt="Travis Howard"
            src=""
            style={{ backgroundColor: "red", margin: "auto" }}
            sx={{ width: 90, height: 90 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
          >
            <Stack style={{height:'40px'}} className="buttons"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <h5>dalalzakarenh</h5>
              <Button
                sx={{
                  fontFamily: " Poppins",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight:"600",
                  textTransform:'capitalize'
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
                  fontWeight:"600",
                  textTransform:'capitalize'
                
                }}
              >
                View actions
              </Button>
              <SettingsIcon></SettingsIcon>
            </Stack>

            <Stack className="follow"
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={4}
            >
              <span>9 posts</span>
              <span>268 followers</span>

              <span> 269 following</span>
            </Stack>
            <span>Dalal Žaķařńeh</span>
            <span>Palestinian</span>

            <span>👩‍💻💻📚AAUP</span>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileHeader;


