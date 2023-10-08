import * as React from "react";
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
import img from "./assets/Avatars/boy.png";

import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import imgf from "./assets/instagram-logo.png";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost.jsx";
// import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const drawerWidth = 200;

function Sidebar(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img
        src={imgf}
        width={drawerWidth - 80}
        style={{ marginRight: "25px", marginTop: "40px" }}
      ></img>

      <List>
        {[
          {
            name: "Home",
            icon: <HomeIcon sx={{ fontSize: "1.5rem" }} />,
            link: "/",
          },
          { name: "Search", icon: <SearchIcon sx={{ fontSize: "1.5rem" }} /> },
          {
            name: "Explore",
            icon: <ExploreIcon sx={{ fontSize: "1.5rem" }} />,
            link: "/explore",
          },
          {
            name: "Reels",
            icon: <SlideshowIcon sx={{ fontSize: "1.5rem" }} />,
          },
          {
            name: "Messages",
            icon: <ChatIcon sx={{ fontSize: "1.5rem" }} />,
            link: "/messages",
          },
          {
            name: "Nofifications",
            icon: <FavoriteBorderIcon sx={{ fontSize: "1.5rem" }} />,
          },
          // {
          //   name: "Create",
          //   icon: <AddCircleOutlineIcon sx={{ fontSize: "1.5rem" }} />,
          //   link: "/createpost",
          // },
        ].map((text, index) => (
          <Link
            to={text.link}
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton
                style={{ paddingLeft: "5px", paddingRight: "43px" }}
              >
                <IconButton style={{ padding: "0px 12px" }}>
                  {text.icon}
                </IconButton>

                <span
                  style={{
                    fontFamily: " Poppins",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  {text.name}
                </span>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Link
          onClick={handleOpen}
          style={{ color: "white", textDecoration: "none" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ paddingLeft: "5px", paddingRight: "43px" }}
            >
              <IconButton style={{ padding: "0px 12px" }}>
                <AddCircleOutlineIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>

              <span
                style={{
                  fontFamily: " Poppins",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                Creat
              </span>
              <CreatePost open={open} handelclose={handleClose}></CreatePost>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          <ListItemButton>
            <Avatar
              alt="Travis Howard"
              src={img}
              style={{
                backgroundColor: "black",
                width: "20px",
                height: "20px",
                padding: "0px 12px",
              }}
            />

            <span
              style={{
                fontFamily: " Poppins",
                fontSize: "13px",
                fontWeight: "500",
                paddingLeft: "5px",
              }}
            >
              dalalzakarneh
            </span>
          </ListItemButton>
        </Link>
      </List>

      <CreatePost open={open} handelclose={handleClose}></CreatePost>
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
