import React, { useEffect } from "react";
import "./footer.css";
import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { RiHome2Fill, RiInstagramFill, RiMailFill, RiPhoneLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

function Footer() {
  const Navi = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
    });

  return (
    // <footer>
    <div className="ft">
      <div className="Upper">
        <span>GET CONNECTED WITH US ON SOCIAL NETWORKS:</span>
        <div className="social">
          <BsFacebook />
          <BsTwitter />
          <BsGoogle />
          <RiInstagramFill />
          <BsYoutube />
          <BsLinkedin />
          <NavLink style={({isActive}) =>({color: isActive ? "white" : "white"})} to="https://github.com/Sunilworks">
          <BsGithub />
          </NavLink>
        </div>
      </div>

      <hr />

      <div className="Mid">
        <div className="lft">
          <span className="ft1">The</span>
          <span className="ft2">Siren</span>
          <div className="ds">
            <p>
              This is a blog website which covers wide variety of topics.Hope
              you have fun scrolling it .....!
            </p>
          </div>
        </div>

        <div className="center1">
          <h4>RESOURCES</h4>
          <p className="res" onClick={() => Navi("/bollywood")}>
            Bollywood
          </p>
          <p className="res" onClick={() => Navi("/technology")}>
            Technology
          </p>
          <p className="res" onClick={() => Navi("/hollywood")}>
            Hollywood
          </p>
          <p className="res" onClick={() => Navi("/fitness")}>
            Fitness
          </p>
          <p className="res" onClick={() => Navi("/food")}>
            Food
          </p>
        </div>
        <div className="center2">
          <h4>USEFUL LINKS</h4>
          <p className="res">Disclaimer</p>
          <p className="res">Policies</p>
          <p className="res">FAQ</p>
          <p className="res">Help</p>
        </div>
        <div className="right ">
          <h4>CONTACT US</h4>
          <p><RiHome2Fill/> NOIDA, UP - 201310</p>
          <p><RiMailFill/> info@Thesiren.com</p>
          <p><RiPhoneLine />+91 9876543211</p>
        </div>
      </div>

      <div className="bottom">
        <p>© 2023 The Siren. All rights reserved.</p>
      </div>
    </div>
    // </footer>
  );
}

export default Footer;

// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='#!' className='me-4 text-reset'>
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href='#!' className='me-4 text-reset'>
//             <MDBIcon fab icon="twitter" />
//           </a>
//           <a href='#!' className='me-4 text-reset'>
//             <MDBIcon fab icon="google" />
//           </a>
//           <a href='#!' className='me-4 text-reset'>
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href='#!' className='me-4 text-reset'>
//             <MDBIcon fab icon="linkedin" />
//           </a>
//           <a href='#!' className='me-4 text-reset'>
//             <MDBIcon fab icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className=''>
//         <MDBContainer className='text-center text-md-start mt-5'>
//           <MDBRow className='mt-3'>
//             <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <MDBIcon icon="gem" className="me-3" />
//                 Company name
//               </h6>
//               <p>
//                 Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
//                 consectetur adipisicing elit.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Laravel
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 New York, NY 10012, US
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2021 Copyright:
//         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
