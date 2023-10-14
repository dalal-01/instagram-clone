import "./App.css";
import Explore from "../src/component/Explore/Explore.jsx";
import Home from "../src/component/Home/Home.jsx";
import Messages from "../src/component/Messages/Messages.jsx";
import Profile from "../src/component/Profile/Profile.jsx";
import CreatePost from "../src/component/CreatePost/CreatePost.jsx";

import Grid from "@mui/material/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/Sginup/Signup.jsx";
import Signin from "./component/Signin/Signin.jsx";
import ProtectedScreens from "./component/ProtectedScreen/ProtectedScreens.jsx";
import ProtectedAuth from "./component/ProtectedScreen/ProtectedAuth.jsx";
import WithNav from "./component/ProtectedScreen/WithNav.jsx";
import WithoutNav from "./component/ProtectedScreen/WithoutNav.jsx";
import { useState } from "react";
import { NoFood } from "@mui/icons-material";
import NoFound from "./component/NoFound.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Grid container>
          <Routes>
            <Route element={<WithoutNav></WithoutNav>}>
              <Route
                path="/signup"
                element={
                  <ProtectedAuth>
                    <Signup></Signup>
                  </ProtectedAuth>
                }
              />
              <Route
                path="/"
                element={
                  <ProtectedAuth>
                    <Signin></Signin>
                  </ProtectedAuth>
                }
              />
            </Route>
            <Route element={<WithNav></WithNav>}>
              <Route
                path="/home"
                element={
                  <ProtectedScreens>
                    <Home></Home>
                  </ProtectedScreens>
                }
              />
              <Route
                path="/messages"
                element={
                  <ProtectedScreens>
                    <Messages></Messages>
                  </ProtectedScreens>
                }
              />
              <Route
                path="/explore"
                element={
                  <ProtectedScreens>
                    <Explore></Explore>
                  </ProtectedScreens>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedScreens>
                    <Profile></Profile>
                  </ProtectedScreens>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedScreens>
                    <Profile></Profile>
                  </ProtectedScreens>
                }
              />
              <Route
                path="/createpost"
                element={
                  <ProtectedScreens>
                    <CreatePost />
                  </ProtectedScreens>
                }
              />
               <Route
                path="*"
                element={
                  <NoFound></NoFound>
                }
              />
            </Route>
           
            
          </Routes>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
