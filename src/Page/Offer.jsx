import React from "react";
import Navbar from "./Home/Navbar";

function Offer() {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
    <div className="row justify-content-start">
      <Navbar heading="Add Offer" />
      <div className="col-lg-6">
        <div className="row">
          <div className="my-2">
            <label htmlFor="">Offer Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Offer Name"
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Offer Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Offer Price"
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Upload Image</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Upload Image"
            />
          </div>
          <div className="my-2">
            <label htmlFor="">Offer Discount</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Discount"
            />
          </div>
          
          <div className="my-2">
              <button className="btn-style">Add</button>
          </div>
        </div>
      </div>

      {/* <hr />
      <div className="col-lg-12">
        <table class="table">
          <thead className="table-secondary">
            <tr>
              <td scope="col-table">S.NO</td>
              <td scope="col-table">Category Name</td>
              <td scope="col-table">Category Type</td>
              <td scope="col-table">Status</td>
              <td scope="col-table">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1 </th>
              <td>Plumber</td>

              <td>Amit Kumar</td>
              <td>
                <button className="status bg-success">active</button>
              </td>

              <td className="d-flex justify-content-evenly cursor">
                <div>
                  <i className="bi bi-pencil-square text-warning fs-5"></i>
                </div>
                <div>
                  <i className="bi bi-archive text-danger fs-5"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  </div>
  );
}

export default Offer;
