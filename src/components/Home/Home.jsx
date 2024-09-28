import { useState } from "react";
import "./Home.css";
import Third from "../../comun/Third/Third";
import Fourth from "../../comun/Fourth/Fourth";
import Fifth from "../../comun/Fifth/Fifth";
import Sixth from "../../comun/Sixth/Sixth";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container-fluid first mt-5 pt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <p>
                You are invited for webinar
                <strong>
                  All about Quantman - A beginner's guide (English)
                </strong>
                on SEP 27, 2024, at 08:00 PM IST. After registering, you will
                receive a confirmation email containing information about
                joining the webinar <a href="">Register Here</a>
              </p>
              <a className="a">
                <i className="bi bi-x text-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 py-5">
        <div className="row">
          <div className="col-12 col-lg-6 ms-5">
            <div className="second_part">
              <h1>Algo trading</h1>
              <h3>Trade Smarter, Not Harder</h3>
              <p>
                With Quantman's Algo Trading. Access over
                <strong>6 years</strong> of futures & options data and choose
                from 100+ tried-and-tested strategies. With Quantman at your
                fingertips, anyone can trade effortlessly –
                <strong>no coding</strong> required. And yes, you can even
                customise your strategies.
              </p>
              <button className="rounded mt-3 mb-2">
                Try it now with a 7-day free trial
              </button>
              <p className="para">
                Trusted by <strong>1,00,000+</strong> happy customers.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 ms-5 ps-5">
            <div className="card bg-white shadow p-3">
              <div>
                <h2 className="fs-4 text-center">Login with your broker</h2>
                <div className="dropdown-container p-4 my-3">
                  <p className="text-center my-2">
                    Continue with <strong>Broker</strong> select here
                  </p>
                  <div className="custom-select" onClick={toggleDropdown}>
                    <span>Select Broker</span>
                    <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                  </div>

                  {isOpen && (
                    <ul className="dropdown-options">
                      <li>Broker 1</li>
                      <li>Broker 2</li>
                      <li>Broker 3</li>
                      <li>Broker 4</li>
                    </ul>
                  )}
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Login with Broker</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </>
  );
};

export default Home;
