import "./fourth.css";
const Fourth = () => {
  return (
    <>
      <div className="container-fluid p-5" style={{backgroundColor:"#f9f9fa"}}>
        <div className="row p-3">
          <div className="text-center fourth mb-4">
            <h1>Line Execution</h1>
            <p>
              Execute your strategies on the live market with our world-class
              execution platform. Deploy your custom strategies with never
              before heard reliability uninterrupted.
            </p>
          </div>
          <div className="col-12 col-lg-4 ">
            <div className="card rounded-3 shadow border-0 p-3" style={{backgroundColor:"#fffff", height:"100%"}}>
                <div className="icon_part d-flex flex-row justify-content-start align-items-center mt-2 mb-3">
                <i className="bi bi-info-circle-fill me-3 fs-1 align-self-center"></i> 
                <h3 className=" align-self-center pt-2">Automatic Order</h3>
                </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-primary fw-bolder fs-6"></i>
              <p>
                Place orders directly on the broker account on the account used
                to log in. (no additional setup required.)
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-primary fw-bolder fs-6"></i>
              <p>
              We place stop-loss orders based on executed prices with the brokers.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-primary fw-bolder fs-6"></i>
              <p>
              Stop loss orders are automatically canceled on take profit.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-primary fw-bolder fs-6"></i>
              <p>
              You can track the status of the transactions easily.
              </p>
            </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 ">
            <div className="card rounded-3 shadow border-0 p-3" style={{backgroundColor:"#fffff", height:"100%"}}>
                <div className="icon_part d-flex flex-row justify-content-start align-items-center mt-2 mb-3">
                <i className="bi bi-fingerprint me-3 fs-1 align-self-center"></i> 
                <h3 className=" align-self-center pt-2">One Click order</h3>
                </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-success fw-bolder fs-6"></i>
              <p>
              On every signal, get a phone call with IVR.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-success fw-bolder fs-6"></i>
              <p>
              You can confirm the order simply by pressing 1 on the phone call.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-success fw-bolder fs-6"></i>
              <p>
              Tweak the price or other details of the order before actually executing it.
              </p>
            </div>
            
            </div>
          </div>
          <div className="col-12 col-lg-4 ">
            <div className="card rounded-3 shadow border-0 p-3" style={{backgroundColor:"#fffff", height:"100%"}}>
                <div className="icon_part d-flex flex-row justify-content-start align-items-center mt-2 mb-3">
                <i className="bi bi-file-earmark me-3 fs-1 align-self-center"></i> 
                <h3 className=" align-self-center pt-2">Paper Testing</h3>
                </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-info fw-bolder fs-6"></i>
              <p>
              Checks signal conditions every second just like live execution.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-info fw-bolder fs-6"></i>
              <p>
              Instead of placing orders in the broker, we store them in our database so that you can verify if the strategy works as you expect it to.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start">
              <i className="bi bi-check-circle mx-3 text-info fw-bolder fs-6"></i>
              <p>
              Log in via any supported broker to try this out.
              </p>
            </div>
            
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Fourth;
