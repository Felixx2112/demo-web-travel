import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to service our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="You Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        {/* footer-link-wrapper */}
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About US</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Testimonial</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact US</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        {/* footer-link-wrapper */}
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Video</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-artstation"></i>
            </Link>
          </div>
          <small className="website-rights">TRVL © 2021</small>
          <div className="social-icons">
            {/* Link */}
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              arial-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              arial-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link linkedin"
              target="_blank"
              arial-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link github"
              target="_blank"
              arial-label="Github"
            >
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
