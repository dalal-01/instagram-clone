import React from "react";
import Grid from "@mui/material/Grid";
import Suggestion from "./Suggestion.jsx";
import one from "../assets/Avatars/boy.png";
import two from "../assets/Avatars/cock-man.png";
import three from "../assets/Avatars/man.png";
import four from "../assets/Avatars/nurse.png";
import five from "../assets/Avatars/shop-assistant.png";

const SuggestionArray = [
  { id: 1, img: one, name: "Ward Daraghmeh", disc: "Followed by moath" },
  { id: 2, img: two, name: "Batool Azzam", disc: "Followed by anwar" },
  { id: 3, img: three, name: "Omar Yasin", disc: "New to Instagram" },
  { id: 4, img: four, name: "Anwar Ghannam", disc: "Followed by hala" },
  { id: 5, img: five, name: "Jenan Kmail", disc: "New to Instagram" },
];

function Suggestions() {
  return (
    <div>
      <Suggestion name="dalalzakarneh" disc="Dalal Žaķařńeh"></Suggestion>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <span
          style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "10px",color:"rgb(180,180,180)" }}
        >
          Suggested for youu
        </span>

        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "10px",
            marginLeft: "7px",
          }}
        >
          
See All
        </span>
      </Grid>
      {SuggestionArray.map((sug) => {
        return <Suggestion name={sug.name} disc={sug.disc}></Suggestion>;
      })}
      <div
        style={{ fontFamily: " Poppins", fontSize: "8px", fontWeight: "400", color:"rgb(140,140,140)",textAlign:'left'}}
      >
        About . Help . Press . API . Jobs . Privacy . Terms. Locations .
        Language . Meta Verified
      </div>
      <div
        style={{
          fontFamily: " Poppins",
          fontSize: "10px",
          fontWeight: "400",
          margin: "15px 0px" ,
          textAlign: "left",
          color:"rgb(140,140,140)"
        }}
      >
        © 2023 INSTAGRAM FROM META
      </div>
    </div>
  );
}

export default Suggestions;
