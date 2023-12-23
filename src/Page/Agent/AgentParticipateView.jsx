import React from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

function AgentParticipateView() {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Agent Participate" />
        <div className="col-lg-12">
          <div className="bg-white rounded shadow-sm p-3">
            
            <hr />
            <h5>Amit kumar <button className="status bg-danger">close</button></h5>
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
            <hr />
            <div className="d-flex justify-content-between mx-2" >
             <h5>My Quote</h5>
             <span className="fs-6 text-secondary">Date : 28 -06-2023</span>
             </div>
             <div className="border p-2 rounded">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem ipsum animi provident ea deserunt possimus ad neque placeat dolorum, laboriosam laborum quis, vitae fugit facilis distinctio soluta sint error expedita! Eveniet, consequuntur magni fugiat ratione iure nemo non repudiandae facere sunt omnis rem aperiam magnam et repellendus nobis reprehenderit!
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentParticipateView;
