import React, {  useState } from "react";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";
import Navbar from "../Home/Navbar";

const body = {
  manpowerName:"",

  // mobile:"",
  // city:"",
  // pinCode:"",
  // landmark:"",
  // postOffice:"",
  // village:"",
  // block:"",
  // age:"",
  // dob:"",
  // email:"",
  // bio:"",
  // siteLocation:"",  
}
function AddManPower({ userId }) {
  const [formData, setFormData] = useState(body)









  //  profile picture -------
  /*
  const handleProfilePictureUpload = (e) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/upload`, formData)
      .then((response) => {
        console.log("Upload Successful:", response.data);
        setFormData((prevData) => ({
          ...prevData,
          profilePicture: response.data.url,
        }));
      })
      .catch((error) => {
        console.error("Upload Error:", error);
      });
  };
  */

  const handleFormSubmit = async (e) => {
    // const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6IjY0ZjU3MTQxNmRkNzBkNjFkOTYyZDNmOSIsImlhdCI6MTY5MzgwNjkyNH0.FkJIl2U0-LcfQNO8MGF0WIcKOcvkvZ5PBQDO-YaYLXk";
    e.preventDefault();
    console.log('clicked')

    try { 
      console.log(body)
      const response = await axios.post(
        `https://way-force-nu.vercel.app/api/v1/manpower/registrationManpowerAdmin`,
          body
        ); 
      console.log("API Response:", response.data);

    } catch (error) {
      console.error("API Error:", error);
    }
  };


  // Access nested fields in the handleInputChange function
const handleInputChange = (e) => {
  console.log(e.target)
  const { name, value } = e.target;
  console.log(name, value)
  // Handle nested fields
  if (name.includes(".")) {
    const [parentField, childField] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [parentField]: {
        ...prevData[parentField],
        [childField]: value,
      },
    }));
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};


