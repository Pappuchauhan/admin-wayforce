import React, { useEffect, useState } from "react";
import Navbar from "./Home/Navbar";
// import process.env.REACT_APP_API_KEY from "../config";
import axios from "axios";
import { useParams } from "react-router-dom";


function PostView() {

  const {id, orderId} = useParams()

  const [viewPosts, setViewPosts] = useState([])

  useEffect(() => {
    // Fetch data from the API
    // axios.get("http://localhost:8080/api/v1/employer/64e6f3844f56a5a15b379010")
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/getPostByEmployerId/OrderId?employerId=${id}&orderId=${orderId}`)
      .then((response) => {
        console.log(response.data.data)
        setViewPosts(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
     }, [id, orderId]);
  

    const {employerName, explainYourWork, fullTime, job_desc, pinCode, state, city, no_Of_opening, maxSalary, miniSalary, skills=[], siteLocation, category} = viewPosts


  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="View Post" />
        <div className="col-lg-10 my-2">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex justify-content-between">
              <div>Project ID</div>
              <div>
              <button className="btn btn-warning mx-1">Edit</button>
                <button className="btn btn-danger">Hold</button>
                <button className="btn-style">Verify</button>
              </div>
            </div>
            {/* <h6>Carpenter</h6>
            <p className="color">
              <i className="bi bi-currency-rupee"></i>14000 -{" "}
              <i className="bi bi-currency-rupee"></i>25000
            </p> */}
            <h5>{employerName|| 'NA'}</h5>
            <h6>work Details</h6>
            <p className="border p-3 rounded">
              {explainYourWork || 'NA'}
            </p>     
           
            <h5>Employee Details</h5>
            <p>
              <b>workInfo :</b> job
            </p>
            <p>
              <b>category :</b> {category || 'NA'}
            </p>
            <p>
              <b>City:</b>{city || 'NA'}
            </p>
            <p>
              <b>State: </b> {state || 'NA'}
            </p>
            <p>
              <b>num Of Openings :</b> {no_Of_opening || 'NA'}
            </p>
            <p>
              <b>minSalary :</b> {miniSalary || 'NA'}
            </p>
            <p>
              <b>maxSalary :</b> {maxSalary || 'NA'}
            </p>
            <p>
              <b>PinCode :</b> {pinCode || 'NA'}
            </p>
            <p>
              <b>Language : </b> Hindi,English
            </p>
            <p>
              <b>skills : </b> {skills && skills.length >0 ? skills?.map((item) => `${item}`) :  'NA'}
            </p>
            <p>
              <b>Type : </b> {fullTime || 'NA'}
            </p>
            <p> <b>Address</b> : {siteLocation || 'NA'}</p>
            <p><b>Experience : </b> 6 Months , 5 Days </p>
            
            <h6>Amount Paid</h6>
            <p className="text-success">550000 Rs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostView;
