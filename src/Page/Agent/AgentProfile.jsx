import { React, useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../../Components/StarRating";

function AgentProfile() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [agentData, setAgentData] = useState([])
  const {id} = useParams()
  const [showComments, setShowComments] = useState([])

  const [commentsLoaded, setCommentsLoaded] = useState(false);
  useEffect(() => {
    // get by particular record id ------
    axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/agentt/getAgentById/${id}`)
    .then((response) =>{
      setAgentData(response.data.data)
    })
    .catch((error) =>{
      console.error(error)
    })


    // comments are ------

    axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/ratingg/get/comment/employer/${id}`)
    .then((response) =>{
      console.log(response.data.comments)
      setCommentsLoaded(true)

      setShowComments(response.data.comments)
    })
    .catch((error) =>{
      setCommentsLoaded(true)
      console.error(error)
    })

  }, [id])

  const handleClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };



  const {agentName,profile, agentAddress, city, email, mobile,status, state, pinCode, averageRating, GST_Number, registration_Number } = agentData || {}

  

  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Agent Profile" />
          <div className="col-lg-11 my-2">
            <button
              className={`${
                activeContainer === 1 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(1)}
            >
              General Details
            </button>
            <button
              className={`${
                activeContainer === 2 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(2)}
            >
              Participate
            </button>

            <button
              className={`${
                activeContainer === 4 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(4)}
            >
              Direct Hired
            </button>
            <button
              className={`${
                activeContainer === 5 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(5)}
            >
              Wallet
            </button>
            <button
              className={`${
                activeContainer === 3 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(3)}
            >
              Ledger
            </button>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeContainer === 1 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="bg-white rounded shadow-sm p-3">
                  <h5 className="color">Agent Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        <b>Agent Name</b>
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
                      <p>{agentAddress || 'NA'}</p>
                      <p>{state || 'NA'}</p>
                      <p>{city || 'NA'}</p>
                      <p>{pinCode || 'NA'}</p>
                      <p>{GST_Number || 'NA'}</p>
                      <p>{registration_Number || 'NA'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
                      Verified
                      <i className="bi bi-check-circle-fill text-success"></i>
                    </div>
                    <div>{agentName || 'NA'}</div>
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
                      <a
                        href={`tel:+91${mobile}`}
                        className="text-decoration-none"
                      >
                        {mobile || "NA"}
                      </a>
                    </div>
                    <div>
                      <i className="bi bi-envelope-fill color fs-5"></i>{" "}
                      <a
                        href={`mailto:${email}`}
                        className="text-decoration-none"
                      >
                        {email || "NA"}
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn-danger btn btn-sm">{status || 'NA'}</button>
                  </div>
                </div>

                <div className="bg-white rounded shadow-sm p-3 my-3">
                  <div className="d-flex justify-content-between">
                    <div>Reviews({showComments.length})</div>
                    <div>
                      <StarRating initialRating={averageRating} />
                    </div>
                  </div>
                  <div
                    className="p-1 border rounded"
                    style={{ height: 150, overflow: "auto" }}
                  >
                    {
                  commentsLoaded ? (
                    showComments.length === 0 ? (
                      <div>No comments found for this Manpower.</div>
                    ) : (
                      showComments?.map((item, ind) => (

                      <div className="py-1" key={ind}>
                        <div className="d-flex d-flex justify-content-between align-items-center">
                          <div>
                            <span>
                              <i className="bi bi-person fs-6"></i>
                            </span>
                            <span className="fs-6">{item.user}</span>
                          </div>
                          <span className="fs-6">{item.userType.charAt(0).toUpperCase()+item.userType.slice(1)}</span>
                        </div>
                          {item.comment}
                      </div>
                    )))
                    ) : (
                      <div>Loading comments...</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Participate JOb */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 2 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row justify-content-between">
              <div className="col-lg-2 py-2">
                <span>Show Entries</span>
                <select name="" className="form-control" id="">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                </select>
              </div>
              <div className="col-lg-3 py-2">
                <span>Search</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                />
              </div>
            </div>
            <hr />

            <table className="table">
              <thead>
                <tr>
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  {/* <td scope="col-table">Participate</td> */}
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  <td scope="col-table">View</td>
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  {/* <td>10</td> */}
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/agentParticipateView"}>
                      <button className="btn-sm btn btn-success"> View</button>
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

          {/* direct hired */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 4 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row justify-content-between">
              <div className="col-lg-2 py-2">
                <span>Show Entries</span>
                <select name="" className="form-control" id="">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                </select>
              </div>
              <div className="col-lg-3 py-2">
                <span>Search</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                />
              </div>
            </div>
            <hr />

            <table className="table">
              <thead>
                <tr>
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  <td scope="col-table">Employee Name</td>
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  {/* <td scope="col-table">View</td> */}
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  <td>Amit Kumar</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/AgentDirectHiredView"}>
                      <button className="btn-sm btn btn-success"> View</button>
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
          {/* Wallet */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 5 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row justify-content-between p-4">
              <div className="text-center">
                <i className="bi bi-wallet-fill yellow fs-1"></i>
                <div>Total Blance</div>
                <h2>
                  {" "}
                  <i className="bi bi-currency-rupee"></i>
                  {"10000"}
                </h2>
              </div>
              <div className="">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-3">
                    <h5>History</h5>
                  </div>
                  <div className="col-lg-3">
                    <select name="" id="" className="form-control">
                      <option value="">Filter</option>
                      <option value="">date</option>
                      <option value="">month</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-danger fw-bold mt-3">-1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-success fw-bold mt-3">+1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-danger fw-bold mt-3">-1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-success fw-bold mt-3">+1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-danger fw-bold mt-3">-1000</div>
                </div>
              </div>
            </div>
          </div>
          {/* Ledger */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 3 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row justify-content-between">
              <div className="col-lg-2 py-2">
                <span>Show Entries</span>
                <select name="" className="form-control" id="">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                </select>
              </div>
              <div className="col-lg-3 py-2">
                <span>Search</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                />
              </div>
              {/* <div className="col-lg-3 py-2">
                <span>Add New Customer</span>
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {" "}
                  <i className="bi bi-plus"></i> Add customer
                </button>
              </div> */}
            </div>
            <hr />

            <table className="table">
              <thead>
                <tr>
                  <th scope="col-table">S.NO</th>
                  {/* <td scope="col-table">Participate</td> */}
                  <th scope="col-table">Date / Time</th>
                  <th scope="col-table">Project Id</th>
                  <th scope="col-table">Payment mode</th>
                  <th scope="col-table">Amount</th>
                  <th scope="col-table">Balance</th>
                  {/* <th scope="col-table">status</th> */}
                  <th scope="col-table">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                 
                  <td>10-feb-2023 <br /> 10:45</td>
                  <td>
                    <div className="">1234567890</div>
                  </td>
                  <td>
                    Online
                   </td>
                 

                  <td>
                    <div className="fw-bold">
                      <i className="bi bi-currency-rupee"></i>50000.00
                    </div>
                    <div className=""> RUPEES</div>
                  </td>
                  <td>
                    <div className="fw-bold text-danger">
                      -<i className="bi bi-currency-rupee"></i>2700
                    </div>
                    <div className=""> RUPEES</div>
                  </td>
                  {/* <td>
                    <button className="status  bg-success">paid</button>
                  </td> */}
                  <td className="d-flex justify-content-evenly cursor">
                    <div>
                      <i className="bi bi-pencil-square text-warning fs-2"></i>
                    </div>
                    <div>
                      <i className="bi bi-archive text-danger fs-2"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* form */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
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
              <div className="row">
                <div className="col-6">
                  <label htmlFor="">Name And / Project Id</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    placeholder="Enter Project Id"
                    className="form-control my-2"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Date / Time</label>
                  <input type="Date" placeholder="" className="form-control" />
                  <input
                    type="time"
                    placeholder=""
                    className="form-control my-2"
                  />
                </div>
                <div className="my-2 col-6">
                  <label htmlFor="">Status</label>
                  <select name="" className="form-control" id="">
                    <option value="">Paid</option>
                    <option value="">Pending</option>
                    <option value="">Cancel</option>
                  </select>
                </div>
              <div className="my-2 col-6">
                <label htmlFor="">Amount</label>
                <input type="number" placeholder="" className="form-control" />
              </div>
              <div className="my-2 col-6">
                <label htmlFor="">Balance</label>
                <input type="number" placeholder="" className="form-control" />
              </div>
              <div className="my-2 col-6">
                <label htmlFor="">Comm.Amount</label>
                <input type="number" placeholder="" className="form-control" />
              </div>
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

export default AgentProfile;
