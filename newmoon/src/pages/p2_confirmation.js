import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./css/p2_confirmation.css";

class P2_confirmation extends Component {
  render() {
    return (
        <div>
        <div className="topBanner">
          <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
        </div>
  
        <div className='row'>
          <div className="col">
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <li><Link to="/">HOMEPAGE</Link></li>
                  <li><Link to="/portfolio">STYLISTS & PORTFOLIOS</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/services">BOOK A SERVICE</Link></li>
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
        <h2 className="featuredTextTitle">ORDER CONFIRMATION</h2>
        <div className="padding_larger"></div>
  
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <img src="images/bookingConfirmation.png" alt="check mark" style={{ width: '80px', height: '80px' }} />
        </div>
  
        <div className="padding_larger"></div>
        <h2 className="featuredTextSubtitle" style={{ margin: 'auto', textAlign: 'center', fontSize: '30px' }}>YOUR ORDER HAS BEEN CONFIRMED.</h2>
  
        <div className="padding_larger"></div>
        <div className="padding_larger"></div>
  
        <h2 className="featuredTextSubtitle" style={{ margin: 'auto', textAlign: 'center', fontSize: '30px' }}>CHECK YOUR EMAIL FOR A CONFIRMATION EMAIL.</h2>
  
        <div className="padding_larger"></div>
        <div className="padding_larger"></div>
      </div>
    );
  }
}
export default P2_confirmation;