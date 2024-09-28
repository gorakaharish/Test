import "./fifth.css";

const Fifth = () => {
  return (
    <>
      <section
        className="features-section section overflow-hidden p-5"
        id="features"
      >
        <div className="container-fluid bg-white p-5" style={{fontFamily:"Poppins"}}>
          <div className="section-head text-center" style={{fontFamily:"Poppins"}}>
            <h2 className="font-weight-bold">
              What are the features of the product?
            </h2>
            <p>Features are highlighted below.</p>
          </div>
          <div className="row align-items-center section p-5">
            <div className="col-md-12 col-lg-6 order-2 order-lg-1">
              <div className="feature-content contant-spacing" style={{fontFamily:"Poppins"}}>
                <h3>Strategy Templates</h3>
                <ul className="list-unstyled list fs-5" style={{fontFamily:"Poppins"}}>
                  <li>
                    <div>
                    <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>
                      Directional:{" "}
                      <span className="font-weight-semi" style={{fontFamily:"Poppins"}}>
                        Bull Call spread / Bear Put Spread
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                    <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>
                      Non-directional Strategies:{" "}
                      <span className="font-weight-semi" style={{fontFamily:"Poppins"}}>
                        Straddle / Strangle/ Iron Condor
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="feature-img img-spacing">
                <img
                  alt="img2"
                  src="https://www.quantman.in/landing-page-img/feature-1.png"
                  className="w-100"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center section p-5">
            <div className="col-md-12 col-lg-6 mb-5 mb-lg-0">
              <div className="feature-img contant-spacing">
                <img
                  alt="img2"
                  src="https://www.quantman.in/landing-page-img/quantman-indcators.png
"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-lg-6">
              <div className="feature-content contant-spacing" style={{fontFamily:"Poppins"}}>
                <h3>Create Your Own Strategy</h3>
                <ul className="list-unstyled list fs-5" style={{fontFamily:"Poppins"}}>
                  <li>
                    <div>
                    <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>
                      Tweak these strategies using our massive set of
                      customizable indicators or other custom signals like
                      <ul className="font-weight-semi list blue-bullets ms-4">
                        <li>Days to expiry</li>
                        <li>Technical indicators</li>
                        <li>Opening range or candle at specified period.</li>
                        <li className="mb-0">Day of week / Time of Day.</li>
                      </ul>
                    </div>
                  </li>
                  <li><i className="bi bi-check-circle me-3 fs-6 text-primary"></i>Intraday and Positional, both supported.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center section p-5">
            <div className="col-md-12 col-lg-6 col-lg-6 order-2 order-lg-1 ">
              <div className="feature-content contant-spacing" style={{fontFamily:"Poppins"}}>
                <ul className=" list-unstyled pl-0 pl-md-2 fs-5">
                  <li>
                    <div>
                    <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>
                      Choose Options to place enter based on
                      <ul className="fw-bold list blue-bullets ms-5 fs-5" style={{fontFamily:"Poppins"}}>
                        <li className="my-2">Spot Based Strike Index</li>
                        <li className="my-2">Future Based Strike Index</li>
                        <li className="my-2">Premium</li>
                        <li className="my-2">Strike Price</li>
                      </ul>
                    </div>
                  </li>
                  <li><i className="bi bi-check-circle me-3 fs-6 text-primary"></i>We support both Weekly and Monthly expiry cycles.</li>
                  <li> <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>Futures / Options / Equity of Indexes and all Stocks.</li>
                  <li>
                  <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>                    Build multiple cases with different transaction Legs and
                    Entry / Exit signals.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="feature-img img-spacing">
                <img
                  alt="img2"
                  src="	https://www.quantman.in/landing-page-img/quantman-transaction.png
"
                  className="w-100"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center section p-5">
            <div className="col-md-12 col-lg-6 mb-5 mb-lg-0 ">
              <div className="feature-img contant-spacing">
                <img
                  alt="img2"
                  src="https://www.quantman.in/landing-page-img/feature-4.png"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="feature-content contant-spacing">
                <ul className="list-unstyled list pl-0 pl-md-2 fs-5" style={{fontFamily:"Poppins"}}>
                  <li> <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>Candle / Heikin Ashi / Renko</li>
                  <li> <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>SuperTrend / RSI / ATR / SMA / ... (27 more)</li>
                  <li> <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>Volume / Open interest based signal generation</li>
                  <li>
                  <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>
                    BullishHammer / BullishEngulfing / BearishMarubozu /
                    BearishSpinningTop
                  </li>
                  <li> <i className="bi bi-check-circle me-3 fs-6 text-primary"></i>Price Ratio Standard Deviation Indicator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fifth;
