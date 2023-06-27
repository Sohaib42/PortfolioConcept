import React from "react";
import './Footer.css';
function Footer() {
  return (
    <footer className="flex footer">
        <div className="footer-content">
            <a href="https://www.raison-social.com/mentions-legales">Mentions légales</a>
            <a href="https://www.raison-social.com/conditions-generales-de-vente">Conditions générales de vente</a>
            <a href="https://www.raison-social.com/politique-de-confidentialite">Politique de confidentialité</a>
            <a href="https://www.raison-social.com/cookies">Cookies</a>
        </div>
        <div className="social-footer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
        </div>
    </footer>
  );
}
export default Footer;