import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Message({ name, message, img, active }) {
  return (
    <div>
      <div style={{ margin: "0px" }}>
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
              <div className="">
                <Avatar
                  alt="Travis Howard"
                  src={img}
                  style={{ backgroundColor: "black" }}
                />
              </div>

              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <span
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "12px",
                    fontWeight: "600",
                    paddingLeft: "9px",
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "400",
                    paddingLeft: "7px",
                  }}
                >
                  {message}
                </span>
              </Stack>
            </Box>
          </div>
          {active == "yes" ? (
            <div
              style={{
                backgroundColor: "blue",
                height: "7px",
                width: "7px",
                borderRadius: "50%",
              }}
            ></div>
          ) : (
            <div></div>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Message;
