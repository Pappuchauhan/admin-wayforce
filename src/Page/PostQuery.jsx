import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import { Link } from "react-router-dom";
// import process.env.REACT_APP_API_KEY from "../config";
import axios from "axios";

function PostQuery() {
  const [postData, setPostData] = useState([]);
  let serialNumber = 0;
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_KEY}/api/v1/employer/getAll`;
    
    axios.get(apiUrl)
      .then(response => {
        setPostData(response.data.data)
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // console.log(postData)
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Post Verification" />
        
       <div className="col-lg-11 bg-white rounded">
          <h6 className="p-2">Total Posts: ({postData.length})</h6>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Employer Name</th>
                <th scope="col">Category</th>
                <th scope="col">Date</th>
                <th scope="col">num of Opening</th>
                <th scope="col">Status</th>
                <th scope="col">View</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {postData?.map((post, index) => {
                const { _id, status, employerName, createdAt, obj = [] } = post;
                // const postedDate = createdAt.split("T")[0];
                let date = new Date(createdAt);
                return (
                  obj?.map((query, categoryIndex) =>{
                  const { orderId, no_Of_opening,  category } = query
                  serialNumber++; 
                    return (
                    <tr key={categoryIndex}>
                      <th scope="row">{serialNumber}</th>
                      <td>{employerName || 'NA'}</td>
                      <td>{category || 'NA'}</td>
                      <td>{date.toLocaleDateString() || 'NA'}</td>
                      <td>{no_Of_opening || 'NA'}</td>
                      <td>
                        <p className={`status bg-${status === 'pending' ? 'warning' : 'success'}`}>{status || 'NA'}</p>
                      </td>
                      <td>
                        <Link to={`/postView/${_id}/${orderId}`}>
                          <i className="bi bi-eye-fill text-success"></i>
                        </Link>
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
                    )})                   
                  )})}
                    
                
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PostQuery;