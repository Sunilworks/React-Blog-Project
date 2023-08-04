import React from 'react'
import "./footer.css"
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

function Footer() {
  return (
    // <footer>
    <div className='ft'>
      <div className='left'>
        <h4>DISCLAIMER</h4>
        <h4>POLICY</h4>
        <h4>SUPPORT</h4>

      </div>
      <div className="center">
        <p>© 2023 The Siren. All rights reserved.</p>
      </div>
      <div className="right ">
        <h4>FOLLOW US ON</h4>
        <div className="social">
          <BsFacebook />
          <RiInstagramFill />
          <BsTwitter />
          <BsYoutube />
        </div>

      </div>
    </div>
    // </footer>
  )
}

export default Footer




