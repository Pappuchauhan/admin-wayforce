import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// import process.env.REACT_APP_API_KEY from '../../config';
import StarRating from '../../Components/StarRating';


function ManPowerInstantHired() {
  const [manpowerInstantHireView, setManpowerInstantHireView] = useState([])
  const [empRating, setEmpRating] = useState(0)
  const [manRating, setManRating] = useState(0)
  const { id, orderId } = useParams()

  useEffect(() =>{

      axios
      .get(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/getManpowerWhoHaveAppliedfor/InstantOrDirect?manpowerId=${id}&instantOrDirect=instant`)
      .then((response) => {
        const data = response?.data?.posts?.[0] || {};
        setManpowerInstantHireView(data);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });


       // employer ratings ---
       axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/employer/${id}`)
       .then((response) => {
         const data = response?.data?.data;
         setEmpRating(data?.averageRating || 0);
         console.log(data)
         // console.log(data)
       })
       .catch((error) => {
         console.log(error)
       })
       // manpower rating -----
       axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/${id}`)
       .then((response) => {
         const data = response?.data?.data;
         setManRating(data?.averageRating || 0);
         console.log(data)
 
       })
       .catch((error) => {
         console.log(error)
       })

  }, [id, orderId])
  
  const {  siteLocation,mobile, category, employerName,  date, startTime, endTime, job_desc } = manpowerInstantHireView;
  const { manpowerName } = manRating

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Instant Hired" />
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm p-3">
            <button className="status bg-success">Active</button>   
              <h5 className="color">Booking Details</h5>
              <hr />
              <div className="row">
                <div className="col-lg-6 col-6">
                    <p> <b> Category </b>  </p>
                    <p><b>Date</b></p>
                    <p><b>Job Description</b></p> 
                  
                  <p><b>Booking Time / Close Time</b></p>
                <p>
                    <b>Address</b>
                  </p>
                  <p>
                    <b>Site Location</b>
                  </p>
              
                </div>
                <div className="col-lg-6 col-6">
                  <p>{category || 'NA'}</p>
                  <p>{date || 'NA'}</p>
                  <p>{job_desc || 'NA'}</p>
                  <p>{startTime || 'NA'} / {endTime || 'NA'}</p>
                  <p>{siteLocation || 'NA'}</p>
                  <p><a href={siteLocation} target="_blank">site Location</a></p>
              
                </div>
              </div>
              <div className="row">
                <h5>Work image</h5>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white rounded shadow-sm p-3">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  height={"100px"}
                  width={"100px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
                <div>
                  Verified <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="color">{employerName || 'NA'}</div>
                <div>
                  <StarRating initialRating={manRating} />
                </div>

                <p>
                  <Link to={`/manPowerProfile`}>Visit Profile</Link>
                </p>
              </div>
              <hr />
              <div>
                <div>
                  <i className="bi bi-grid text-secondary fs-5"></i>{" "}
                  {category || 'NA'}
                </div>
                <div>
                  <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                  {mobile || 'NA'}
                </div>
              </div>
            </div>
            <div className="bg-white rounded shadow-sm p-3 my-2">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  height={"100px"}
                  width={"100px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
                <div>
                  Verified <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="color">{manpowerName || 'NA'}</div>
                <div>
                <StarRating initialRating={empRating} />

                   
                </div>

                <p>
                  <Link to="/manPowerProfile">Visit Profile</Link>
                </p>
              </div>
              <hr />
              <div>
                <div>
                  <i className="bi bi-grid text-secondary fs-5"></i>  
                  {category || 'NA'}
                </div>
                <div>
                  <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                  {mobile || 'NA'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ManPowerInstantHired