/*
const handleFormSubmit = async (e) => {
  // console.log(e)
 // const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6IjY0ZjAzZTA0M2Y1ZjhhN2ZjNzhjZTMzYiIsImlhdCI6MTY5MzQ4MDE1NH0.hJCc8KZ0nDgpP8KqZD0ntLWxAkUqltl4uuBgBfQQdJU";
  e.preventDefault();
  try {
   
    const response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/api/v1/manpower/registrationManpowerAdmin`,
      formData,
      // {
      //   headers: {
      //     Authorization: `Bearer ${userToken}`,
      //   },
      // }
    );
    console.log("API Response Status:", response.status);
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("API Error:", error);
  }

};
*/

  

  return (
    <div className="col-xl-10 bg mainContainer">
      <div className="row justify-content-center">
        <Navbar heading="Add ManPower" />

        <form onSubmit={handleFormSubmit}>

          <div className="col-lg-12 my-3">
            <h6 className="yellow">Personals Details</h6>
            <div className="rounded-2 shadow p-3 bg-white">
              <div className="row">
                <div className="col-lg-4 my-2">
                  <label className="form-label">Full Name*</label>
                  <input
                    required
                    onChange={(e) =>handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="fullName"
                    value={formData.manpowerName}
                    name="manpowerName"
                  />
                </div>
                {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Upload Profile Picture*</label>
                  <div className="input-group">
                    <input
                      onChange={handleInputChange}
                      type="url"
                      className="form-control"
                      value={formData.profilePicture}
                      placeholder="profile picture"
                    />
                    <label htmlFor="profilePicture" className="upload-label">
                      <img src="" alt="Upload" className="upload-icon" /> Upload
                    </label>
                    <input
                      type="file"
                      id="profilePicture"
                      className="hidden-input"
                      accept="image/*"
                      onChange={handleProfilePictureUpload}
                    />
                  </div>
                </div> */}
                {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Mobile*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="number"
                    className="form-control"
                    placeholder="mobile"
                    value={formData.mobile}
                    name="mobile"
                  />
                </div>

                <div className="col-lg-4 my-2">
                  <label className="form-label">Email*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="email"
                    className="form-control"
                    placeholder="email"
                    value={formData.email}
                    name="email"
                  />
                </div>

                <div className="col-lg-4 my-2">
                  <label className="form-label">Site Location*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="fullName"
                    value={formData.siteLocation}
                    name="siteLocation"
                  />
                </div>
              
                <div className="col-lg-4 my-2">
                  <label className="form-label">Landmark*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="Landmark"
                    value={formData.landmark}
                    name="landmark"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Village*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="Village"
                    value={formData.village}
                    name="village"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Post Office*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="Post Office"
                    value={formData.postOffice}
                    name="postOffice"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">pinCode*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="pinCode"
                    value={formData.pinCode}
                    name="pinCode"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Block*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    className="form-control"
                    placeholder="Block"
                    value={formData.block}
                    name="block"
                  />
                </div> */}
                {/* <div className="col-lg-4">
                  <label htmlFor="">City</label>
                  <select name="city" value={formData.city} className="form-control" id="" onChange={handleInputChange}>
                    <option value="city">Select City</option>
                    <option value="Noida">Noida</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <label htmlFor="">State</label>
                  <select name="state" value={formData.state} className="form-control" id="" onChange={handleInputChange}>
                    <option value="state">State</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
            
                <div className="col-lg-4 my-2">
                  <label className="form-label">Country*</label>
                  <select
                    name="country"
                    className="form-control"
                    value={formData.country}
                    required
                    onChange={handleInputChange}
                  >
                    <option value="select Country">select Country</option>
                    <option value="India">India</option>
                  </select>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Education*</label>
                  <select
                    className="form-control"
                    id=""
                    value={formData.education}
                    name="education"
                    onChange={handleInputChange}
                  >
                    <option value="select Education">select Education</option>
                    <option value="BCA">BCA</option>
                  </select>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Passing Year*</label>
                  <select
                    value={formData.yearOfPassing}
                    name="yearOfPassing"
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">select Year</option>
                    <option value="2010">2010</option>
                  </select>
                </div> */}
                {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Age*</label>
                  <input
                    onChange={(e) => handleInputChange(e)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Your Age"
                    value={formData.age}
                    name="age"
                  />
                </div> */}
                {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Gander*</label>
                  <select
                    className="form-control"
                  value={formData.gender}
                  name="gender"
                  onChange={handleInputChange}
                  >
                    <option value="Select Gander">Select Gander</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                  </select>
                </div> */}
                {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Date Of Birth*</label>
                  <input
                    required
                    onChange={(e) => handleInputChange(e)}
                    type="date"
                    className="form-control"
                    placeholder="Enter Your DOB"
                    value={formData.dob}
                    name="dob"
                  />
                </div> */}
              </div>
            </div>
          
          </div>

          {/* second */}
          {/* <div className="col-lg-12 my-3">
            <h6 className="yellow">Work Details</h6>
            <div className="rounded-2 shadow p-3 bg-white">
              <div className="row">
                <div className="col-lg-4 my-2">
                  <label className="form-label">location</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Service Location"
                    value={formData.serviceLocation}
                    onChange={handleInputChange}
                    name="serviceLocation"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Experience</label>
                  <select
                    className="form-control"
                    value={formData.experience}
                    onChange={handleInputChange}
                    name="experience"
                  >
                    <option value="fresher">Fresher</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Year</option>
                    <option value="2">above 5 Year</option>
                    <option value="2">blew 5 Year</option>
                  </select>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Job Type</label>
                  <select
                    className="form-control"
                    value={formData.type}
                    onChange={handleInputChange}
                    name="type"
                  >
                    <option value="type">type</option>
                    <option value="PartTime">Part Time</option>
                    <option value="FullTime">Full Time</option>
                  </select>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Salary</label>
                  <div className="input-group">
                    <input
                      required
                      type="number"
                      className="form-control"
                      placeholder="minimum Salary"
                      value={formData.minSalary}
                      onChange={handleInputChange}
                      name="minSalary"
                    />
                    <input
                      required
                      type="number"
                      className="form-control"
                      placeholder="maximum Salary"
                      value={formData.maxSalary}
                      onChange={handleInputChange}
                      name="maxSalary"
                    />
                  </div>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    value={formData.category}
                    onChange={handleInputChange}
                    name="category"
                  >
                    <option value="Category">Category</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Painter">Painter</option>
                  </select>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Job Type</label>
                  <select
                    className="form-control"
                    value={formData.jobType}
                    onChange={handleInputChange}
                    name="jobType"
                  >
                    <option value="type">Job Type</option>
                    <option value="PartTime">PartTime</option>
                    <option value="FullTime">FullTime</option>
                  </select>
                </div>
            
                <div className="col-lg-4 my-2">
                  <label className="form-label">Language</label>
                  <select
                    className="form-control"
                    value={formData.language}
                    onChange={handleInputChange}
                    name="language"
                  >
                    <option value="Language">Language</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">working Days*</label>
                  <select
                    className="form-control"
                    name="workingDays"
                    value={formData.workingDays}
                    onChange={handleInputChange}
                  >
                    <option value="">Select working Days</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
                
                <div className="col-lg-4 my-2">
                  <label className="form-label">working Hour</label>
                  <select
                    className="form-control"
                    value={formData.workingHours}
                    onChange={handleInputChange}
                    name="workingHours"
                  >
                    <option value="working Hour">working Hour</option>
                    <option value="09:05">09:05</option>
                    <option value="05:09">05:09</option>
                  </select>
                </div>
                <div className="col-lg-12 my-2">
                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    placeholder="Write Description"
                    onChange={handleInputChange}
                    value={formData.bio}
                    name="bio"
                  ></textarea>
                </div>
              </div>
            </div>
          
          </div> */}
          {/* )} */}

          {/* third */}
          {/* <div className="col-lg-12 my-3">
            <h6 className="yellow">Documents</h6>
            <div className="rounded-2 shadow p-3 bg-white">
              <div className="row">
                <div className="col-lg-4 my-2">
                  <label className="form-label">Pan card No.(Optional)</label>
                  <input
                    required
                    onChange={handleInputChange}
                    value={formData.panNumber}
                    type="text"
                    name="panNumber"
                    className="form-control"
                    placeholder="pan card number"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">upload Image(pan card)</label>
                  <input
                    required
                    onChange={handleInputChange}
                    value={formData.panCard}
                    name="panCard"
                    type="url"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">Aadhar No.*</label>
                  <input
                    required
                    onChange={handleInputChange}
                    value={formData.aadharCard}
                    type="text"
                    name="aadharCard"
                    placeholder="adhar number"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-4 my-2">
                  <label className="form-label">upload Image(Aadhar card)</label>
                  <input
                    required
                    onChange={handleInputChange}
                    value={formData.uploadAadharCard}
                    type="url"
                    name="uploadAadharCard"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="my-2">
              <p style={{ fontSize: "13px" }}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=" input required Accent"
                />{" "}
                I Accept{" "}
                <span>
                  <Link to={"/"} className="yellow">
                    Terms & Condition
                  </Link>{" "}
                </span>
                And{" "}
                <span>
                  <Link className="yellow" to={"/"}>
                    Privacy Policy*
                  </Link>
                </span>
              </p>
              <div className="text-center">
              
              </div>

         
            </div>
          </div> */}
          <div className="text-center">
                <button
                  type="submit"
                  className="btnStyle"
                >
                  Submit
                </button>
              </div>
        </form>

      </div>
    </div>
  );
}

export default AddManPower;
