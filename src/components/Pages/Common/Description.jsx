import "./description.css";
import clap from "../../Images/rythm.svg";
import share from "../../Images/share.svg";
import profile from "../../Images/Mask Group 16.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Description() {
  const d = new Date();
  let date = d.toDateString();

  let navigate = useNavigate();
  return (
    <>
      <div className="Dnav">
        <div className="logo">
          <span className="logo1">The</span>
          <span className="logo2">Siren</span>
        </div>
        <div class="get-started">Get Started</div>
      </div>

      <div className="maincontent">
        <div className="leftcontent">
          <div className="like">
            <img src={clap} alt="clap icon" />
            <span className="like-count">9.8K</span>
          </div>
          <div className="share">
            <img src={share} alt="clap icon" />
            <span className="share-text">Share this article</span>
          </div>
        </div>

        <div className="centercontent">
          <h2 class="contentheading">
            Ameesha Patel Reveals Drawback Of Gadar’s Monstrous Success: “…All
            Our Other Work Failed In Comparison To That”
          </h2>
          <div className="profile">
            <div className="avatar">
              <img src={profile} alt="profile" />
              <div class="avatar-info">
                <span class="author">Sunil Km</span>
                <span class="date">{date} - 10min read</span>
              </div>
            </div>
            <div className="social-icon">
              <BsFacebook />
              <RiInstagramFill />
              <BsTwitter />
              <BsYoutube />
            </div>
          </div>

          <img
            className="img"
            src="https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Gadar-2.jpeg"
            alt="gadar 2"
          />
          <p className="des">
            Actress Ameesha Patel made her Bollywood debut with the blockbuster
            ‘Kaho Naa… Pyaar Hai in 2000, and a year later, she was seen in the
            mega-blockbuster‘Gadar: Ek Prem Katha’ in 2001, which she agrees was
            a game changer for her career but added that it had a flipside
            too.“I would definitely agree that Gadar 1 was a game-changer for my
            career. How can it not be? How can one of India’s most iconic films
            not change a person’s career graph,” Ameesha told IANS.
          </p>

          <div className="profile">
            <div className="avatar">
              <img src={profile} alt="profile" />
              <div class="avatar-info">
                <b>Written by :</b>
                <span class="author">Sunil Km</span>
                <span class="date">{date}</span>
              </div>
            </div>
          </div>

          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </>
  );
}

export default Description;
