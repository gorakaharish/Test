import "./nav.css";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBStyHJmwt4b8fa67WSCGptGoCZOiJwpwgsg&s"
                alt=""
                height={30}
                width={180}
              />
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse " id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/dashboard"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/strength">
                    My Strength
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/strategy">
                    Create Strategy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/videos">
                    Videos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/faq">
                    Faq
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button className="btn btn_2 bg-success-subtle rounded-pill  fw-medium">
                Buy a Plan
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
