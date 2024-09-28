import "./footer.css";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f9f9fa", height: "50vh",display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center" }}
      >
        <div className="row text-center">
          <div className="col-12">
            <h1 className="text-dark fw-bold" style={{fontSize:"30px"}}>Have Question? Get in Touch</h1>
            <p>
              <span>Email Us</span>
              <br /> suppert@gamil.com
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 mb-3 pb-3">
        <div className="row text-center">
          <div className="col-12">
            <p style={{ fontSize: "15px", color: "#4E4E4E" }}>
              © 2024 All rights reserved.{" "}
              <strong>Simply Algo Fintech Private Limited,</strong>D Quarters,
              48/28, Balan nagar, Peelamedu, Coimbatore - 641004, Tamil Nadu
            </p>
            <p style={{ fontSize: "15px", color: "#4E4E4E" }}>
              <strong>Support : Tamil, English :</strong> 9043044901{" "}
              <strong>Hindi :</strong> 7200397083, 7305977320
              <strong> Email :</strong> support@quantman.in
            </p>
            <p style={{ fontSize: "15px", color: "#4E4E4E" }}>
              <strong>
                Business partnership franchise Bulk sales : Mobile :
              </strong>{" "}
              7200397083
            </p>
            <div>
              <div>
                <button className="btn btn-light mx-2">
                  <i className="bi bi-facebook text-primary me-2"></i> Follow Us
                </button>
                <button className="btn btn-light mx-2">
                  <i className="bi bi-twitter text-info me-2"></i> Follow Us
                </button>
                <button className="btn btn-light mx-2">
                  <i className="bi bi-whatsapp text-success me-2"></i> Join Us
                </button>
                <button className="btn btn-light mx-2">
                  <i className="bi bi-youtube text-danger me-2"></i> Subsciribe
                </button>
                <button className="btn btn-light mx-2">
                  <i className="bi bi-envelope text-warning me-2"></i>{" "}
                  contactus@gmail.com
                </button>
              </div>
            </div>
            <div className="mt-3">
              <a href="" className="mx-2 text-dark">
                Terms & Conditions
              </a>
              |
              <a href="" className="mx-2 text-dark">
                Faq
              </a>
              |
              <a href="" className="mx-2 text-dark">
                Policy
              </a>
              |
              <a href="" className="mx-2 text-dark">
                About Us
              </a>
              |
              <a href="" className="mx-2 text-dark">
                Best Algo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
