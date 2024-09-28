import { useState } from "react";
import "./sixth.css";

const Sixth = () => {
  const [activeTab, setActiveTab] = useState("Annually");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="section" id="plans">
      <div className="plans-page container plan-page-web">
        <div>
          <h1
            className="font-weight-bold mb-3 mb-md-5 mt-5 text-center"
            style={{ color: "#000", fontFamily: "Poppins" }}
          >
            Plans for every level of ambition
          </h1>
          <div className="d-flex align-items-center flex-column">
            <div className="switch-btn">
              <div role="group" className="btn-group btn-pill btn-group-toggle">
                <ul className="nav  plan-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className={`nav-link_1 btn btn-outline-primary btn-pill btn-lightness-primary ${
                        activeTab === "Monthly" ? "active" : ""
                      }`}
                      href="#tab"
                      onClick={() => handleTabClick("Monthly")}
                    >
                      Monthly
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link_1 btn btn-outline-primary btn-pill btn-lightness-primary ${
                        activeTab === "Quarterly" ? "active" : ""
                      }`}
                      href="#tab"
                      onClick={() => handleTabClick("Quarterly")}
                    >
                      Quarterly
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link_1 btn btn-outline-primary btn-pill btn-lightness-primary ${
                        activeTab === "Annually" ? "active" : ""
                      }`}
                      href="#tab"
                      onClick={() => handleTabClick("Annually")}
                    >
                      Annually
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 m-auto d-flex align-item-center gap-15 flex-wrap flex-lg-nowrap justify-content-center">
            <div>
              <div className="card-body coupon-code-wrapper">
                <div className="coupon-code">
                  <div
                    className="coupon-code-input  rounded p-4 "
                    style={{ border: "1px dashed #ffae42" }}
                  >
                    <div className="input-group border p-2">
                      <input
                        type="text"
                        className="form-control border-0 shadow-none bg-white"
                        placeholder="Ex 'qum20'"
                        aria-label="Coupon Code"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-light rounded apply_btn"
                          type="button"
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Plan Card */}
          <div className="row plans-row">
            <div className="col-lg-4 col-md-6 col-12 mt-5 mb-3">
              <div
                className="basic-box p-4 rounded-4"
                style={{ backgroundColor: "#D6E5FA" }}
              >
                <div className="amount-box bg-white border p-3 rounded-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Basic</p>
                      <h5>
                        <div className="payment-wrapper margin-mover">
                          <span className="actual-payment">
                            <span className="default">
                              <span className="material-icons-outlined font-size-inherit align-bottom">
                                &#8377;
                              </span>{" "}
                              1,084
                            </span>
                            <span
                              className="tx-12"
                              style={{ fontSize: "13px" }}
                            >
                              {" "}
                              / Month
                            </span>
                          </span>
                        </div>
                      </h5>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <p className="" style={{ fontSize: "13px" }}>
                          (Billed Yearly)
                        </p>
                        <p className="ms-5" style={{ fontSize: "13px" }}>
                          Excluding GST
                        </p>
                      </div>
                    </div>
                    <div className="order-now-btn"></div>
                  </div>
                </div>

                <div className="plan-desk">
                  <div className="content-border border-bottom border-white d-lg-block d-none">
                    <p className="text-center text-dark my-3">
                      What's included
                    </p>
                  </div>
                  <ul className="plan-list list-unstyled">
                    <li>
                      <div>
                        <i
                          className="fa-solid fa-square"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="my-3">
                        <span>
                          <del>
                            {" "}
                            <i className="bi bi-square-fill me-3 text-secondary"></i>
                            Calendar Spread
                          </del>
                        </span>
                      </div>
                      <div className="my-3">
                        <span>
                          <del>
                            {" "}
                            <i className="bi bi-square-fill me-3 text-secondary"></i>
                            Strike Multiplier and Add cases
                          </del>
                        </span>
                      </div>
                      <div className="my-3">
                        <span>
                          <del>
                            {" "}
                            <i className="bi bi-square-fill me-3 text-secondary"></i>
                            Adjustment Features
                          </del>
                        </span>
                      </div>
                      <div className="my-2">
                        <span>
                          <del>
                            <i className="bi bi-square-fill me-3 text-secondary"></i>
                            Marketplace Exclusive Premium strategies
                          </del>
                        </span>
                      </div>
                      <div className="my-3">
                        <span>
                          <i className="bi bi-check-square-fill me-3 text-success"></i>
                          250 Backtest Credits info
                        </span>
                      </div>
                      <div className="my-3">
                        <span>
                          <i className="bi bi-check-square-fill me-3 text-success"></i>
                          4 Live Deployment Credits info
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center my-4">
                    <button className="btn btn-primary">
                      Order Now{" "}
                      <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5 mb-3">
              <div
                className="basic-box premium-box p-4 rounded-4"
                style={{ backgroundColor: "#4184F3" }}
              >
                <div className="amount-box p-3 rounded-4 border bg-white">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="fs-6">Premium</p>
                      <h5>
                        <div className="payment-wrapper margin-mover">
                          <span className="actual-payment">
                            <span className="default">
                              <span className="material-icons-outlined font-size-inherit align-bottom">
                                &#8377; 2,417
                              </span>
                            </span>
                            <span className="" style={{ fontSize: "13px" }}>
                              / Month
                            </span>
                          </span>
                        </div>
                      </h5>
                      <div className="d-flex flex-row  justify-content-between align-items-center">
                        <p className="" style={{ fontSize: "13px" }}>
                          (Billed Yearly)
                        </p>
                        <p className="ms-5" style={{ fontSize: "13px" }}>
                          Excluding GST
                        </p>
                      </div>
                    </div>
                    <div className="order-now-btn"></div>
                  </div>
                </div>

                <div className="plan-desk">
                  <div className="content-border border-bottom d-lg-block d-none">
                    <p className="text-center text-white my-3">
                      What's included
                    </p>
                  </div>
                  <ul className="premium-plan-list list-unstyled">
                    <li>
                      <div>
                        <i
                          className="fa-solid fa-square-check"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="my-3 text-white">
                        <i className="bi bi-check-square-fill text-white me-3"></i>
                        <span>Calendar Spread</span>
                      </div>
                      <div className="my-3 text-white">
                        <i className="bi bi-check-square-fill text-white me-3"></i>
                        <span>Strike Multiplier and Add cases</span>
                      </div>
                      <div className="my-3 text-white">
                        <i className="bi bi-check-square-fill text-white me-3"></i>
                        <span>Adjustment Features</span>
                      </div>
                      <div className="my-3 text-white">
                        <i className="bi bi-check-square-fill text-white me-3"></i>
                        <span>Marketplace Exclusive Premium strategies</span>
                      </div>
                      <div className="my-3 text-white">
                        <i className="bi bi-check-square-fill text-white me-3"></i>
                        <span>1000 Backtest Credits info</span>
                      </div>
                      <div className="my-3 text-white">
                        <i className="bi bi-check-square-fill text-white me-3"></i>
                        <span>10 Live Deployment Credits info</span>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center my-4">
                    <button className="btn btn-light">
                      Order Now{" "}
                      <i className="bi bi-arrow-right-circle-fill ms-2 text-primary"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5 mb-3">
              <div className="div p-4 rounded-4 bg-white border">
                <h1 className="text-dark fw-bold text-center fs-4 ">
                  AddOn Credits
                </h1>
                <div className="card text-center p-3 rounded-4 my-3">
                  <div>
                  <h5 className="fw-normal">Live</h5>
                  <div>
                    <p className="fs-5 fw-bold">
                      {" "}
                      <span style={{ fontSize: "13px" }}>
                        &#8377;<del>300</del>
                      </span>{" "}
                      &#8377; 250{" "}
                      <span className="fw-normal" style={{ fontSize: "13px" }}>
                        / Month
                      </span>
                    </p>
                  </div>
                  </div>
                  <p className="fw-normal">Excluding GST</p>
                  <h5 className="my-2">1 live credits</h5>
                 <div className="my-1">
                 <button className="btn btn-primary btn-sm">Add Now <i className="bi bi-arrow-right-circle-fill ms-2 text-white"></i></button>
                 </div>
                </div>

                <div className="card text-center p-3 rounded-4 my-3">
                  <div>
                  <h5 className="fw-normal">Backtest</h5>
                  <div>
                    <p className="fs-5 fw-bold">
                      
                      
                      &#8377; 200
                      
                    </p>
                  </div>
                  </div>
                  <p className="fw-normal">Excluding GST</p>
                  <h5 className="my-2">100 Backtest credits</h5>
                 <div className="my-1">
                 <button className="btn btn-primary btn-sm">Add Now <i className="bi bi-arrow-right-circle-fill ms-2 text-white"></i></button>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default Sixth;
