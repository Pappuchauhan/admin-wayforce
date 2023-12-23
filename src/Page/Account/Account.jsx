import React from "react";
import Navbar from "../Home/Navbar";
import { BsCurrencyRupee } from "react-icons/bs";

const Account = () => {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Account" />

        <div
          className="col-lg-12 container shadow-sm rounded bg-white"
          style={{ overflow: "auto" }}
        >
          <div className="row container">
            <div className="col-2 card my-2">
              <i className="bi bi-wallet-fill yellow fs-5"></i>
              <div>Total Balance</div>
              <h4>
                <i className="bi bi-currency-rupee"></i>
                {"10000"}
              </h4>
            </div>

            <div className="col d-flex justify-content-end align-items-center">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn btn-success">
                  Print
                </button>
                <button type="button" className="btn btn-warning">
                  Download
                </button>
              </div>
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="col-3">
              <span className="fs-5">From</span>
              <input type="date" className="form-control" />
            </div>
            <div class="col-3">
              <span className="fs-5">To</span>
              <input type="date" className="form-control" />
            </div>
          </div>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col-table">S.NO</th>
              <th scope="col-table">Date</th>
              <th scope="col-table">Name</th>
              <th scope="col-table">Description</th>
              <th scope="col-table">Credit</th>
              <th scope="col-table">Debit</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: "300px", overflowY: "auto" }}>
            <tr>
              <th scope="row">1</th>
              <td>01/12/2022</td>
              <td>Amit</td>
              <td>Plumber</td>
              <td className="align-middle text-success">
                <BsCurrencyRupee />
                +1000
              </td>
              <td className="align-middle text-danger">
                <BsCurrencyRupee />
                -50
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>10/02/2023</td>
              <td>Anurag</td>
              <td>Engineer</td>
              <td className="align-middle text-success">
                <BsCurrencyRupee />
                +3000
              </td>
              <td className="align-middle text-danger">
                <BsCurrencyRupee />
                -150
              </td>
            </tr>
            
            
          </tbody>
        </table>

        <div className="row justify-content-between">
          <div className="col-lg-4 my-3">
            <p>Showing 1 to 2 of 10</p>
          </div>
          {/* <div className="col-lg-4 my-3 d-flex justify-content-end">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-dark rounded-circle">
                -
              </button>
              <button type="button" className="btn btn-dark rounded-circle">
                +
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Account;
