import React from 'react';
import './Navigation.css';
function Navigation() {
  return (
    <nav className="flex navigation">
        <div className="logo">
          <a href="https://cdnlogo.com/logo/random_55225.html"><img width="48" height="48"  src="https://cdn.cdnlogo.com/logos/r/44/random.svg"></img></a>        </div>
        <div className="navigation-content">
            <a className='strokeHover' href="https://www.raison-social.com/qui-sommes-nous">Qui sommes-nous ?</a>
            <a href="https://www.raison-social.com/actualites">Actualités</a>
            <a href="https://www.raison-social.com/formation">Formation</a>
            <a href="https://www.raison-social.com/consulting">Consulting</a>
            <a href="https://www.raison-social.com/temoignages">Témoignages</a>
            <a href="https://www.raison-social.com/contact">Contact</a>
            <a href="/login">Connexion</a>
        </div>
        <div className="social-navigation">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
        </div> 
    </nav>

  );
}

export default Navigation;
