import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";
import { useParams } from "react-router-dom";

function EmployeeVerification() {
  const [employerData, setEmployerData] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    fetchEmployeeData();
  }, [id]);

  const fetchEmployeeData = async (employeeId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/${id}`);
      const data = response?.data?.data;
      setEmployerData(data)
    } catch (error) {
      console.log(error);
    }
  };
  /*

  const fetchManpowerData = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/${id}`);
      const data = response?.data?.data
      setManpowerVarifData(data)
    } 
    catch (error) {
      console.error(error)
    }
  }

  
  const fetchAgentData = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/agentt/getAgentById/${id}`);
      const data = response?.data?.data
      setAgentData(data)
    } 
    catch (error) {
      console.error(error)
    }
  }

  */

const {
  employerName,
  address,
  mobile,
  aadharCard,
  email,
  panCard,
  GST,
  city,
  _id,
  gender,
  profile,
  fullName,
  explainYourWork,
  pinCode,
  state
} = employerData 


  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Employer Verification" />
          <div className="col-lg-11 text-end my-3">
            <button
              className="btn-cancel"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cancel
            </button>
            <button className="btn-style">Verify</button>
          </div>
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm p-3">
            <h5 className="color">Employer Details</h5>
              <hr />
              <div className="row">
                <div className="col-lg-6 col-6">
                  <p>
                    <b>Full Name</b>
                  </p>
                  <p>
                    <b>Address</b>
                  </p>
                  <p>
                    <b>City</b>
                  </p>
                  <p>
                    <b>State</b>
                  </p>
                  <p>
                    <b>Mobile Number</b>
                  </p>
                  <p>
                    <b>Aadhar Number</b>
                  </p>
                  <p>
                    <b>Email</b>
                  </p>
                  <p>
                    <b>Pan Number</b>
                  </p>             
                  <p>
                    <b>Pin Code</b>
                  </p>
                  <p>
                    <b>GST Number</b>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>{employerName || 'NA'}</p>
                  <p>{address || 'NA'}</p>
                  <p>{city || 'NA'}</p>
                  <p>{state || 'NA'}</p>
                  <p>{mobile || 'NA'}</p>
                  <p>{aadharCard ||"N/A"}</p>
                  <p>{email || "N/A"}</p>
                  <p>{panCard || "N/A"}</p>
                  <p>{pinCode || 'NA'}</p>
                  <p>{GST || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white rounded shadow-sm p-3">
              <div className="text-center">
                <img
                  src={profile}
                  height={"100px"}
                  width={"100px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
                <div>
                  Verified <i className="bi bi-x-circle text-danger"></i>
                </div>
                <p>{employerName || 'NA'}</p>
              </div>
              {/* <div className="d-flex justify-content-evenly">
                <div className="border text-center rounded p-2">
                  <div>
                    {" "}
                    <b>200</b>
                  </div>
                  <span>Job Posted</span>
                </div>
                <div className="border text-center rounded p-2">
                  <div>
                    {" "}
                    <b>100</b>
                  </div>
                  <span>Job Hired</span>
                </div>
              </div> */}
              <hr />
              <div>
                <div>
                  <i className="bi bi-telephone-fill text-success fs-5"></i>
                  {mobile || 'NA'}
                </div>
                <div>
                  <i className="bi bi-envelope-fill color fs-5"></i>
                  {email || "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                WayForce
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="">Enter Reason For Cancel</label>
                <input
                  type="text"
                  placeholder="Reason"
                  className="form-control"
                />
              </div>
              <div className="my-3">
                <label htmlFor="">Status</label>
                <select name="" id="" className="form-control">
                  <option value={false}>False</option>
                  <option value={true}>true</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn-style">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeVerification;
