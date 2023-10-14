import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProfileHeader from "./ProfileHeader.jsx";
import ProfileContent from "./ProfileContent.jsx";
import Divider from "@mui/material/Divider";
import axios from "axios";
import jwt_decode from "jwt-decode";


function Profile() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [myposts, setMyPosts] = useState([]);
  const [users,setusers]=useState([])
  const [myinfo,setMyInfo]=useState()
 
  useEffect(() => {
    axios
      .request({
        method: "get",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          id: id,
        },
        headers: {
          Authorization:`Bearer ${token}`,
        },
      })
      .then((responses) => {
        const posts = responses.data.posts;
        setMyPosts(posts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  }, []);


  // useEffect(() => {
  //   const token=localStorage.getItem('token')
  //   axios   .get("http://16.170.173.197/users", { headers: { Authorization: `Bearer ${token}` } })
  //     .then(function (response) {
  //       // console.log(response.data.users);

  //       setusers(response.data.users)
       
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });

     
      
  // }, []);


  

  return (
    <div>
     
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <ProfileHeader myinfo={users}></ProfileHeader>
          <Divider
            sx={{ backgroundColor: "rgb(150,150,150)", height: 1.1, marginTop:'15px' }}
          ></Divider>
          <ProfileContent myposts={myposts}></ProfileContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
