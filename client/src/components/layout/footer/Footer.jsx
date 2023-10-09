import React from "react";
import logo from "./dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import "./footer.css"; // Import your CSS file here

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container1">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <img className="footimg" src={logo} alt="Footer Logo" />
//           </div>
//           <div className="footer-links">
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Services</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </div>
//           <div className="social-icons">
//             <a href="#" className="social-icon">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMapMarkerAlt,
//   faPhone,
//   faEnvelopeOpen,
//   faTelegramPlane,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faGooglePlusG,
// } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"; // Import your CSS file here

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="containers">
        {/* <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>MIT-World Peace University, Paud Road, Pune</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 2134567891</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>konnect@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            {" "}
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={logo} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don't miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="containers">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{" "}
                  <a href="home.html">Konnect</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="www.google.com">Home</a>
                  </li>
                  <li>
                    <a href="www.google.com">Terms</a>
                  </li>
                  <li>
                    <a href="www.google.com">Privacy</a>
                  </li>
                  <li>
                    <a href="www.google.com">Policy</a>
                  </li>
                  <li>
                    <a href="www.google.com">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
