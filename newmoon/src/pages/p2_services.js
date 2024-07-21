import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./css/p2_services.css";

class P2_services extends Component {
  render() {
    return (
        <div>
            {/* Top Banner */}
            <div className="topBanner">
                <h2 className="topBannerText">FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $75</h2>
            </div>

            {/* Hamburger Menu and Icons */}
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
                        <li><Link to="/p2_portfolio">STYLISTS & PORTFOLIOS</Link></li>
                        <li><Link to="/p2_faq">FAQ</Link></li>
                        <li><Link to="/p2_services">BOOK A SERVICE</Link></li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>

            {/* Main Title */}
            <div className="nine">
                <h1>NEW MOON
                <div className="nineImage">
                    <img className="logo" src="images/N.png" alt="logo" />
                </div>
                <span>RE-DISCOVER YOUR STYLE</span>
                </h1>
            </div>

            {/* Nav Bar */}
            <div className="navbar">
                <Link to="/">HOMEPAGE</Link>
                <Link to="/p2_portfolio">STYLISTS & PORTFOLIOS</Link>
                <Link to="/p2_faq">FAQ</Link>
                <Link to="/p2_services">BOOK A SERVICE</Link>
            </div>

            {/* Services Section */}
            <div className="padding_larger"></div>
            <div className="padding_larger"></div>
            <h2 className="featuredTextTitle">BOOK A SERVICE</h2>
            <div className="padding_larger"></div>
            <div className="padding_larger"></div>

            {/* Service Cards */}
            <div style={{ width: '90%', textAlign: 'center', margin: 'auto' }}>
                <div className="card-group">
                {/* Replace with your service cards JSX */}
                </div>
            </div>

            <div className="padding_larger"></div>
            <div className="padding_larger"></div>

            {/* Select a Stylist Section */}
            <div className="serviceTitle">SELECT A STYLIST: </div>
            <div className="padding_larger"></div>
            <div className="serviceSubtitle" style={{ marginLeft: '80px' }}>SELECT ONLY 1 </div>
            <div className="padding_smaller"></div>

            {/* Stylist Cards */}
            <div style={{ width: '90%', textAlign: 'center', margin: 'auto' }}>
                <div className="card-group">
                {/* Replace with your stylist cards JSX */}
                </div>
            </div>

            <div className="padding_larger"></div>
            <div className="padding_larger"></div>

            {/* Personal Information Section */}
            <div className="serviceTitle">PERSONAL INFORMATION: </div>
            <div className="padding_larger"></div>
            <div className="serviceSubtitle" style={{ marginLeft: '80px' }}>FILL OUT ALL SECTIONS </div>
            <div className="padding_smaller"></div>

            {/* Personal Information Form */}
            <div className="card" style={{ padding: '25px', marginLeft: '70px', marginRight: '70px' }}>
                {/* Replace with your personal information form JSX */}
            </div>

            <div className="padding_larger"></div>
            <div className="padding_larger"></div>

            {/* Consultation Date Section */}
            <div className="serviceTitle">CONSULTATION DATE: </div>
            <div className="padding_larger"></div>
            <div className="serviceSubtitle" style={{ marginLeft: '80px' }}>FILL OUT ALL SECTIONS </div>
            <div className="padding_smaller"></div>

            {/* Consultation Date Form */}
            <div className="card" style={{ padding: '25px', marginLeft: '70px', marginRight: '70px' }}>
                {/* Replace with your consultation date form JSX */}
            </div>

            <div className="padding_larger"></div>
            <div className="padding_larger"></div>

            {/* Confirm Selection Section */}
            <div className="serviceTitle">CONFIRM SELECTION: </div>
            <div className="padding_larger"></div>
            <div className="padding_larger"></div>

            {/* Confirm Button */}
            <div style={{ textAlign: 'center', margin: 'auto' }}>
                <button className="bookingConfirmationButton" onClick={() => window.location.href = 'p2_confirmation.html'}>CONFIRM & BOOK</button>
            </div>

            <div className="padding_larger"></div>
            <div className="padding_larger"></div>
    </div>

    );
  }
}
export default P2_services;