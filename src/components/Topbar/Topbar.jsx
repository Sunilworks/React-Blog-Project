import "./topbar.css";
import "../../App.css";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
function Topbar() {

  return (
    <>
      <div className="top">
        <span className="font1">The</span>
        <span className="font2">Siren</span>
        {/* Hamburger Menu */}
        <div className="hamburger-menu" >
            <Hamburger />
        </div>
      </div>

      <div className="navbar">
        <div className="topLeft"></div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/"> Home </NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/bollywood">Bollywood</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/technology">Technology</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/hollywood">Hollywood</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/fitness">Fitness</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/food">Food</NavLink>
            </li>
          </ul>
        </div>
        <div className="topRight">
          
        </div>
      </div>

      <div className="ruler"></div>
    </>
  );
}

export default Topbar;
