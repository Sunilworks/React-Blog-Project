import Home from "../Pages/Home/Home";
import Bollywood from "../Pages/Bollywood/Bollywood";
import Technology from "../Pages/Technology/Technology";
import Hollywood from "../Pages/Hollywood/Hollywood";
import Fitness from "../Pages/Fitness/Fitness";
import Food from "../Pages/Food/Food";
import Error from "../Pages/Error/Error";

import { Route, Routes } from "react-router-dom";

import React from "react";
import Description from "../Pages/Common/Description";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Hollywood" element={<Hollywood />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Routing;
