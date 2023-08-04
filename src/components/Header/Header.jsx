import React from "react";
import "./Header.css";
import { useState } from "react";

const imageSlide = [
  {
    url: "https://stat4.bollywoodhungama.in/wp-content/uploads/2018/05/Shershaah-4.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/11/04/05/08/fitness-and-health-5711489_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
  },
];

function Header() {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "600px",
    width: "990px",

  };

  const goToNext = (currentState) =>{
    console.log(currentState);
    setCurrentState(currentState);
  }

  return (
    <div className="container">
      <div style={bgImageStyle}>
        <div className="colousel">
            {
            
                imageSlide.map((imageSlider,currentState) => (
                    <span key={currentState} onClick={() => goToNext(currentState)}></span>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Header;
