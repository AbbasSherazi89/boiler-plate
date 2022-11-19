import React from "react";
import {HiBadgeCheck} from 'react-icons/hi'
const Hero = () => {
  return (
    <>
      <section className="hero-sec">
        <div className="container">
          <div className="row hero-row">
            <div className="col-md-4">
              <div className="img-div">
                <img className="img-fluid mobile-img" src="assets/Frame.png" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <h2>The World’s Fastest Growing Crypto App</h2>
              <p className="pt-3">
               <HiBadgeCheck className="hero-icons"/> Join <span style={{color:'#D895FF'}}> 50m+ </span>  users buying and selling  <span style={{color:'#D895FF'}}> 250+ cryptocurrencies at true </span>  
                cost
              </p>
              <p> <HiBadgeCheck className="hero-icons"/> Spend with the Crypto Yeild Visa Card and <span style={{color:'#D895FF'}}> get up to 5% </span> back</p>
              <p>
              <HiBadgeCheck className="hero-icons"/> Grow your portfolio by <span style={{color:'#D895FF'}}> receiving rewards up to 14.5% </span> on your crypto assets
              </p>
              <div className="hero-col2-images pt-5">
                <img className="img-fluid" src="assets/Google Play.png" alt="" />
                <img className="img-fluid mx-4" src="assets/App Store.png" alt="" />
                <img className="img-fluid " src="assets/Rectangle.png" alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
