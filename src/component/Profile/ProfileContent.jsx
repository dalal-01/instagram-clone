import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GridOnSharpIcon from "@mui/icons-material/GridOnSharp";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

export default function ProfileContent({myposts}) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            centered
            TabIndicatorProps={{
              sx: {
                top: 0,
                bgcolor: "white",
                height: 2,
              },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="ProfileTaps"
          >
            <Tab
              icon={<GridOnSharpIcon style={{ fontSize: "12px" }} />}
              iconPosition="start"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
              }}
              label="POSTS"
              value="1"
            />
            <Tab
              icon={<BookmarkBorderOutlinedIcon style={{ fontSize: "12px" }} />}
              iconPosition="start"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
              }}
              label="REELS"
              value="2"
            ></Tab>
            <Tab
              icon={<AccountBoxOutlinedIcon style={{ fontSize: "12px" }} />}
              iconPosition="start"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
              }}
              label="TAGGED"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ padding: "0px" }}>
          <Grid container justifyContent="center">
            <Grid item>
              <ImageList cols={3} gap={10} style={{ margin: "0px" }}>
                {myposts.slice(0,3).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      srcSet={`${item.image}?w=64&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                      // alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2" style={{ padding: "0px" }}>
          <Grid container justifyContent="center">
            <Grid item>
              <ImageList cols={3} gap={10} style={{ margin: "0px" }}>
                {myposts.slice(3).map((item,index) => (
                  <ImageListItem key={index}>
                    <img onClick={()=>console.log(item.id)}
                      srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="3" style={{ padding: "0px" }}>
          <Grid container justifyContent="center">
            <Grid item>
              <ImageList cols={3} gap={10} style={{ margin: "0px" }}>
                {itemData3.map((item,index) => (
                  <ImageListItem key={index}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
