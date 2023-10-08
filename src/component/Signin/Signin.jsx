import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import instalogo from "../assets/instagram-logo.png";
import { Link } from "react-router-dom";
import InstagramScreen from "../InstagramScreen.jsx";

function Signin() {
  return (
    <div>
      
      <Grid container alignItems='center'>
        <Grid item xs={6} container   justifyContent="flex-end" 
>
          <div style={{margin:'50px 150px 0px 0px'}} ><InstagramScreen></InstagramScreen></div>
        </Grid>
        <Grid item xs={3}>
          <Box
            className="signupRightTop"
            container
            maxWidth="sm"
            style={{ padding: " 15px 40px", margin: "100px 0px 0px 0px" }}
          >
            <img src={instalogo} width={"145px"}></img>

            <div className="signinInputs">
              <input
                label="Mobile Number or Email"
                placeholder="Mobile Number or Email"
                style={{
                  margin: "7px 0px",
                  width: "100%",
                  padding: "7px",
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "700",
                  borderRadius: "8px",
                  borderWidth: "0px",
                }}
              ></input>

              <input
                label="Password"
                placeholder="password"
                style={{
                  margin: "7px 0px",
                  width: "100%",
                  padding: "7px",
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "700",
                  borderRadius: "8px",
                  borderWidth: "0px",
                }}
              ></input>
              <Button
                sx={{
                  borderRadius: "7px",
                  fontFamily: " Poppins",
                  fontSize: "15px",
                  fontWeight: "600",
                  padding: "1px 25px",
                  backgroundColor: "rgb(33, 150, 243)",
                  textTransform: "none",
                  width: "100%",
                  margin: "7px 0px",
                }}
                variant="contained"
              >
                Login{" "}
              </Button>
              <Divider
                sx={{
                  "&::before, &::after": {
                    borderColor: "#424242",
                  },
                }}
                style={{
                  margin: "15px 0px",
                }}
              >
                or
              </Divider>
            </div>
            <Button
              sx={{
                borderRadius: "7px",
                fontFamily: " Poppins",
                fontSize: "15px",
                fontWeight: "600",
                padding: "1px 25px",
                backgroundColor: "rgb(33, 150, 243)",
                textTransform: "none",
                width: "100%",
              }}
              variant="contained"
            >
              Login with Facebook
            </Button>
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "12px",
                fontWeight: "600",
                textAlign: "center",
                marginTop:'25px',
                color: "rgb(240,240,240)",
              }}
            >
              Forgot password?
            </Typography>
          </Box>
          <Box
            className="signupRightButtom"
            container
            maxWidth="sm"
            style={{ padding: " 15px 40px", margin: "15px 0px" }}
          >
            <Typography
              style={{
                fontFamily: " Poppins",
                fontSize: "11px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 22px",
                color: "rgb(240,240,240)",
              }}
            >
              Don’t have an account?{"  "}
              <Link
                style={{
                  color: "rgb(33, 150, 243)",
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
               Sign Up
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
