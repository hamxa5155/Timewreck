import React from "react";
import vector4 from "../assets/Vector4.png";
import time from "../assets/time.png";
import circle from "../assets/circle.png";
import image4 from "../assets/image4.png";
import Vector5 from "../assets/Vector5.png";
import "./navbar.css";
const Video = () => {
  return (
    <>
      <div style={{ background: "rgba(241, 156, 102, 1)" }}>
        <div>
          <div className="videocloud">
            <img src={vector4} alt="" />
          </div>
          <div className="parentIMageBtn">
            <div className="div_image">
              <img className="videoimg" src={time} alt="" />
            </div>
            <div className="div_btnplay">
              <img className="play" src={circle} alt="" />`
            </div>
          </div>
        </div>
        <div className="videotext">
          When a modern family gets stuck in the time of Henry VIII, they do
          whatever it takes to survive, including trading their knowledge of the
          future in exchange for not getting murdered!
        </div>
        <div className="fortimages">
          <div>
            <img
              style={{
                marginTop: "-25px",
                position: "absolute",
              }}
              src={Vector5}
              alt=""
            />
          </div>
          <div
            style={{
              marginRight: "9%",
            }}>
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
