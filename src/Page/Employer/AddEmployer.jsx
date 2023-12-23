import { React, useState } from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";

function AddEmployer() {
  const [formData, setFormData] = useState({
    employerName: "",
    siteLocation: "",
    email: "",
    mobile: "",
    pinCode: "",
    GST_Number: "",
    registration_Number: "",
    city: "",
    state: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6IjY0ZjAzZTA0M2Y1ZjhhN2ZjNzhjZTMzYiIsImlhdCI6MTY5MzQ4MDE1NH0.hJCc8KZ0nDgpP8KqZD0ntLWxAkUqltl4uuBgBfQQdJU";
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_KEY}/api/v1/employer/registrationthroughAdmin`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="col-xl-10 bg mainContainer">
      <div className="row justify-content-center">
        <Navbar heading="Add Employer" />
        <div className="col-lg-12 my-3">
          <h6 className="yellow">Personals Details</h6>
          <div className="rounded-2 shadow p-3 bg-white">
            <div className="row">
              <div className="col-lg-4 my-2">
                <label className="form-label">Full Name*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.employerName}
                  name="employerName"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Upload Profile Picture*</label>
                <input
                  required
                  // onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Upload Profile"
                // value={formData.fullName}
                // name="fullName"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Address*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={formData.siteLocation}
                  name="siteLocation"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Email*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  name="email"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Mobile*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="PinCode"
                  value={formData.mobile}
                  name="mobile"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">pinCode*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="PinCode"
                  value={formData.pinCode}
                  name="pinCode"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">GST Number*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="GST Number"
                  value={formData.GST_Number}
                  name="GST_Number"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Registration Number*</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Registration Number"
                  value={formData.registration_Number}
                  name="registration_Number"
                />
              </div>
              <div className="col-lg-4">
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  name="city"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.city}
                >
                  <option value="">Select City</option>
                  {/* Populate options dynamically from API if needed */}
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              <div className="col-lg-4">
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  name="state"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.state}
                >
                  <option value="">Select State</option>
                  {/* Populate options dynamically from API if needed */}
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              {/* <div className="col-lg-4 my-2">
                <label className="form-label">Country*</label>
                <select
                  name="country"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.country}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Education*</label>
                <select
                  name="education"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.education}
                >
                  <option value="">Select Education</option>
                  <option value="BCA">BCA</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Passing Year*</label>
                <select
                  name="passingYear"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.passingYear}
                >
                  <option value="">Select Year</option>
                  <option value="2010">2010</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Age*</label>
                <input
                  required
                  onChange={handleChange}
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Age"
                  name="age"
                  value={formData.age}
                />
              </div> */}
              <div className="col-lg-4 my-2">
                <label className="form-label">Gender*</label>
                <select
                  name="gender"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.gender}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              {/* <div className="col-lg-4 my-2">
                <label className="form-label">Date Of Birth*</label>
                <input
                  required
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                  placeholder="Enter Your DOB"
                  name="dob"
                  value={formData.dob}
                />
              </div> */}
            </div>
          </div>
          <div className="text-center">
              <button
                onClick={handleSubmit}
                className="btn button-style my-3"
              >
                Submit
              </button>
            </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}
        <div className="col-lg-12 my-3">
          <h6 className="yellow">Documents</h6>
          <div className="rounded-2 shadow p-3 bg-white">
            <div className="row">
              <div className="col-lg-4 my-2">
                <label className="form-label">Pan card No.(Optional)</label>
                <input
                  required
                  // onChange={(e) => setPanNumber(e.target.value)}
                  // value={panNumber}
                  type="text"
                  className="form-control"
                  placeholder="pan card number"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">upload Image(pan card)</label>
                <input
                  required
                  // onChange={(e) => setPanImage(e.target.value)}
                  // value={panImage}
                  name="panImage"
                  type="url"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Aadhar No.*</label>
                <input
                  required
                  // onChange={(e) => setANumber(e.target.value)}
                  // value={aNumber}
                  type="text"
                  placeholder="adhar number"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">upload Image(Adhar card)</label>
                <input
                  required
                  // onChange={(e) => setAImage(e.target.value)}
                  // value={newAImage}
                  type="url"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
        <div className="my-2">
          <p style={{ fontSize: "13px" }}>
            <input
              required
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckboxChange}
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
            <button
              onClick={handleSubmit}
              className="btn button-style my-3 mx-2"
            >
              Submit
            </button>
            {/* <button className="btnStyle">Post</button> */}
          </div>
          {/* <button onClick={handleSubmit} className="btn button-style my-3">
            Submit
          </button> */}
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployer;




//     {/* second */}
//     {/* {step === 2 && ( */}
//     <div className="col-lg-12 my-3">
//     <h6 className="yellow">Work Details</h6>
//     <div className="rounded-2 shadow p-3 bg-white">
//       <div className="row">
//         <div className="col-lg-4 my-2">
//           <label className="form-label">location</label>
//           <input
//             required
//             type="text"
//             className="form-control"
//             placeholder="Service Location"
//             // value={serviceLocation}
//             // onChange={(e) => setServiceLocation(e.target.value)}
//           />
//         </div>
//         <div className="col-lg-4 my-2">
//           <label className="form-label">Experience</label>
//           <select
//             className="form-control"
//             // value={experience}
//             // onChange={(e) => setExperience(e.target.value)}
//           >
//             <option value="fresher">Fresher</option>
//             <option value="1">1 Year</option>
//             <option value="2">2 Year</option>
//             <option value="2">above 5 Year</option>
//             <option value="2">blew 5 Year</option>
//           </select>
//         </div>
//         <div className="col-lg-4 my-2">
//           <label className="form-label">Experience</label>
//           <select
//             className="form-control"
//             // value={type}
//             // onChange={(e) => setType(e.target.value)}
//           >
//             <option value="type">type</option>
//             <option value="PartTime">Part Time</option>
//             <option value="FullTime">Full Time</option>
//           </select>
//         </div>
//         <div className="col-lg-4 my-2">
//           <label className="form-label">Salary</label>
//           <div className="input-group">
//             <input
//               required
//               type="number"
//               className="form-control"
//               placeholder="minimum Salary"
//             //   value={minSalary}
//             //   onChange={(e) => setMinSalary(e.target.value)}
//             />
//             <input
//               required
//               type="number"
//               className="form-control"
//               placeholder="maximum Salary"
//             //   value={maxSalary}
//             //   onChange={(e) => setMaxSalary(e.target.value)}
//             />
//           </div>
//         </div>
//         {/* <Category formData={category} handleInputChange={setCategory} /> */}
//         <div className="col-lg-4 my-2">
//           <label className="form-label">Category</label>
//           <select
//             className="form-control"
//             // value={type}
//             // onChange={(e) => setType(e.target.value)}
//           >
//             <option value="type">Category</option>
//             <option value="PartTime">Plumber</option>
//             <option value="FullTime">Painter</option>
//           </select>
//         </div>
//         <div className="col-lg-4 my-2">
//           <label className="form-label">Skill</label>
//           <select
//             className="form-control"
//             // value={type}
//             // onChange={(e) => setType(e.target.value)}
//           >
//             <option value="type">Skill</option>
//             <option value="PartTime">Plumber</option>
//             <option value="FullTime">Painter</option>
//           </select>
//         </div>
//         {/* <div className="col-lg-4 my-2">
//           <label className="form-label">Skill*</label>
//           <MultiSelect
//             options={Skills}
//             value={SkillSelected}
//             onChange={setSkillSelected}
//             labelledBy="Select"
//           />{" "}
//         </div> */}
//         {/* <div className="col-lg-4 my-2">
//           <label className="form-label">Speaking Language*</label>
//           <MultiSelect
//             options={Languages}
//             value={LanguageSelected}
//             onChange={setLanguageSelected}
//             labelledBy="Select"
//           />{" "}
//         </div> */}
//          <div className="col-lg-4 my-2">
//           <label className="form-label">Language</label>
//           <select
//             className="form-control"
//             // value={type}
//             // onChange={(e) => setType(e.target.value)}
//           >
//             <option value="type">Language</option>
//             <option value="PartTime">Hindi</option>
//             <option value="FullTime">English</option>
//           </select>
//         </div>
//         <div className="col-lg-4 my-2">
//           <label className="form-label">working Days</label>
//           <select
//             className="form-control"
//             // value={type}
//             // onChange={(e) => setType(e.target.value)}
//           >
//             <option value="type">working Days</option>
//             <option value="Monday">Monday</option>
//             <option value="Monday">Tuesday</option>
//             <option value="Monday">wednesday</option>
//             <option value="Monday">thursday</option>
//             <option value="Monday">Friday</option>
//             <option value="Monday">Saturday</option>
//           </select>
//         </div>
//         {/* <div className="col-lg-4 my-2">
//           <label className="form-label">working Days*</label>
//           <MultiSelect
//             options={workingDays}
//             value={workingDaysSelected}
//             onChange={setWorkingDaysSelected}
//             labelledBy="Select"
//           />{" "}
//         </div> */}
//         {/* <div className="col-lg-4 my-2">
//           <label className="form-label">working Hour*</label>
//           <MultiSelect
//             options={workingHour}
//             value={workingHourSelected}
//             onChange={setWorkingHourSelected}
//             labelledBy="Select"
//           />{" "}
//         </div> */}
//          <div className="col-lg-4 my-2">
//           <label className="form-label">working Hour</label>
//           <select
//             className="form-control"
//             // value={type}
//             // onChange={(e) => setType(e.target.value)}
//           >
//             <option value="type">working Hour</option>
//             <option value="PartTime">09:05</option>
//             <option value="FullTime">05:09</option>
//           </select>
//         </div>
//         <div className="col-lg-12 my-2">
//           <label className="form-label">Bio</label>
//           <textarea
//             className="form-control"
//             placeholder="Write Description"
//             // value={bio}
//             // onChange={(e) => setBio(e.target.value)}
//           ></textarea>
//         </div>
//       </div>
//     </div>
//     {/* <div className="text-center">
//       <button
//         onClick={() => setStep(1)}
//         className="btn button-style my-3 mx-2"
//       >
//         Back
//       </button>
//       <button
//         onClick={() => setStep(3)}
//         className="btn button-style my-3 mx-2"
//       >
//         Next
//       </button>
//     </div> */}
//   </div>
// {/* )} */}

// {/* third */}
// {/* {step === 3 && ( */}

// {/* )} */}
