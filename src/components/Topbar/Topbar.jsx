import "./topbar.css";
import "../../App.css";
import { Link } from "react-router-dom";

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
              <Link to="/"> Home </Link>
            </li>
            <li className="topListItem">
              <Link to="/Bollywood">Bollywood</Link>
            </li>
            <li className="topListItem">
              <Link to="/Technology">Technology</Link>
            </li>
            <li className="topListItem">
              <Link to="/Hollywood">Hollywood</Link>
            </li>
            <li className="topListItem">
              <Link to="/Fitness">Fitness</Link>
            </li>
            <li className="topListItem">
              <Link to="/Food">Food</Link>
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
