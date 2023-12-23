import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import { Link, useParams } from "react-router-dom";
//import process.env.REACT_APP_API_KEY from "../../config";
import axios from "axios";
import StarRating from "../../Components/StarRating";
import { CgProfile } from "react-icons/cg"

function ManPowerProfile() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [manpowerData, setManpowerData] = useState([]);
  const [manpowerApplied, setManpowerApplied] = useState([]);
  const [manInstant, setManInstant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState([])
  const [manDirect, setManDirect] = useState([]);

  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/${id}`)
      .then((response) => {
        setManpowerData(response?.data?.data);
        // setIsLoading(false);
        console.log(response?.data?.data)
      })
      .catch((error) => {
        // setIsLoading(false);
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/getManpowerWhoHave/Applied/${id}`)
      .then((response) => {  // api/v1/manpower/getManpowerWhoHave/Applied/
        setManpowerApplied(response?.data?.posts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

      axios
        .get(
          `${process.env.REACT_APP_API_KEY}/api/v1/manpower/getManpowerWhoHaveAppliedfor/InstantOrDirect?manpowerId=${id}&instantOrDirect=instant`
        )
        .then((response) => {
          setManInstant(response?.data?.posts);
          // setIsLoading(false);
          

          // const data = response?.data?.posts
          console.log(response?.data?.posts)
        })
        .catch((error) => {
          // setIsLoading(false);
          console.error(error);
        });

      axios
        .get(
          `${process.env.REACT_APP_API_KEY}/api/v1/manpower/getManpowerWhoHaveAppliedfor/InstantOrDirect?manpowerId=${id}&instantOrDirect=Direct`
        )
        .then((response) => {
          // const data = response?.data?.posts
          setManDirect(response?.data?.posts);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });


        //  comments are ------
        axios
        .get(
          `${process.env.REACT_APP_API_KEY}/api/v1/ratingg/get/comment/employer/${id}`)
        .then((response) => {
          setShowComments(response?.data?.comments)
          setCommentsLoaded(true)
          // console.log(response?.data?.comments)
        })
  
        .catch((error) => {
          setCommentsLoaded(true)
          setIsLoading(false);
          console.error("Error fetching data:", error);
        });

  }, [id]);

  const handleClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };

  if (!manpowerData) {
    return <p>Loading...</p>;
  }


    const {
      manpowerName,
      mobile,
      profile,
      status,
      email,
      averageRating,
      fullTime,
      gender,
      category,
      experience,
      panCard,
      totalRating,
      language=[],
      address = {},
    } = manpowerData;
    const { state, city, pinCode, landmark } = address;
    const manpowerLanguageAre = language?.map((item) =>  `${item}`)
    console.log(totalRating)

  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Manpower Profile" />
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
              Applied Job
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
              <div className="col-lg-8 mb-2">
                <div className="bg-white rounded shadow-sm p-3">
                  <h5 className="color">Manpower Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      <>
                        <p>
                          <b>Manpower Name</b>
                        </p>
                        <p>
                          <b>Address</b>
                        </p>
                        <p>
                          <b>Category</b>
                        </p>
                        <p>
                          <b>State</b>
                        </p>
                        <p>
                          <b>Business Details</b>
                        </p>
                       
                        <p>
                          <b>Email</b>
                        </p>
                        <p>
                          <b>City</b>
                        </p>
                        <p>
                          <b>Pin Code</b>
                        </p>
                        <p>
                          <b>Mobile</b>
                        </p>
                        <p>
                          <b>Job Type</b>
                        </p>
                        <p>
                          <b>Gender</b>
                        </p>
                        <p>
                          <b>Experience</b>
                        </p>
                        <p>
                          <b>Language</b>
                        </p>
                      </>
                    </div>
                    <div className="col-lg-6">
                      {manpowerData ? (
                        <>
                          <p>{manpowerName || "N/A"}</p>
                          <p>{landmark || "N/A"}</p>
                          <p>{category || 'NA'}</p>
                          <p>{state || "N/A"}</p>
                          <p>{'NA' || "N/A"}</p>
                          <p>{email || 'NA'}</p>
                          <p>{city || "N/A"}</p>
                          <p>{pinCode || 'NA'}</p>
                          <p>{mobile || "N/A"}</p>
                          <p>{fullTime || 'NA'}</p>
                          <p>{gender || 'NA'}</p>
                          <p>{experience || 'NA'}</p>
                          {/* <p>{manpowerLanguageAre ? manpowerLanguageAre?.join(', ') : 'NA' || null}</p> */}
                          <p>{language && language.length > 0 ?  language.join(', ') : 'NA'}</p>

                        </>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  </div>
               
                </div>

                <div className="bg-white rounded shadow-sm p-3">
                  <h5 className="color">Work Details</h5>
                  <hr />
                  <div className="row">
                      {manpowerData ? (
                        <>
                          <div className="col-lg-6">
                            <p>
                              <b>Experience</b>
                            </p>
                            <p>
                              <b>Location</b>
                            </p>
                            <p>
                              <b>Reviews</b>
                            </p>
                            <p>
                              <b>Pan card No</b>
                            </p>
                          </div>

                          <div className="col-lg-6">
                            <p>{manpowerData.experience || 'NA'}</p>
                            <p>{manpowerData.address ? manpowerData.address.city : 'NA'}</p>
                            <p>{manpowerData.totalRating}</p>
                            <p>{manpowerData.panCard || 'NA'}</p>
                          </div>
                        </>
                      ) : (
                        <p>Loading....</p>
                      )}
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
                    <div>{manpowerName || 'NA'}</div>
                  </div>
                  <hr />
                  <div>
                    <div>
                      <div className="d-flex align-items-center">
                        <span><CgProfile size={20} color="gray" /></span> {category || 'NA'}
                      </div>
                      <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                      {mobile || "NA"}
                    </div>
                    <div>
                      <i className="bi bi-envelope-fill color fs-5"></i>
                      {email || "NA"}
                    </div>
                  </div>
                  <div className="text-center">
                  <button className={`btn btn-sm ${state === "pending" ? "btn-success" : "btn-danger"}`}>
                    {status || "NA"}
                  </button>

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
                
                  <div className="bg-white rounded shadow-sm p-3 my-3">
                      <div className="d-flex justify-content-between">
                        <div>Work History:</div>
                      </div>
                      <div
                        className="p-1 border rounded"
                        style={{ height: 150, overflow: "auto" }}
                      >
                          <div className="py-1">
                            <div className="d-flex d-flex justify-content-between align-items-center">
                              <div>
                                <span>
                                  <i className="bi bi-person fs-6"></i>
                                </span>
                                <span className="fs-6">Harish</span>
                              </div>
                              <span className="fs-6">Plumber</span>
                            </div>
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
                {manpowerApplied.length > 0 ? (
                  manpowerApplied?.map((post, index) => {
                    const { obj } = post;

                    return (
                      <React.Fragment key={index}>
                        {obj?.map((applied, subIndex) => {
                          const {
                            job_desc,
                            date,
                            status,
                            siteLocation,
                            category,
                            explainYourWork,
                            lati,
                            longi,
                            instantOrdirect,
                            orderId,
                            employerName,
                            startTime,
                            endTime,
                          } = applied;
                          console.log(applied)

                          return (
                            <tr key={subIndex}>
                              <th scope="row">{index + 1}</th>
                              <td>{job_desc || "NA"}</td>
                              <td>{date || "NA"}</td>
                              <td>
                                <button className="status bg-success">
                                  {status || 'NA'}
                                </button>
                              </td>
                              <td>
                                <Link to={`/mainPowerAppliedJob/${id}`}>
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
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div>
                    <p className="text-center">Data are not available....</p>
                  </div>
                )}
              </tbody>
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
              ) :(
                manInstant?.length === 0 ? (
                  
                  <p className="text-center">
                    No posts are not available.
                  </p>
              ) : (
                <tbody>
                  {manInstant?.map((hire, index) => {
                    const { job_desc, employerName, category, orderId, date } =
                      hire;
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1} </th>
                        <td>{category || "NA"}</td>
                        <td>{employerName || "NA"}</td>
                        <td>{date || "NA"}</td>
                        <td>
                          <button className="status bg-success">active</button>
                        </td>
                        <td>
                          <Link to={`/manPowerInstantHired/${id}/${orderId}`}>
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
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  <td scope="col-table">Employee Name</td>
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  {/* <td scope="col-table">View</td> */}
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              {
                isLoading ? (

                  <div className="text-center">Loading......</div>

                ) : (
                  manDirect?.length === 0 ? (
                    <div className="text-center">
                      Data is not available.
                    </div>
                  ): (
                    <tbody>
                    {manDirect?.map((direct, index) => {
                      const { date, orderId, employerName, category } = direct;
    
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1} </th>
                          <td>{category}</td>
    
                          <td>{employerName}</td>
                          <td>{date}</td>
                          <td>
                            <button className="status bg-success">active</button>
                          </td>
                          <td>
                            <Link to={`/manPowerDirectHired/${id}/${orderId}`}>
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


          {/* wallet */}
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
      </div>
    </>
  );
}

export default ManPowerProfile;
