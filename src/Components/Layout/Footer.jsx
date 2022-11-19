import React from "react";
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGoogle, BsYoutube, BsApple, BsPaypal, BsDiscord, BsTelegram, BsFillChatDotsFill, BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className="footer-sec">
        <div className="container">
          <div className="row row1">
            <div className="col-md-2">
              <h4>App</h4>
              <p>Buy and Sell</p>
              <p>Crypto Earn</p>
              <p>Crypto Credit</p>
              <p>Crypto.com Pay</p>
            </div>
            <div className="col-md-2">
              <h4>Exchange</h4>
              <p>Exchange Home</p>
              <p>Margin Trading</p>
              <p>Derivatives Trading</p>
              <p>The Syndicate</p>
              <p>Supercharger</p>
              <p>Trading Arena</p>
              <p>Commerce</p>
            </div>
            <div className="col-md-2">
              <h4>Blockchain</h4>
              <p>Crypto.org Chain</p>
            </div>
            <div className="col-md-2">
              <h4>Resources</h4>
              <p>Prices</p>
              <p>Site Widgets</p>
              <p>Tax</p>
              <p>Support</p>
            </div>
            <div className="col-md-4">
              <div>
                <img src="assets/Googleplay black.png" alt="" />
                <img src="assets/Appstore black.png" alt="" />
              </div>
              <div className="d-flex icons-row1">
                <BsFacebook className="ms-4 icons-size"/>
                <BsTwitter className="ms-4 icons-size"/>
                <BsInstagram className="ms-4 icons-size"/>
                <BsLinkedin className="ms-4 icons-size"/>
                <BsGoogle className="ms-4 icons-size"/>
                <BsYoutube className="ms-4 icons-size"/>
              </div>
              <div className="d-flex icons-row2">
              <BsApple className="ms-4 icons-size"/>
              <BsPaypal className="ms-4 icons-size"/>
                <BsDiscord className="ms-4 icons-size"/>
                <BsTelegram className="ms-4 icons-size"/>
                <BsFillChatDotsFill className="ms-4 icons-size"/>
                <BsGithub className="ms-4 icons-size"/>

              </div>
            </div>
          </div>
          <div className="row row2">
            <div className="col-md-2">
              <h4>Cards</h4>
              <p>Metal Visa Cards</p>
            </div>
            <div className="col-md-2">
              <h4>Commerce</h4>
              <p>Pay for Business</p>
            </div>
            <div className="col-md-2">
              <h4>DeFi</h4>
              <p>Wallet</p>
              <p>Swap</p>
              <p>Earn</p>
              <p>Dashboard</p>
            </div>
            <div className="col-md-2">
              <h4>Company</h4>
              <p>About</p>
              <p>Careers</p>
              <p>News</p>
              <p>Security</p>
              <p>Contact</p>
            </div>
            <div className="col-md-4">
              <h4>Learn</h4>
              <p>What's Trending</p>
              <p>Product News</p>
              <p>Events</p>
              <p>University</p>
              <p>Research</p>
              <p>Market Updates</p>
            </div>
          </div>
          <hr />
          <div className="row row3 py-3">
            <p>Copyright © 2018 - 2022 Crypto.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
