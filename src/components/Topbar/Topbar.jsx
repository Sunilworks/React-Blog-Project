import "./topbar.css";
import "../../App.css";
import { NavLink } from "react-router-dom";

function Topbar() {
  return (
    <>
      <div className="top">
        <span className="font1">The</span>
        <span className="font2">Siren</span>
      </div>

      <div className="navbar">
        <div className="topLeft"></div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/"> Home </NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/Bollywood">Bollywood</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/Technology">Technology</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/Hollywood">Hollywood</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/Fitness">Fitness</NavLink>
            </li>
            <li className="topListItem">
              <NavLink style={({isActive}) =>({color: isActive ? "grey" : "black"})} to="/Food">Food</NavLink>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <span class="material-symbols-outlined">Person</span>
        </div>
      </div>

      <div className="ruler"></div>
    </>
  );
}

export default Topbar;
