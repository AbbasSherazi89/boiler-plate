import React from "react";
import {GrFormNextLink} from 'react-icons/gr'

const Liquidity = () => {
  return (
    <>
      <section className="liquidity-sec">
        <div className="container">
          <div className="row liquidity-row1">
            <div className="col-md-3">
              <h3>Liquidity</h3>
              <p>Deep order book liquidity in all market conditions</p>
            </div>
            <div className="col-md-3">
              <h3>Speed</h3>
              <p>2.7m TPS matching engine</p>
              <p>50 micro second core latency</p>
            </div>
            <div className="col-md-3">
              <h3>Security</h3>
              <p>SOC2 Type 1 Compliance</p>
              <p>PCI:DSS 3.2.1 Level 1 compliance</p>
              <p>ISO/IEC 27001:2013</p>
              <p>ISO/IEC 27701:2019</p>
              <p>ISO 22301:2019</p>
              <p>Singapore Data Protection Trust Mark</p>
            </div>
          </div>
          <div className="row liquidity-row2">
            <div className="col-md-4">
              <div className="img-div">
                <img
                  className="img-fluid mobile-img"
                  src="assets/Frame.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5 row2-col2">
              <p className="p1">CRYPTO.COM DEFI</p>
              <h3>DeFi Made Simple</h3>
              <p>
                <span style={{ color: "#0099FF" }}>DeFi Wallet</span>. Your
                Keys, Your Crypto.
              </p>
              <p>
                <span style={{ color: "#0099FF" }}>DeFi Earn</span>. No lock-up
                period and stable returns.
              </p>
              <p>
                <span style={{ color: "#0099FF" }}>DeFi Swap</span>. Swap DeFi
                coins and earn Triple Yield.
              </p>
              <button className=" learn-btn my-4">Go to Crypto.com Defi <GrFormNextLink className="ms-3 next-arrow"/></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Liquidity;
