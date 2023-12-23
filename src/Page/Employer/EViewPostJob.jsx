import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { Link, useParams } from "react-router-dom";
//import process.env.REACT_APP_API_KEY from "../../config";
import axios from "axios";

function EViewPostJob() {
  const [postJobs, setPostJobs] = useState([])
  const { id, orderId } = useParams();
  console.log(id, orderId)

  useEffect(() => {
    // Fetch data from the API using the id and orderId
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/getPostByEmployerId/OrderId?employerId=${id}&orderId=${orderId}`)
      .then((response) => {
        const data = response?.data?.data;
        setPostJobs(data)
        console.log(data?.obj)
        // filter specic employer --------
        // const filteredJobs = data?.obj?.filter((job) => job?._id === id && job?.orderId === orderId);
        // console.log(filteredJobs)
        // if (filteredJobs.length > 0) {
        //   setPostJobs(filteredJobs);
        // } else {
        //   console.log("No matching records found");
        // }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, orderId]);


  
  //const {employerName,  mobile,  fullTime, obj=[] } =  postJobs
  //const { explainYourWork, job_desc, maxSalary, miniSalary, no_Of_opening, siteLocation } = obj[0] || 'NA'
  
  const {
    employerName,
    mobile,
    category,
    fullTime,
    maxSalary,
    miniSalary,
    explainYourWork,
    job_desc,
    siteLocation,
    no_Of_opening,
    city,
    skills=[],
    obj = []
  } = postJobs 
  console.log(postJobs)

  const {
  } = obj
  


  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Post Jobs" />
          <div className="col-lg-12">
            <div className="bg-white rounded shadow-sm p-3">
              <div className="d-flex justify-content-end">
                <div>
                  <button
                    className="btn-cancel"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    close
                  </button>
                  <button className="btn-style">Inactive</button>
                </div>
              </div>
              <hr />
              <h5>{employerName || 'NA'}</h5>
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
              <b>Job Desctiption :</b> {job_desc || 'NA'}
            </p>
            <p>
              <b>num Of Openings :</b> {no_Of_opening || 'NA'}
            </p>
            <p>
              <b>City:</b> {city || 'NA'}
            </p>
            <p>
              <b>minSalary :</b> ${miniSalary || 'NA'}
            </p>
            <p>
              <b>maxSalary :</b> ${maxSalary || 'NA'}
            </p>
            <p>
              <b>Language : </b> Hindi,English
            </p>
            <p>
              <b>skills : </b> { skills && skills.length >0 ? skills.join(', ') : 'NA' }
            </p>
            <p>
              <b>Type : </b> {fullTime || 'NA'  }
            </p>
            <p> <b>Address</b> : {siteLocation || 'NA'}</p>
            <p><b>Experience : </b> 6 Months , 5 Days </p>
            
   

              {/* accordian */}

              <h6>Amount Paid</h6>
              <p className="text-success">550000 Rs.</p>

              {/* accordian */}
              <div
                className="accordion accordion-flush my-3 border"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Participates (10)
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col-table">S.NO</th>
                            <th scope="col-table">Name</th>
                            {/* <th scope="col-table">Status</th> */}
                            <th scope="col-table">Gender</th>
                            <th scope="col-table">Mobile</th>
                            {/* <th scope="col-table">Email</th> */}
                            <th scope="col-table">Apply Date</th>
                            <th scope="col-table">View</th>
                            <th scope="col-table">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                           
                            <th scope="row">
                              1{" "}
                              <span>
                                {" "}
                                
                              </span>
                            </th>
                            <td>Amit</td>
                            {/* <td>
                              <button className="status bg-success">
                                active
                              </button>
                            </td> */}
                            <td>Male</td>
                            <td>8700282172</td>
                            {/* <td>ak7280032@gmail.com</td> */}
                            <td>23-05-2023</td>
                            <td>
                              {/* <DropDown/> */}
                              <Link to={`/appliedJobSinglePost/${id}/${orderId}`}>
                                <i className="bi bi-eye-fill text-success fs-5"></i>
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
          {/* <div classNameName="col-lg-3">
                <div classNameName="bg-white rounded shadow-sm p-3">
                  <div classNameName="text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      height={"100px"}
                      width={"100px"}
                      classNameName="img-rounded-circle me-1"
                      alt="img"
                    />
                    <div>
                      Verified{" "}
                      <i classNameName="bi bi-check-circle-fill text-success"></i>
                    </div>
                    <div>Amit kumar</div>
                  </div>
                  <div classNameName="d-flex justify-content-evenly">
                    <div classNameName="border text-center rounded p-2">
                      <div>
                        {" "}
                        <b>200</b>
                      </div>
                      <span>Job Posted</span>
                    </div>
                    <div classNameName="border text-center rounded p-2">
                      <div>
                        {" "}
                        <b>100</b>
                      </div>
                      <span>Job Hired</span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>
                      <i classNameName="bi bi-telephone-fill text-success fs-5"></i>{" "}
                      8700282172
                    </div>
                    <div>
                      <i classNameName="bi bi-envelope-fill color fs-5"></i>{" "}
                      ak7280032@gmail.com
                    </div>
                  </div>
                </div>
              </div> */}
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

export default EViewPostJob;
