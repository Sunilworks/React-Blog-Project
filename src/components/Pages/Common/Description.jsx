import React,{useContext} from 'react'
import "./description.css";
import clap from "../../Images/rythm.svg";
import share from "../../Images/share.svg";
import profile from "../../Images/Mask Group 16.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Store } from "../../Data/DataStore";

function Description() {

  const {id} = useParams()
  console.log(id);

  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);

  let navigate = useNavigate();
  return (
    <>
      <div className="Dnav">
          <Link to="/">
        <div className="logo">
          <span className="logo1">The</span>
          <span className="logo2">Siren</span>
        </div>
          </Link>
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
          <h1 class="contentheading">
            Ameesha Patel Reveals Drawback Of Gadar’s Monstrous Success: “…All
            Our Other Work Failed In Comparison To That”
          </h1>
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

      <div className="morecontent">
        <div>
      <span className="heading">More Stories From Siren</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesHorizontal">
        {latestData
          .filter((item) => item.cat === "Story")
          .map((data) => {
            return (
              <div className="lat1">
                <img src={data.image} alt="Technology" />
                <figcaption>
                  <a href="https://techcrunch.com/2023/07/27/a-high-tech-third-eye-for-neurosurgeons-proprio-could-change-the-or-forever/">
                    {data.heading}
                  </a>
                  <p>{data.description}</p>
                  <span className="bold">{data.footer}</span>
                  <span> / {date}</span>
                </figcaption>
              </div>
            );
          })}
      </div>
      </div>
    </>
  );
}

export default Description;
