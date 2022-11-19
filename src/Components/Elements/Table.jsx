import React from "react";
import {GrFormNextLink} from 'react-icons/gr'
const Table = () => {
  return (
    <>
      <section className="table-sec ">
        <div className="container">
          <div className="row table-toprow pb-3">
            <div className="col-md-6 text-center">
              <p className="p1">SECURELY BUY, SELL, STORE, SEND AND TRACK</p>
              <h4>Buy crypto at true cost</h4>
              <p className="p2 pb-3">
                Buy and sell 250+ cryptocurrencies with 20+ fiat currencies
                using bank transfers or your credit/debit card.
              </p>
            </div>
          </div>
          <div className="row table-secondrow">
            <div className="col-md-10">
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      Bitcoin{" "}
                      <span className="ms-2" style={{ fontWeight: "lighter" }}>
                        BTA
                      </span>
                    </th>
                    <td style={{ fontWeight: "900" }}>$21,019.25</td>
                    <td className="text-danger" style={{ fontColor: "red" }}>
                      {" "}
                      -1.35%
                    </td>
                    <td style={{ fontWeight: "500" }}>@$400,939,726,363.91</td>
                    <td>
                      <img
                        className="img-fluid"
                        src="assets/Graph.png"
                        alt=""
                        width={120}
                      />
                    </td>
                    <td>
                      <button className="btn btn-dark">Trade</button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Ethereum{" "}
                      <span className="ms-2" style={{ fontWeight: "lighter" }}>
                        ETH
                      </span>
                    </th>
                    <td style={{ fontWeight: "900" }}>$1,593.36</td>
                    <td className="text-danger" style={{ fontColor: "red" }}>
                      {" "}
                      -2.40%
                    </td>
                    <td style={{ fontWeight: "500" }}>$193,478,949,760.73</td>
                    <td>
                      <img
                        className="img-fluid"
                        src="assets/Vector.png"
                        alt=""
                        width={120}
                      />
                    </td>
                    <td>
                      <button className="btn btn-dark">Trade</button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Cardano{" "}
                      <span className="ms-2" style={{ fontWeight: "lighter" }}>
                        ADA
                      </span>
                    </th>
                    <td style={{ fontWeight: "900" }}>$0.411385</td>
                    <td className="text-danger" style={{ fontColor: "red" }}>
                      {" "}
                      -3.69%
                    </td>
                    <td style={{ fontWeight: "500" }}>$13,957,416,040.67</td>
                    <td>
                      <img
                        className="img-fluid"
                        src="assets/Graph.png"
                        alt=""
                        width={120}
                      />
                    </td>
                    <td>
                      <button className="btn btn-dark">Trade</button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Dogecoin{" "}
                      <span className="ms-2" style={{ fontWeight: "lighter" }}>
                        DOGE
                      </span>
                    </th>
                    <td style={{ fontWeight: "900" }}>$0.118427</td>
                    <td className="text-danger" style={{ fontColor: "red" }}>
                      {" "}
                      -5.00%
                    </td>
                    <td style={{ fontWeight: "500" }}>$15,551,890,509.69</td>
                    <td>
                      <img
                        className="img-fluid"
                        src="assets/Vector.png"
                        alt=""
                        width={120}
                      />
                    </td>
                    <td>
                      <button className="btn btn-dark">Trade</button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Polkadot{" "}
                      <span className="ms-2" style={{ fontWeight: "lighter" }}>
                        DOT
                      </span>
                    </th>
                    <td style={{ fontWeight: "900" }}>$6.95</td>
                    <td className="text-danger" style={{ fontColor: "red" }}>
                      {" "}
                      -1.79%
                    </td>
                    <td style={{ fontWeight: "500" }}>$7,791,830,488.81</td>
                    <td>
                      <img
                        className="img-fluid"
                        src="assets/Graph.png"
                        alt=""
                        width={120}
                      />
                    </td>
                    <td>
                      <button className="btn btn-dark">Trade</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row table-row3 pt-4">
            <div className="col-md-2">
              <button className=" learn-btn">Learn More <GrFormNextLink className="ms-3 next-arrow"/></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
