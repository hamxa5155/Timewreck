import React from "react";
import "./navbar.css";

import { Nav, Item, Link, Button } from "react-bootstrap";
const Navbar = () => {
  const [valueNav, setValueNav] = React.useState(false);

  const handleValue = (val) => {
    console.log(val);
    setValueNav(val);
  };
  return (
    <>
      <>
        <div>
          {" "}
          <Nav className="navbar" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                style={{ position: "relative" }}
                className="navlink"
                href="/home">
                {/* Home */}
                <div>Home</div>
              </Nav.Link>
              <div className="line"></div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">Leaderboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">Creators / Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">Visual Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">Characters</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">Episodes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navlink">Why Collection?</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </>
    </>
  );
};

export default Navbar;
