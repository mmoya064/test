import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import "./css/p2_faq.css";

class FrFaq extends Component {
  render() {
    return (
      <Router>
        <div className="topBanner">
          <h2 className="topBannerText">LIVRAISON MONDIALE GRATUITE SUR TOUTES LES COMMANDES DE PLUS DE 75$</h2>
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
                  <Link to="/"><li>PAGE D'ACCUEIL</li></Link>
                  <Link to="/portfolio"><li>STYLISTES ET PORTEFEUILLES</li></Link>
                  <Link to="/faq"><li>FAQ</li></Link>
                  <Link to="/services"><li>RÉSERVER UNE PRESTATION</li></Link>
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
            <span>RE-DÉCOUVREZ VOTRE STYLE</span>
          </h1>
        </div>

        <div className="navbar">
          <Link to="/">PAGE D'ACCUEIL</Link>
          <Link to="/portfolio">STYLISTES ET PORTEFEUILLES</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/services">RÉSERVER UNE PRESTATION</Link>
        </div>

        <div className="padding_larger"></div>
        <div className="padding_larger"></div>

        <h2 className="featuredTextTitle">FAQ</h2>

        <div className="padding_larger"></div>

        <div className="container">
          <input id="searchbar" onKeyUp={searchAnimal} type="text" name="search" placeholder="TAPEZ ICI POUR RECHERCHER DES REPONSES" style={{ color: 'rgb(15, 15, 77)' }} />
          <ul id="list">
            <li className="animals">
              <span><b>Q:</b> COMMENT RÉSERVER UN SERVICE?  </span>
              <span style={{ fontSize: '20px' }}><b>R:</b> EN REMPLISSANT LE FORMULAIRE DANS NOTRE ONGLET « RÉSERVER UN SERVICE » !</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> QUELLES SONT VOS HEURES D'OPÉRATIONS? </span>
              <span style={{ fontSize: '20px' }}><b>R:</b> LUNDI-DIMANCHE DE 8H00 À 16H00</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> OÙ PUIS-JE TROUVER PLUS D'INFOS SUR LES STYLISTES ?</span>
              <span style={{ fontSize: '20px' }}><b>R:</b> EN CONSULTANT NOS PAGES "STYLISTES" ET PORTFOLIOS</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> COMBIEN DE STYLISTES Y A-T-IL DANS VOTRE ÉQUIPE?</span>
              <span style={{ fontSize: '20px' }}><b>R:</b> NOUS AVONS ACTUELLEMENT 3 STYLISTES DANS NOTRE ÉQUIPE</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> COMBIEN DE TEMPS DURE UNE CONSULTATION</span>
              <span style={{ fontSize: '20px' }}><b>R:</b> LE TEMPS VARIE EN FONCTION DES BESOINS DU CLIENT, MAIS LES CONSULTATIONS DURENT GÉNÉRALEMENT ENVIRON UNE HEURE!</span>
            </li>
            <li className="animals">
              <span><b>Q:</b> COMMENT PUIS-JE ENTRER EN CONTACT AVEC UN MEMBRE DE L'ÉQUIPE</span>
              <span style={{ fontSize: '20px' }}><b>R:</b> COMMENT PUIS-JE ENTRER EN CONTACT AVEC UN MEMBRE DE L'ÉQUIPE</span> <span style = "font-size: 20px;"><b>R:</b> POUR TOUTE DEMANDE OU PLAINTE, VOUS POUVEZ NOUS CONTACTER PAR EMAIL À newmoon@abc.com OU PAR TÉLÉPHONE (DE 8H00 À 16H00 DU LUNDI AU DIMANCHE) AU 123-555-4567</span>
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

export default FrFaq;
