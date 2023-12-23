import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import {  useParams } from "react-router-dom";
import axios from "axios";

const ManpowerVerification = () => {
  const [manpowerVarifData, setManpowerVarifData] = useState([])

  const {id} = useParams()

    useEffect(() => {
        fetchManpowerData();
      }, []);

      // manpower forms verification -------
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

    const {pinCode,block,dob, age,skills=[], language=[],education=[], profile, category, state,city,manpowerName, mobile,email,address, gender} = manpowerVarifData || {}
      console.log(manpowerVarifData)
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
    <div className="row justify-content-center">
      <Navbar heading="Manpower Verification" />
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
        <h5 className="color">Manpower Details</h5>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-6">
              <p>
                <b>Full Name</b>
              </p>
              <p>
                <b>Category</b>
              </p>
              <p>
                <b>Category</b>
              </p>
              <p>
                <b>Address</b>
              </p>
              <p>
                <b>State</b>
              </p>
              <p>
                <b>City</b>
              </p>
              <p>
                <b>Age</b>
              </p>
              <p>
                <b>Mobile Number</b>
              </p>
              <p>
                <b>Gender</b>
              </p>
              <p>
                <b>DOB</b>
              </p>
              <p>
                <b>Block</b>
              </p>
              <p>
                <b>Pin Code</b>
              </p>
              <p>
                <b>Email</b>
              </p>
              <p>
                <b>Education</b>
              </p>
              <p>
                <b>Skills</b>
              </p>
              
              <p>
                <b>Language</b>
              </p>
            </div>
            <div className="col-lg-6">
              <p>{manpowerName || 'NA'}</p>
              <p>{category || 'NA'}</p>
              <p>{address || 'NA'}</p>
              <p>{state || 'NA'}</p>
              <p>{city || 'NA'}</p>
              <p>{age || 'NA'}</p>
              <p>{mobile || 'NA'}</p>
              <p>{gender || 'NA'}</p>
              <p>{dob || 'NA'} </p>
              <p>{block || 'NA'} </p>
              <p>{pinCode || 'NA'}</p>
              <p>{email || 'NA'} </p>
              <p>{education && education.length > 0 ? education.join(', ') : 'NA'}</p>
              <p>{skills && skills.length >0 ? skills.join(', '): 'NA'}</p>
              <p>{language && language.length > 0 ? language.join(', ') : 'NA'}</p>
            </div>
          </div>
     
        </div>
      </div>
      <div className="col-lg-3">
        <div className="bg-white rounded shadow-sm p-3">
          <div className="text-center">
            <img
              src={profile || 'NA'}
              height={"100px"}
              width={"100px"}
              className="img-rounded-circle me-1"
              alt="img"
            />
            <div>
              Verified <i className="bi bi-x-circle text-danger"></i>
            </div>
            <p>{manpowerName || 'NA'}</p>
          </div>
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

export default ManpowerVerification