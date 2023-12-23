import React from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

function CompleteProject() {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Complete Project" />
        <div className="col-lg-8 my-2">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex justify-content-between">
              <p>
                Project ID{" "}
                <button className="status bg-success">Completed</button>
              </p>
            </div>
            <h5>work Details</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              necessitatibus, veniam ut soluta, accusamus et ipsa voluptas,
              magni fugit ad eum id aut. Natus repellendus officiis quia eius!
              Perferendis, voluptas!
            </p>
            <div>
              <div className="my-2">
                 <div className="fw-bold">Address</div>
                  <div> Full Address With Location</div>
              </div>
              <div className="my-2">
              <div className="fw-bold">Type</div>
              <div>Full Time</div>
              </div>{" "}
            </div>
            <div className="my-2">
              <div className="fw-bold">Start Date / Time </div>
              <div>12-jun-2023 / 12:00 </div>
            </div>
            <div className="my-2">
              <div className="fw-bold">End Date / Time </div>
              <div>22-jun-2023 / 12:00 </div>
            </div>
            <div className="my-2">
              <div className="fw-bold">Site Location</div>
              <a href="">Click to open map</a>
            </div>
            <div className="my-2">
              <div className="fw-bold">Total ManPower Deploy</div>
              <div>15</div>
            </div>
             <div className="my-2">
             <div className="fw-bold">Total work Time Period</div>
            <div>6 Months , 5 Days</div>
             </div>
            <div className="my-2">
            <div className="fw-bold">Amount Paid</div>
            <div>550000 Rs.</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                height={"90px"}
                width={"90px"}
                className="img-rounded-circle me-1"
                alt="img"
              />
             
              <div className="color">Amit kumar <i className="bi bi-check-circle text-success"></i></div>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
              </div>

              <p>
                <Link to="/manPowerProfile">Visit Profile</Link>
              </p>
            </div>
            <hr />
            <div>
              <div>
                <i className="bi bi-grid text-secondary fs-5"></i> Employee
              </div>
              <div>
                <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                8700282172
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-sm p-3 my-2">
            <div className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                height={"90px"}
                width={"90px"}
                className="img-rounded-circle me-1"
                alt="img"
              />  
              <div className="color">Amit kumar <i className="bi bi-check-circle text-success"></i></div>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
              </div>

              <p>
                <Link to="/manPowerProfile">Visit Profile</Link>
              </p>
            </div>
            <hr />
            <div>
              <div>
                <i className="bi bi-grid text-secondary fs-5"></i> Employer
              </div>
              <div>
                <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                8700282172
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteProject;
