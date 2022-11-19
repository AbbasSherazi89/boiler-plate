import React from "react";
import {GrFormNextLink} from 'react-icons/gr'

const EarnReward = () => {
  return (
    <>
      <section className="reward-sec">
        <div className="container">
          <div className="row rewar-row1">
            <div className="col-md-6">
              <p className="p1">CRYPTO EARN</p>
              <h4>Deposit crypto, earn rewards</h4>
              <p className="p2">Choose from 40+ cryptocurrencies and stablecoins.</p>
              <button className=" learn-btn my-4">Calculate Rewards <GrFormNextLink className="ms-3 next-arrow"/></button>
              <div className="pt-5">
                <img className="img-fluid" src="assets/Frame 37.png" alt="" />
                <img className="img-fluid img2" src="assets/Frame 38.png" alt="" />
              </div>
            </div>
            <div className="col-md-4">
            <div className="img-div">
                <img className="img-fluid mobile-img" src="assets/Frame.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EarnReward;
