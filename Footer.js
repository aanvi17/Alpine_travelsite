import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 footer-content text-white">
              <h3>Alpins</h3>
              <p>
                Somewhere between the bottom of the climb and the summit is the
                answer to the mystery why we climb.
              </p>
            </div>
            <div className="col-lg-4 footer-content text-white">
              <h3>Contacts</h3>
              <ul className="icon-list icon-line">
                <li>San Pellegrino, BG, Italy</li>
                <li>hello@example.com</li>
                <li>02 123 333 444</li>
              </ul>
            </div>
            <div className="col-lg-4 footer-content text-white">
              <div className="icon-links icon-social icon-links-grid social-colors media-icons">
                <a className="facebook" href="www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className="twitter" href="www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="instagram" href="www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="google" href="www.google.com">
                <FontAwesomeIcon icon={faGoogle} />

                </a>
              </div>
              <p>
                Subscribe to our newsletter or follow us on the social channels
                to stay tuned.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container text-white">
            <span>
              © 2019 Alpins - Hiking & Outdoor Template Handmade by
              <a
                href="https://schiocco.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                schiocco.com
              </a>
              .
            </span>
            <span className="foot text-white">
              <a href="contacts.html">Contact us</a> 
              <a href="www.google.com">Privacy policy</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
