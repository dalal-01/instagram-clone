import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Avatar from "@mui/material/Avatar";
import img from "../assets/instagram-logo.png";
import axios from "axios";

import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost.jsx";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const drawerWidth = 200;

function Sidebar(props) {
  const avatar=localStorage.getItem('avatar')
  const userName=localStorage.getItem('userName')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, setposts] = useState([]);

  const navigate = useNavigate();

  const [users, setusers] = useState([]);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .request({
  //       method: "get",
  //       url: "http://16.170.173.197/users",

  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })

  //     .then(function (response) {
  //       // console.log(response.data.users);

  //       setusers(response.data.users);
  //       console.log("u", users);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function handleLogout() {
    navigate("/");
    localStorage.clear();
  }

  const drawer = (
    <div style={{ paddingRight: "40px" }}>
      <img
        src={img}
        alt="insta logo"
        width={drawerWidth - 50}
        style={{ marginRight: "25px", marginTop: "40px" }}
      ></img>

      <List>
        {[
          {
            name: "Home",
            icon: <HomeIcon sx={{ fontSize: "1.9rem" }} />,
            link: "/home",
          },
          { name: "Search", icon: <SearchIcon sx={{ fontSize: "1.9rem" }} />   , link: "/Search",},
       

          {
            name: "Explore",
            icon: <ExploreIcon sx={{ fontSize: "1.9rem" }} />,
            link: "/explore",
          },
          {
            name: "Reels",
            icon: <SlideshowIcon sx={{ fontSize: "1.9rem" }} />,
            link: "/Reels",

          },
          {
            name: "Messages",
            icon: <ChatIcon sx={{ fontSize: "1.9rem" }} />,
            link: "/messages",
          },
          {
            name: "Nofifications",
            icon: <FavoriteBorderIcon sx={{ fontSize: "1.9rem" }} />,
            link: "/Nofifications",

          },
        ].map((text, index) => (
          <Link
            to={text.link}
            key={index}
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem disablePadding>
              <ListItemButton
                style={{ paddingLeft: "5px", paddingRight: "43px" }}
              >
                <IconButton style={{ padding: "0px 12px" }}>
                  {text.icon}
                </IconButton>

                <span
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "19px",
                    fontWeight: "500",
                  }}
                >
                  {text.name}
                </span>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <ListItemButton
            onClick={handleOpen}
            sx={{
              justifyContent: "flex-start",
              fontFamily: " Poppins",
              fontSize: "18px",
              fontWeight: "500",
              paddingTop: "5px",
              paddingLeft: "17px",
              width: "100%",
              color: "white",
              backgroundColor: "rgb(18, 18, 18)",
              ":hover": {
                bgcolor: "#212121",
                color: "white",
              },
            }}
          >
            <AddCircleOutlineIcon
              sx={{ fontSize: "1.9rem", marginRight: "9px" }}
            />
            <span> create post</span>
          </ListItemButton>

          <CreatePost
            open={open}
            handleClose={handleClose}
            setposts={setposts}
          />
        </Box>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          <ListItemButton>
           
            <Avatar
              alt="Travis Howard"
              src={avatar}
              style={{
                backgroundColor: "black",
                width: "40px",
                height: "40px",
              }}
            />

            <span
              style={{
                fontFamily: " Poppins",
                fontSize: "19px",
                fontWeight: "500",
                paddingLeft: "5px",
              }}
            >
              {userName}
            </span>
          </ListItemButton>
        </Link>

        <Button
          onClick={handleLogout}
          sx={{
            fontFamily: "Poppins",
            fontWeight: "800",
            padding: "5px",
           right:"60px",
           top:'90px',
            borderRadius: "10px",
            fontSize: "17px",
            bgcolor: "#212121",
              color: "white",
           
            ":hover": {
              color: "black",
              backgroundColor: "white",
            },
           
          }}
        >
          Logout
        </Button>
      </List>

      {/* <CreatePost open={open} handelclose={handleClose}></CreatePost> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar sx={{ display: { sm: "none" } }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Sidebar;
