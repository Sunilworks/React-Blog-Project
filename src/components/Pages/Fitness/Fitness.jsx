import React, { useContext } from "react";
import { Store } from "../../Data/DataStore";
import { useNavigate } from "react-router-dom";
import "../Common/common.css"

function Fitness() {
  return (
    <div className="home">
      <Article />
      <Posts />
      <Ads />
    </div>
  )
}

export default Fitness

function Article() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);

  let navigate = useNavigate();
  return (
    <div className='articleB'>

      <div>
        <span className="heading">Fitness</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesvertical">
        {latestData
          .filter((item) => item.cat === "FArticle")
          .map((data) => {
            return (
              <>
                <hr className='hr' />
                <div className="art1">

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

              </>
            );
          })}
      </div>

      <button onClick={() => navigate(-1)}>Back</button>

    </div>
  )
}

function Posts() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);
  return (

    <div className="postB">
      <div>
        <span className="heading">Top Posts</span>
        <div className="ruler1"></div>
      </div>

      <div className="postsverticalsmall">
        {latestData
          .filter((item) => item.cat === "FPost")
          .map((data) => {
            return (

              <div className="post1">
                <img src={data.image} alt="Technology" />
                <a href="https://techcrunch.com/2023/07/27/a-high-tech-third-eye-for-neurosurgeons-proprio-could-change-the-or-forever/">
                  {data.heading}
                </a>
                <figcaption>
                  <br />
                  <br />
                  {/* <p>{data.description}</p> */}
                  <span className="bold">{data.footer}</span>
                  <span> / {date}</span>
                </figcaption>
              </div>
            );
          })}
      </div>
    </div>
  )
}

function Ads() {
  return (
    <div className='ad-boxB'>
      ADVERTISEMENT
    </div>

  )
}
