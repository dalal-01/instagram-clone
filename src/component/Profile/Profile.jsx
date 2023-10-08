import React from "react";
import Grid from "@mui/material/Grid";
import ProfileHeader from "./ProfileHeader.jsx";
import ProfileContent from "./ProfileContent.jsx";
import Divider from "@mui/material/Divider";

function Profile() {
  return (
    <div>
      {" "}
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <ProfileHeader></ProfileHeader>
          <Divider
            sx={{ backgroundColor: "rgb(150,150,150)", height: 1.1, marginTop:'15px' }}
          ></Divider>
          <ProfileContent></ProfileContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
