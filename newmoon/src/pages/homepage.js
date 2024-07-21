import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./css/homepage.css";

class homepage extends Component {
  render() {
    return (
        <Router>
        <div>
          <div className="topBanner">
            <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
          </div>

          <div className="row">
            <div className="col">
              <nav role="navigation">
                <div id="menuToggle">
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                    <Link to="/"><li>HOMEPAGE</li></Link>
                    <Link to="/portfolio"><li>STYLISTS & PORTFOLIOS</li></Link>
                    <Link to="/faq"><li>FAQ</li></Link>
                    <Link to="/services"><li>BOOK A SERVICE</li></Link>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="nine">
            <h1>NEW MOON
              <div className="nineImage">
                <img className="logo" src="images/N.png" alt="logo" />
              </div>
              <span>RE-DISCOVER YOUR STYLE</span>
            </h1>
          </div>

          <div className="navbar">
            <Link to="/">HOMEPAGE</Link>
            <Link to="/portfolio">STYLISTS & PORTFOLIOS</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/services">BOOK A SERVICE</Link>
          </div>

          <div className="padding_larger"></div>

          <h2 className="featuredTextTitle">HOMEPAGE</h2>

          <div className="frontPhoto">
            <img src="images/frontImage.png" alt="front image" style={{ width: "100%" }} />
            <h2 className="frontSlogan">RE-DISCOVER YOUR STYLE</h2>
            <button className="btn" onClick={() => window.location.href = 'p2_services.html'}>BOOK A SERVICE</button>
          </div>

          <h2 className="featuredTextTitle">FEATURED</h2>
          <div className="featuredBox">
            <h3 className="featuredTextSubtitle">DON'T KNOW WHERE TO START?</h3>
            <h3 className="featuredTextSubtitle" style={{ fontSize: "20px", marginTop: "30px" }}>TAKE OUR QUIZ: FIND YOUR STYLE + YOUR BEST STYLIST MATCH!</h3>
            <div style={{ textAlign: "center", paddingTop: "30px", marginBottom: "0px" }}>
              <button className="featuredQuizButton" onClick={() => window.location.href = 'http://localhost:3000/Users/mare3/Documents/GitHub/final_copy_seg3125_project2/index.html'}> START QUIZ</button>
            </div>
          </div>

          <div className="padding_larger"></div>
          <div className="padding_larger"></div>

          <h2 className="featuredTextTitle">RECENT LOOKS</h2>

          <div className="padding_larger"></div>
          
          <div style={{ width: "90%", textAlign: "center", margin: "auto" }}>
            <div className="card-group" style={{ textAlign: "center", margin: "auto" }}>
              <div className="card" style={{ padding: "25px", textAlign: "center", margin: "auto" }}>
                <img src="images/hs2.jpeg" className="card-img-top" alt="stylist 1" style={{ objectFit: "fill", height: "430px", width: "80%", textAlign: "center", margin: "auto" }} />
                <div className="padding_smaller"></div>
                <div className="card-body">
                  <h5 className="recentLooksCards">STYLIST: ALLY</h5>
                </div>
                <button className="recentLooksButton">PORTFOLIO</button>
                <div className="padding_larger"></div>
              </div>

              <div className="card" style={{ padding: "25px" }}>
                <img src="images/hs1.jpeg" className="card-img-top" alt="stylist 2" style={{ objectFit: "fill", height: "430px", width: "80%", textAlign: "center", margin: "auto" }} />
                <div className="padding_smaller"></div>
                <div className="card-body" style={{ width: "100%" }}>
                  <h5 className="recentLooksCards">STYLIST: SOPH</h5>
                </div>
                <button className="recentLooksButton">PORTFOLIO</button>
                <div className="padding_larger"></div>
              </div>

              <div className="card" style={{ padding: "25px" }}>
                <img src="images/h3.jpeg" className="card-img-top" alt="stylist 3" style={{ objectFit: "fill", height: "430px", width: "80%", textAlign: "center", margin: "auto" }} />
                <div className="padding_smaller"></div>
                <div className="card-body">
                  <h5 className="recentLooksCards">STYLIST: JAKE</h5>
                </div>
                <button className="recentLooksButton">PORTFOLIO</button>
                <div className="padding_larger"></div>
              </div>
            </div>
          </div>

          <div className="padding_larger"></div>
          <div className="padding_larger"></div>
          <div className="padding_larger"></div>
          <div className="padding_larger"></div>

          <h2 className="featuredTextTitle">CONTACT INFO</h2>
          <h3 className="featuredTextSubtitle">CONTACT US FOR FURTHER INQUIRIES</h3>

          <div className="featuredBox" style={{ height: "450px" }}>
            <h3 className="featuredTextSubtitle">EMAIL: newmoon@abc.com</h3>
            <h3 className="featuredTextSubtitle">PHONE NUMBER: 123-555-4567</h3>
            <h3 className="featuredTextSubtitle">ADDRESS: 123 Moon Road</h3>
          </div>

          <div className="padding_larger"></div>
          <div className="padding_larger"></div>
        </div>

        <Routes>
          <Route path="/faq" element={<Faq />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

function Faq() {
  return <h2>FAQ</h2>;
}

function Portfolio() {
  return <h2>STYLISTS & PORTFOLIOS</h2>;
}

function Services() {
  return <h2>BOOK A SERVICE</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

export default Homepage;
