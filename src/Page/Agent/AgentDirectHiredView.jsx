import React from 'react'
import Navbar from '../Home/Navbar';
import { Link } from 'react-router-dom';

function AgentDirectHiredView() {
    return (
        <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Agent Direct Hired" />
          <div className="col-lg-8">
          <div className="bg-white rounded shadow-sm p-3">
            
            <hr />
            <h5>Amit kumar <button className="status bg-warning">pending</button> <button className="status bg-success">Accepted</button> <button className="status bg-danger">Cancel</button></h5>
            <h6>work Details</h6>
            <p className="border p-3 rounded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              necessitatibus, veniam ut soluta, accusamus et ipsa voluptas,
              magni fugit ad eum id aut. Natus repellendus officiis quia eius!
              Perferendis, voluptas!
            </p>
            <div className="">
            <div><b> Required Manpower</b></div>
             <table className="table">
                <thead>
                    <tr>
                    <th>S.no</th>
                    <th>Skills</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>carpenter</td>
                    <td>5</td>
                    <td>500 Rs. /-</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>carpenter</td>
                    <td>5</td>
                    <td>500 Rs. /-</td>
                    </tr>
                </tbody>
             </table>
             </div>
            <p>
              <b>Language : </b> Hindi,English
            </p>
           
            <p>
              <b>Type : </b> Full Time
            </p>
            <p>
              {" "}
              <b>Address</b> : Address
            </p>
            <p>
              {" "}
              <b>Site Location</b> : <a href="#">Click to Open Map</a>
            </p>
            <p>
              {" "}
              <b>Period</b> :10 days
            </p>
            
          </div>
        </div>
          <div className="col-lg-3">
            <div className="bg-white rounded shadow-sm p-3">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  height={"100px"}
                  width={"100px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
                <div>
                  Verified <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="color">Amit kumar</div>
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
                  <i className="bi bi-grid text-secondary fs-5"></i>{" "}
                  Carpenter
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
                  height={"100px"}
                  width={"100px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
                <div>
                  Verified <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="color">Amit kumar</div>
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
                {/* <div>
                  <i className="bi bi-grid text-secondary fs-5"></i>{" "}
                  Carpenter
                </div> */}
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

export default AgentDirectHiredView