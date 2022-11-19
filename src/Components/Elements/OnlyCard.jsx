import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const OnlyCard = () => {
  return (
    <>
      <section className="onlycard-sec">
        <div className="container">
          <div className="row card-row">
            <div className="col-md-6 text-center">
              <p className="pb-2">CRYPTO.COM VISA CARD</p>
              <h2 className="pb-2">The only card you need</h2>
              <p className="pb-2">
                Enjoy up to 5% back on all spending with your sleek, pure metal
                card. No annual fees. Top-up with fiat or crypto.
              </p>
              <button className="choose">
                Choose Your Cards <GrFormNextLink className="ms-3 next-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlyCard;
