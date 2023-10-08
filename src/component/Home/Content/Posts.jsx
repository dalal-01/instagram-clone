import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import eleven from "../../assets/ExplorePics/explorePic11.webp";
import Stack from "@mui/material/Stack";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const options = ["None", "Atria"];

function Posts() {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <div className="avatar">
                <Avatar
                  alt="Travis Howard"
                  src=""
                  style={{ backgroundColor: "black" }}
                />
              </div>
              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "12px",
                  fontWeight: "450",
                  paddingLeft: "8px",
                }}
                
              >
                Dalal
              </span>
            </Box>
          </div>
          <div className="postedit">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu 
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                   
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem 
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </ThemeProvider>
          </div>
        </Grid>
      </div>
      <div className="postBody">
        <Box
          sx={
            {
              // width: 150,
              // height: 150,
            }
          }
        >
          <img
            src={eleven}
            width={390}
            style={{ border: "solid 3px rgb(223, 68, 94)" }}
          ></img>
        </Box>
      </div>

      <div className="postfooter">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="left">
            <FavoriteBorderIcon
              style={{
                fontSize: "24px",
                fontWeight: "400",
                paddingRight:'5px'
              }}
            ></FavoriteBorderIcon>
            <SendOutlinedIcon  style={{
                fontSize: "24px",
                fontWeight: "400",
                paddingRight:'5px'
              }}></SendOutlinedIcon>
            <ChatBubbleOutlineOutlinedIcon  style={{
                fontSize: "24px",
                fontWeight: "400",
                paddingRight:'5px'
              }}></ChatBubbleOutlineOutlinedIcon>
          </div>
          <div className="right">
            <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
          </div>
        </Grid>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <span  style={{
          fontFamily: " Poppins",
          fontSize: "11px",
          fontWeight: "600",
        }}>744 likes</span>
          <span style={{
          fontFamily: " Poppins",
          fontSize: "10px",
          fontWeight: "500",
        }}>Dalal</span>
          <span style={{
          fontFamily: " Poppins",
          fontSize: "9px",
          fontWeight: "400",
        }}>lkjj skrg weugh seriug eughbs </span>
        </Stack>
      </div>
    </div>
  );
}

export default Posts;
