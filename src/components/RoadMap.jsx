import React from "react";
import vectoroad from "../assets/vectoroad.png";
import Vector2 from "../assets/Vector2.png";
import Vector6 from "../assets/Vector6.png";
import Vector7 from "../assets/Vector7.png";
import Vector8 from "../assets/Vector8.png";
import Vector9 from "../assets/Vector9.png";
import Roadmap from "../assets/Roadmap.png";

import "./Road.css";
const Road = () => {
  return (
    <div style={{ background: " rgba(235, 201, 155, 1)" }}>
      <h1 className="roadmap">ROADMAP</h1>
      <div className="cloudRoad">
        <img src={vectoroad} alt="" />
      </div>
      <div className="parentthreecloud">
        <div className="cl1">
          <img src={Vector6} alt="" />
        </div>
        <div className="cl2">
          <img src={Vector7} alt="" />
        </div>
        <div className="cl3">
          <img src={Vector8} alt="" />
        </div>
      </div>
      <div className="road">
        <img src={Roadmap} alt="" />
      </div>
      <div>
        <div className="round">
          <div className="one">1</div>
        </div>
        <div className="mint">mint</div>
        <div className="minttext">
          The initial mint sale will directly fund production of Timewrecked
        </div>
        <div>
          <img className="cloudtext" src={Vector2} alt="" />
        </div>
      </div>
      <div>
        <div className="round2">
          <div className="two">2</div>
        </div>
        <div className="mint2">In server events</div>
        <div className="minttext2">
          We have a list of awesome rewards coming to our server and community.
          To find out more about these events you can click the button below
          (the link will lead to our discord)
        </div>
        <div>
          <img className="cloudtext" src={Vector2} alt="" />
        </div>
      </div>
      <div>
        <div className="round3">
          <div className="three">3</div>
        </div>
        <div className="mint3">Holder rewards</div>
        <div className="minttext3">
          Holding your Timewrecked NFT will give you access to a variety of
          rewards including a Whitelist spot for all future Nexthollywood drops
        </div>
        <div>
          <img className="cloudtext" src={Vector2} alt="" />
        </div>
      </div>
      <div>
        <div className="round4">
          <div className="four">4</div>
        </div>
        <div className="mint4">Airdrops</div>
        <div className="minttext4">
          we reward OG supporters by doing random airdrops to our longtime
          Timewrecked NFT holders
        </div>
        <div>
          <img className="cloudtext" src={Vector2} alt="" />
        </div>
      </div>

      <div>
        <div className="round5">
          <div className="five">5</div>
        </div>
        <div className="mint5">Partnership </div>
        <div className="minttext5">
          When purchasing a Timewrecked NFT you become a partner of
          NextHollywood. Click the link below to to see the roadmap for
          NextHollywood
        </div>
        <div>
          <img className="cloudtext" src={Vector2} alt="" />
        </div>
        <div className="aboutdiv">
          <button className="buttroad">
            {" "}
            <div className="about">About</div>
          </button>
        </div>
        <div className="castle">
          <img src={Vector9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Road;
