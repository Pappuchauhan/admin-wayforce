import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";

function MainPowerAppliedJob() {
  const [manpowerAppliedJob, setManpowerAppliedJob] = useState([]);
  const { id } = useParams();
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/getManpowerWhoHave/Applied/${id}`)
      .then((response) => {
        setManpowerAppliedJob(response?.data?.posts);
        console.log(response?.data?.posts);
        // setLoading(false)
      })
      .catch((error) => {
        // setLoading(false)

        console.error(error);
      });
  }, [id]);

  if (!manpowerAppliedJob || manpowerAppliedJob.length === 0) {
    return  (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      );
    }


  const {
    _id,
    mobile,
    employerName,
    obj = [
      {
        job_desc: "",
        siteLocation: "",
        category: "",
        explainYourWork: "",
        date: "",
        lati: "",
        longi: "",
        instantOrdirect: "",
        orderId: "",
      },
    ],
  } = manpowerAppliedJob[0];

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="MainPower Applied Job" />
        <div className="col-lg-12">
          <div className="bg-white rounded shadow-sm p-3">
            <hr />

            {
              manpowerAppliedJob.length > 0 ? (
                <div>
                    <h5>{employerName || "NA"}<button className="status bg-success">Active</button></h5>
              <h6>work Details</h6>
              <p className="border p-3 rounded">{obj[0]?.explainYourWork || "NA"}</p>
              <h5>Employee Details</h5>
              <p>
                <b>workInfo :</b> {obj[0]?.job_desc || "NA"}
              </p>
              <p>
                <b>category :</b> {obj[0]?.category || "NA"}
              </p>
              <p>
                <b>num Of Openings :</b> {obj[0]?.numOfOpenings || "NA"}
              </p>
              <p>
                <b>minSalary :</b> {obj[0]?.minSalary || "NA"}
              </p>
              <p>
                <b>maxSalary :</b> {obj[0]?.maxSalary || "NA"}
              </p>
              <p>
                <b>Language :</b> {obj[0]?.language || "NA"}
              </p>
              <p>
                <b>skills :</b> {obj[0]?.skills || "NA"}
              </p>
              <p>
                <b>Type :</b> {obj[0]?.type || "NA"}
              </p>
              <p>
                <b>Address :</b> {obj[0]?.siteLocation || "NA"}
              </p>
              <p>
                <b>Experience :</b> {obj[0]?.experience || "NA"}
              </p>
                  </div>
              ) : (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )
            }
              
                       
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPowerAppliedJob;
