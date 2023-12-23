import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const AgentVerification = () => {
    const [agentData, setAgentData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetchAgentData()
    }, [id])

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
      const {
        agentName,
        address,
        mobile,
        aadharCard,
        email,
        panCard,
        GST_Number,
        city,
        profile,
        createdAt,
        fullName,
        pinCode,
        state,
        gender
      } = agentData 
      console.log(agentData)

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
    <div className="row justify-content-center">
      <Navbar heading="Agent Verification" />
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
        <h5 className="color">Agent Details</h5>
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
                <b>State</b>
              </p>
              <p>
                <b>City</b>
              </p>
              <p>
                <b>Gender</b>
              </p>
              <p>
                <b>Pin Code</b>
              </p>
              <p>
                <b>GST Number</b>
              </p>
              <p>
                <b>Registration Number</b>
              </p>
            </div>
            <div className="col-lg-6">
              <p>{agentName || 'NA'}</p>
              <p>{address || 'NA'}</p>
              <p>{mobile || 'NA'}</p>
              <p>{aadharCard || 'NA'} </p>
              <p>{email || 'NA'} </p>
              <p>{panCard || 'NA'}</p>
              <p>{state || 'NA'}</p>
              <p>{city || 'NA'}</p>
              <p>{gender || 'NA'}</p>
              <p>{pinCode || 'NA'}</p>
              <p>{GST_Number || 'NA'}</p>
              <p>{aadharCard || 'NA'} </p>
            </div>
          </div>
         
          {/* <hr />
          <div className="row">
            <div className="col-lg-6 col-6">
              <p>
                <b>Agent Name</b>
              </p>
              <p>
                <b>Address</b>
              </p>
            
            </div>
            <div className="col-lg-6">
          
            </div>
          </div> */}
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
            <p>{agentName || 'NA'} </p>
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
              {email || 'NA'}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AgentVerification