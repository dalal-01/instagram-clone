import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Suggestion({ name, disc ,img}) {
  const [follow, setFollow] = useState("Follow");
  const handleClick = () => {
    setFollow(follow === "Follow" ? "Following" : "Follow");
  };
  return (
    <div>
      <div className="postheader" style={{ margin: "0px" }}>
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
                    fontSize: "10px",
                    fontWeight: "600",
                    paddingLeft: "8px",
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "10px",
                    fontWeight: "400",
                    paddingLeft: "8px",
                    color: "rgb(180,180,180)",
                  }}
                >
                  {disc}
                </span>
              </Stack>
            </Box>
          </div>
          <div
            onClick={handleClick}
            style={{
              fontFamily: " Poppins",
              fontSize: "10px",
              fontWeight: "400",
              paddingLeft: "8px",
              color: follow == "Follow" ? "blue" : "white",
              cursor: "pointer",
            }}
          >
            {follow}
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default Suggestion;
