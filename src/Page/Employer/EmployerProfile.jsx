import { React, useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import "./Employer.css";
import { Link, useParams } from "react-router-dom";
//import process.env.REACT_APP_API_KEY from "../../config";
import axios from "axios";
import { toast } from "react-toastify";
import StarRating from "../../Components/StarRating";

function EmployerProfile() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [employerData, setEmployerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // search by jobs ------
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredEmployerData, setFilteredEmployerData] = useState([]);
  // const [jobsData, setJobsData] = useState([]);
  const [instantHire, setInstantHire] = useState([]);
  const [directHire, setDirectHire] = useState([]);
  const [showComments, setShowComments] = useState([])

  const [commentsLoaded, setCommentsLoaded] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    // axios.get("http://localhost:8080/api/v1/employer/64e6f3844f56a5a15b379010")
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/${id}`)
      .then((response) => {
        setEmployerData(response?.data?.data);
        // setFilteredEmployerData(response?.data?.data);
        // setIsLoading(false);

      })
      .catch((error) => {
        // setIsLoading(false);

        console.error("Error fetching data:", error);
      });

    axios
      .get(
        `${process.env.REACT_APP_API_KEY}/api/v1/employer/getCountOfPostsByEmployerId/InstantOrDirect?employerId=${id}&instantOrdirect=instant`
      )
      .then((response) => {
        setInstantHire(response?.data?.post);
        console.log(response?.data?.post?.obj);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error);
        console.log(error);
      });

    axios
      .get(
        `${process.env.REACT_APP_API_KEY}/api/v1/employer/getCountOfPostsByEmployerId/InstantOrDirect?employerId=${id}&instantOrdirect=Direct`
      )
      .then((response) => {
        setDirectHire(response?.data?.post);
        setIsLoading(false);

      })
      .catch((error) => {
        setIsLoading(false);

        console.error("Error fetching data:", error);
      });

      //  comments are ------
      axios
      .get(
        `${process.env.REACT_APP_API_KEY}/api/v1/ratingg/get/comment/employer/${id}`)
      .then((response) => {
        // const data = response?.data?.comments
        setShowComments(response?.data?.comments)
        setCommentsLoaded(true);
        // setIsLoading(false)
        console.log(response?.data?.comments)
      })

      .catch((error) => {
        setIsLoading(false);
        setCommentsLoaded(true);
        console.error("Error fetching data:", error);
      });

  }, [id]);




  const handleClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };

  // search by jobs ------
  /*
  const searchEmployees = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();

    if (searchTermLowerCase === "") {
      // Reset filtered data when the search term is empty
      setFilteredEmployerData(employerData);
    } else {
      // Filter employers by search term
      const filteredData = employerData.filter((employer) =>
        employer.employerName.toLowerCase().includes(searchTermLowerCase)
      );
      setFilteredEmployerData(filteredData);
    }
  };

  */

  // Render loading state while fetching data
  // if (!employerData) {
  //   return <p>Loading...</p>;
  // }

  const {
    mobile,
    employerName,
    email,
    status,
    profile,
    averageRating,
    obj = [],
  } = employerData

  const { category, city, pinCode, fullTime, state }  = obj[0] || {}
  console.log(obj[0])



 

  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Employer Profile" />
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
              Post Job
            </button>
            <button
              className={`${
                activeContainer === 3 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(3)}
            >
              Instant Hired
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
                activeContainer === 6 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(6)}
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
                  {/* <h5>General Details</h5> */}
                  <h5 className="color">Employer Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        <b>Employer Name</b>
                      </p>
                      <p>
                        <b>Address</b>
                      </p>
                      <p>
                        <b>Category</b>
                      </p>
                      <p>
                        <b>Business Details</b>
                      </p>
                      <p>
                        <b>Mobile Number</b>
                      </p>

                      <p>
                        <b>Email</b>
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
                        <b>Job Type</b>
                      </p>
                      <p>
                        <b>GST Number</b>
                      </p>
                      <p>
                        <b>Registration Number</b>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p>{employerData?.employerName || "N/A"}</p>
                      <p>{employerData?.siteLocation || "N/A"}</p>
                      <p>{category ||'NA'}</p>
                      <p>{employerData?.job_desc || "N/A"}</p>
                      <p>{employerData?.mobile || "N/A"}</p>
                      <p>{employerData?.email || "N/A"}</p>
                      <p>{employerData?.state || "N/A"}</p>
                      <p>{city ||"N/A"}</p>
                      <p>{pinCode || "N/A"}</p>
                      <p>{fullTime || 'NA'}</p>
                      <p>{employerData?.GST_Number || "N/A"}</p>
                      <p>{employerData?.registration_Number || "N/A"}</p>
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
                    <div>{employerName || 'NA'}</div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col">
                      <i className="bi bi-telephone-fill text-success fs-5 me-2"></i>
                      <a
                        href="tel:+918877997789"
                        className="text-decoration-none"
                      >
                        {mobile || "NA"}
                      </a>
                    </div>
                    <div className="col">
                      <i className="bi bi-envelope-fill color fs-5 me-2"></i>
                      <a
                        href="mailto:ak7280032@gmail.com"
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

                    {commentsLoaded ? (
                      showComments.length === 0 ? (
                        <div>No comments found for this employer.</div>
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
          </div>


          {/* post JOb */}

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
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <hr />

            <table className="table">
              <thead>
                <tr>
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  <td scope="col-table">Participate</td>
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  <td scope="col-table">View</td>
                  <td scope="col-table">Action</td>
                </tr>
              </thead>

              {
                isLoading ? (

                  <div className="text-center">Loading......</div>

                ) : (
                  employerData?.obj?.length === 0 ? (
                    <tr className="text-center">
                      No posts are not available.
                    </tr>
                  ): (
              <tbody>
                {employerData?.obj?.map((jobs, index) => {
                  const {
                    _id,
                    orderId,
                    job_desc,
                    category,
                    no_Of_opening,
                    date,
                  } = jobs;
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{job_desc}</td>
                      <td>{no_Of_opening}</td>
                      <td>{date}</td>

                      <td>
                        <button className="status bg-success">{status}</button>
                      </td>
                      <td>
                        <Link to={`/eViewPostJob/${id}/${orderId}`}>
                          <button className="btn-sm btn btn-success">
                            View
                          </button>
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
                  );
                })}
              </tbody>
                  )
              )}
            </table>
          </div>

          {/* Instant Hired */}
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
                  <td scope="col-table">View</td>
                  <td scope="col-table">Action</td>
                </tr>
              </thead>

            {
              isLoading ? (

                <div className="text-center">Loading......</div>

              ): (
                instantHire?.length === 0 ? (
                  <tr className="text-center">
                    No posts are not available.
                  </tr>
              ) : (
                <tbody>
                {instantHire?.map((hire, index) => {
                  const { date, job_desc, employerName, orderId } = hire;
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{job_desc}</td>
                      <td>{employerName}</td>
                      <td>{date}</td>
                      <td>
                        <button className="status bg-success">
                          active
                        </button>
                      </td>
                      <td>
                        <Link
                          to={`/employerInstantHireView/${id}/${orderId}`}
                        >
                          <button className="btn-sm btn btn-success">
                            View
                          </button>
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
                  );
                })}
              </tbody>

               ))}
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
                  <th scope="col-table">S.NO</th>
                  <th scope="col-table">Job Title</th>
                  <th scope="col-table">Manpower</th>
                  <th scope="col-table">Booking Date</th>
                  {/* <th scope="col-table">Work Date</th> */}
                  <th scope="col-table">Status</th>
                  <th scope="col-table">View</th>
                  <th scope="col-table">Action</th>
                </tr>
              </thead>

              {
                isLoading ? (

                  <div className="text-center">Loading......</div>

                ) : (
                  directHire.length === 0 ? (
                    <div className="text-center">
                      Data is not available.
                    </div>
                  ): (
                    
              <tbody>
              {directHire?.map((direct, index) => {
                const {
                  job_desc,
                  date,
                  employerName,
                  statusOfCompletion,
                  orderId,
                } = direct;
                // console.log(direct)
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{job_desc || 'NA'}</td>

                    <td>{employerName}</td>
                    <td>{date || 'NA'}</td>
                    <td>
                      <button className="status bg-warning">
                        {statusOfCompletion || 'NA'}
                      </button>
                    </td>
                    <td>
                      <Link to={`/appliedJobSinglePost/${id}/${orderId}`}>
                        <button className="btn-sm btn btn-success">
                          View
                        </button>
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
                );
              })}
            </tbody>

                  )
                )}


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
              display: activeContainer === 6 ? "block" : "none",
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
    </>
  );
}

export default EmployerProfile;
