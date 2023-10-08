import "./App.css";
import Explore from '../src/component/Explore/Explore.jsx'
 import Home from "../src/component/Home/Home.jsx";
import Messages from "../src/component/Messages/Messages.jsx";
import Profile from "../src/component/Profile/Profile.jsx";
import Sidebar from "../src/component/Sidebar.jsx";
import CreatePost from "../src/component/CreatePost/CreatePost.jsx";

import Grid from "@mui/material/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/Sginup/Signup.jsx";
import Signin from "./component/Signin/Signin.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        {/* <Signin></Signin> */}
        <Signup></Signup>
        
        {/* <Grid container>
          <Grid item xs={2.5}>
            <Sidebar></Sidebar>
          </Grid>

          <Grid item xs={9}>

            <Routes>

              <Route path="/" element={<Home></Home>} />
              <Route path="/messages" element={<Messages></Messages>} />
              <Route path="/explore" element={<Explore></Explore>} />
              <Route path="/profile" element={<Profile></Profile>} />
              <Route path="/profile" element={<Profile></Profile>} />
              <Route path="/createpost" element={<CreatePost></CreatePost>} />


            </Routes>
          </Grid>
        </Grid> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
