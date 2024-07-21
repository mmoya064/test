import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./css/p2_faq.css";

class Faq extends Component {
  render() {
    return (
      <Router>
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

          <div className="icons">
            <button className="recentLooksButton" style={{ width: '200px' }} onClick={() => window.location.href = 'FR-faq.html'}>FRANCAIS</button>
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
        <div className="padding_larger"></div>

        <h2 className="featuredTextTitle">FAQ</h2>

        <div className="padding_larger"></div>

        <div className="container">
          <input id="searchbar" onKeyUp={searchAnimal} type="text" name="search" placeholder="TYPE HERE TO SEARCH FOR ANSWERS" style={{ color: 'rgb(15, 15, 77)' }} />
          <ul id="list">
            <li className="animals">
              <span><b>Q:</b> HOW DO I BOOK A SERVICE? </span>
              <span style={{ fontSize: '20px' }}><b>A:</b> BY FILLING OUT THE FORM IN OUR "BOOK A SERVICE" TAB!</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> WHAT ARE YOUR HOURS OF OPERATION? </span>
              <span style={{ fontSize: '20px' }}><b>A:</b> MONDAY-SUNDAY FROM 8:00AM-4:00PM</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> WHERE CAN I FIND MORE INFO ON THE STYLISTS?</span>
              <span style={{ fontSize: '20px' }}><b>A:</b> BY CHECKING OUT OUR "STYLISTS" AND PORTFOLIOS" PAGE</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> HOW MANY STYLISTS ARE ON YOUR TEAM?</span>
              <span style={{ fontSize: '20px' }}><b>A:</b> WE CURRENTLY HAVE 3 STYLISTS ON OUR TEAM</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> HOW LONG DOES A CONSULTATION TAKE?</span>
              <span style={{ fontSize: '20px' }}><b>A:</b> TIMING VARIES BASED ON THE CLIENT'S NEEDS, THOUGH CONSULTATIONS ARE USUALLY ABOUT AN HOUR LONG!</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> HOW DO I GET IN CONTACT WITH A TEAM MEMBER?</span>
              <span style={{ fontSize: '20px' }}><b>A:</b> FOR ANY INQUIRIES OR COMPLAINTS, YOU CAN CONTACT US BY EMAIL AT newmoon@abc.com, OR BY PHONE (FROM 8AM-4PM MONDAY-SUNDAY) AT 123-555-4567</span>
            </li>
            <div className="padding_larger"></div>
            <div className="padding_larger"></div>
          </ul>
        </div>

        <Routes>
          <Route path="/faq" element={<P2Faq />} />
          <Route path="/portfolio" element={<P2Portfolio />} />
          <Route path="/confirmation" element={<P2Confirmation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function searchAnimal() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.getElementsByClassName('animals');

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

export default Faq;