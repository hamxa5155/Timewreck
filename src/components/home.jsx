import React from "react";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import group from "../assets/Group.png";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <>
      <Box
        className="box_mainHome"
        sx={
          {
            //   position: "relative",
          }
        }>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} lg={6}>
            <div>
              <div>
                <div className="cloud">
                  <img src={vector1} alt="" />
                </div>
              </div>
              <div>
                <div className="tex">We're gonna make a TV show</div>
              </div>
              <div>
                <div className="para">
                  Directly support your favorite creators by helping bring this
                  animated series to life. Buy a digital collectible, and help
                  the show get made.
                </div>
              </div>
              <div>
                <button className="butt">
                  {" "}
                  <div className="txt">join our server</div>
                </button>
              </div>
              <div className="cloud2">
                <img src={vector3} alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <div
              className="test-container"
              //   style={{ border: "1px solid black" }}
            >
              <div className="picture-1">
                <img src={vector2} alt="" />
              </div>
              <div className="picture-2">
                <img src={group} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
