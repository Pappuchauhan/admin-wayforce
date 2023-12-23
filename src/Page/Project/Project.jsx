import { React, useState } from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

function Project() {
  const [activeContainer, setActiveContainer] = useState(1);

  const handleClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };

  return (
    <div className="col-xl-10 bg">
      <div className="row justify-content-center">
        <Navbar heading="Project" />
        <div className="col-lg-12 my-3">
          <div className="row d-lg-flex justify-content-end">
            <div className="col-lg-7">
              <button
                className={`${
                  activeContainer === 1 ? "btnStyle-active" : "switch-btn"
                }`}
                onClick={() => handleClick(1)}
              >
                All
              </button>
              <button
                className={`${
                  activeContainer === 2 ? "btnStyle-active" : "switch-btn"
                }`}
                onClick={() => handleClick(2)}
              >
                Completed
              </button>
              <button
                className={`${
                  activeContainer === 3 ? "btnStyle-active" : "switch-btn"
                }`}
                onClick={() => handleClick(3)}
              >
                OnGoing
              </button>
              <button
                className={`${
                  activeContainer === 4 ? "btnStyle-active" : "switch-btn"
                }`}
                onClick={() => handleClick(4)}
              >
                Under Negotiation
              </button>
            </div>
            <div className="col-lg-2">
              <select name="" id="" className="select-control">
                <option value={"Newest"}>Newest</option>
              </select>
            </div>
          </div>
        </div>
        {/* all */}
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 1 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="py-3">
            <h6>All Project </h6>
            <hr />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Project ID</th>
                <th scope="col-table">Employee</th>
                <th scope="col-table">Employer</th>
                <th scope="col-table">Status</th>
                <th scope="col-table">View</th>
                {/* <th scope="col-table">Bill</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>Amit kumar</td>
                <td>Amit</td>
                <td>
                  <button className="status bg-success">Complete</button>
                </td>
                <td>
                  <Link to="/completeProject">
                    <i className="bi bi-eye-fill text-success"></i>
                  </Link>
                </td>
              
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>Amit kumar</td>
                <td>Amit</td>
                <td>
                  <button className="status bg-warning">OnGoing</button>
                </td>
                <td>
                  <Link to="/onGoingProject">
                    <i className="bi bi-eye-fill text-success"></i>
                  </Link>
                </td>
              
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>Amit kumar</td>
                <td>Amit</td>
                <td>
                  <button className="status bg-secondary">Negotiation</button>
                </td>
                <td>
                  <Link to="/underNegotiation">
                    <i className="bi bi-eye-fill text-success"></i>
                  </Link>
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
        {/* completed */}
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 2 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="py-3">
            <h6>Completed Project </h6>
            <hr />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Project ID</th>
                <th scope="col-table">Employee</th>
                <th scope="col-table">Employer</th>
                <th scope="col-table">View</th>
                {/* <th scope="col-table">Bill</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>Amit kumar</td>
                <td>Amit</td>
               
                <td>
                  <Link to="/completeProject">
                    <i className="bi bi-eye-fill text-success"></i>
                  </Link>
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
         {/* OnGoing */}
         <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 3 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="py-3">
            <h6>OnGoing Project </h6>
            <hr />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Project ID</th>
                <th scope="col-table">Employee</th>
                <th scope="col-table">Employer</th>
                <th scope="col-table">View</th>
                {/* <th scope="col-table">Bill</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>Amit kumar</td>
                <td>Amit</td>
              
                <td>
                  <Link to="/onGoingProject">
                    <i className="bi bi-eye-fill text-success"></i>
                  </Link>
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
        {/* Under Negotiation */}
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 4 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="py-3">
            <h6>Under Negotiation Project</h6>
            <hr />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Project ID</th>
                <th scope="col-table">Employee</th>
                <th scope="col-table">Employer</th>
                <th scope="col-table">View</th>
                {/* <th scope="col-table">Bill</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>Amit kumar</td>
                <td>Amit</td>
               
                <td>
                  <Link to="/underNegotiation">
                    <i className="bi bi-eye-fill text-success"></i>
                  </Link>
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-11 my-3">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <p>Showing 1 to 5 of 30 Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
