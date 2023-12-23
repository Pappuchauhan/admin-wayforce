import React from "react";

function Navbar(props) {

  return (
    <>
      <div className="col-lg-12 py-3">
        <div className="row">
          <div className="col-lg-7">
            <h4>{props.heading}</h4>
          </div>
          <div className="col-lg-5">
            <div className="row justify-content-end">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="mx-1">
                  <div className="bi bi-bell-fill position-relative fs-5">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-color" style={{ fontSize: "12px" }}>
                      9+
                    </span>
                  </div>
                </div>
                <div className="d-flex mx-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    height={"30px"}
                    width={"30px"}
                    className="img-rounded-circle me-1"
                    alt="img"
                  />
                  <div>
                    <h6 className="my-1">Amit</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
