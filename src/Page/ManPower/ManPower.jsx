import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
//import process.env.REACT_APP_API_KEY from "../../config";
import { toast } from "react-toastify";



function ManPower() {
  const [manpowerData, setManpowerData] = useState([]);
  const [editManpower, setEditManpower] = useState({
    id: "",
    name: "",
  });
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false); 
  const [searchManpower, setSearchManpower] = useState("")
  const [filteredManpowerData, setFilteredManpowerData] = useState([]);
  const [selectedGenderFilter, setSelectedGenderFilter] = useState("All");
  // locatin search -----
  const [locationInput, setLocationInput] = useState("");
  // education search ---
  const [manpowerEducation, setManpowerEducation] = useState("");
  // age ranges ------
  const [minAge, setMinAge] = useState("")
  const [maxAge, setMaxAge] = useState("")
  // job type filter -----
  const [selectJobFilter, setSelectJobFilter] = useState('All')



  // delete modal

  const fetchManpowerData = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_KEY}/api/v1/manpower`;
      const response = await axios.get(apiUrl)
    
      setManpowerData(response?.data?.data);
      setFilteredManpowerData(response?.data?.data);
      setFileUploaded(response?.data?.data);
      console.log(response?.data?.data);
    } catch (error) {
      toast.error(error)
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchManpowerData();
  }, []);


  useEffect(() => {
    addSearchManpower();
    filterByAgeRange(); 
  }, [searchManpower, selectedGenderFilter, minAge, maxAge]);


  // filter ages -----------
    // function to filter manpowerData by age range
    const filterByAgeRange = () => {
      // Convert fromAge and toAge to numbers
      const fromAgeNumber = parseInt(minAge);
      const toAgeNumber = parseInt(maxAge);
  
      // Filter the data based on the age range
      const filteredData = manpowerData.filter((manpower) => {
        const age = parseInt(manpower.age);
        return (
          (!fromAgeNumber || age >= fromAgeNumber) &&
          (!toAgeNumber || age <= toAgeNumber)
        );
      });
  
      // Update the filtered data
      setFilteredManpowerData(filteredData);
    };


    //  edit manpower data -------
  const editManpowerData = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/fill/details/${editManpower.id}`, {
        manpowerName: editManpower.name,
      });
      setEditManpower({ id:"", name: "" });
      fetchManpowerData();

      toast.success("Manpower name has been changed successfully!!")
    } catch (error) {
      toast.error(error)
      console.log(error);

    }
  };

  // delete manpower data ------------
  const deleteManpower = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_KEY}/api/v1/manpower/delete/${id}`);
      fetchManpowerData();
      toast.success("Manpower record has been deleted successfully!!")
    } catch (error) {
      toast.error(error)
      console.log(error);
    }
  };

 


  // upload excel file -------
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };


  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/excel/upload/manpower`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFile(null);
      setFileUploaded(true);
      toast.success("File has been uploaded !!!")
    } catch (error) {
      toast.error(error)
      console.error(error);
    } 
 
  };

  // search by location --------
  const searchManpowerLocation = () => {
    const searchTermLowerLoc = locationInput?.toLowerCase()?.trim();
    console.log(searchTermLowerLoc);
  
    const filteredData = manpowerData?.filter((manpower) => {
      const siteLocation = manpower?.siteLocation?.toLowerCase()?.trim();
      return siteLocation?.includes(searchTermLowerLoc);
    });
  
    setFilteredManpowerData(filteredData);
    console.log(filteredData);
  };

  // search by education ------
  const searchManpowerEducation = () => {
    const searchTermLowerEduc = manpowerEducation?.toLowerCase()?.trim();
    console.log(searchTermLowerEduc);
  
    if (searchTermLowerEduc === "") {
      // If the search term is empty, reset to display all records
      setFilteredManpowerData(manpowerData);
    } else {
      const filteredEducation = manpowerData?.filter((manpower) => {
        const educationTypes = manpower?.education || [];
        return educationTypes.some((education) =>
          education.educationType?.toLowerCase()?.includes(searchTermLowerEduc)
        );
      });
  
      setFilteredManpowerData(filteredEducation);
      console.log(filteredEducation);
    }
  };
  
  
 


  // search manpower
  const addSearchManpower = () => {
    const searchTermLowerCase = searchManpower.toLowerCase().trim();
    // filter by gender ------

    const filteredData = manpowerData.filter((manpower) => {
      return (
        (selectedGenderFilter === "All" ||
          manpower.gender === selectedGenderFilter) &&
        Object.values(manpower).some((field) => {
          if (typeof field === "string") {
            return field.toLowerCase().includes(searchTermLowerCase);
          }
          return false;
        })
      );
    });

    //  filter by job filter -------
    const filteredJobFilter = manpowerData.filter((manpower) => {
      return (
        (selectJobFilter === "All" ||
          manpower.jobType === selectJobFilter) &&
        Object.values(manpower).some((field) => {
          if (typeof field === "string") {
            return field.toLowerCase().includes(searchTermLowerCase);
          }
          return false;
        })
      );
    });

    setSelectJobFilter(filteredJobFilter)

  
    setFilteredManpowerData(filteredData);
  };

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Manpower" />

        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{ overflow: "auto" }}
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
            <div className="col-lg-2 py-2">
            <span>Add Manpower</span>
             <Link to="/AddManPower"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Add</button></Link> 
            </div>

            
            <div className="col-lg-2 py-2">
              <label className="custom-file-upload">Import Data</label>
              <div className="input-group">
                <input
                  className="form-control form-control-sm"
                  type="file"
                  id="formFile"
                  onChange={handleFileChange}
                />
                <button
                  className="btn-sm btn-success btn"
                  type="button"
                  onClick={handleUpload}
                >
                  <i className="bi bi-plus"></i> Import
                </button>
              </div>
            </div>
         
            <div className="col-lg-3 py-2">
              <span>Search</span>
              <input
                type="text"
                className="form-control"
                placeholder="search"
                onChange={(e) => setSearchManpower(e.target.value)}
              />
            </div>
            <div className="container">

              <div class="row justify-content-between">
                <div class="col-lg-3">
                  <div className="row">
                    <label htmlFor="fromDate">From:</label>
                    <input type="number" className="form-control" value={minAge} placeholder="min age" onChange={(e) => setMinAge(e.target.value)} />
                  </div>
                  <div className="row">
                    <label htmlFor="toDate">To:</label>
                    <input type="number" className="form-control" value={maxAge} placeholder="max age" onChange={(e) => setMaxAge(e.target.value)} />
                  </div>

              

                
              </div>

              <div className="col-lg-3">
                <label htmlFor="">City:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location:"
                  value={locationInput}
                  onChange={(e) => {
                    setLocationInput(e.target.value);
                    // Trigger the search only when the input is not empty
                    if (e.target.value === "") {
                      setFilteredManpowerData(manpowerData); // Reset to display all records
                    } else {
                      searchManpowerLocation(); // Trigger the search with non-empty input
                    }
                  }}
                />



                <div className="row-lg-2">
                  <label htmlFor="FilterByJob Type">Filter By Job Type:</label>
                  <select
                    className="form-select"
                    value={selectJobFilter}
                    onChange={(e) =>setSelectJobFilter(e.target.value)}
                    aria-label="Filter By Job Type"
                  >
                    <option value="All">All</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Full Time">Full Time</option>
                  </select>
                </div>



              </div>



              <div className="col-lg-3">
                <label htmlFor="">Education:</label>
                <input 
                  type="text"
                  className="form-control" 
                  placeholder="Education:"
                  value={manpowerEducation}
                  onChange={(e) => {
                    setManpowerEducation(e.target.value);
                    // Trigger the search only when the input is not empty
                    if (e.target.value === "") {
                      setFilteredManpowerData(manpowerData); // Reset to display all records
                    } else {
                      searchManpowerEducation(); // Trigger the search with non-empty input
                    }
                  }} 
                />
              </div>



              <div className="col-lg-3">
                <label htmlFor="FilterByGender">Filter By Gender:</label>
                <select
                  className="form-select"
                  value={selectedGenderFilter}
                  onChange={(e) => setSelectedGenderFilter(e.target.value)}
                  aria-label="Filter By Gender"
                >
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>          


          </div>
          </div>

          </div>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Name</th>
                <th scope="col-table">Status</th>
                <th scope="col-table">Gender</th>
                <th scope="col-table">Age</th>
                <th scope="col-table">Mobile</th>
                <th scope="col-table">Category</th>
                <th scope="col-table">City</th>
                <th scope="col-table">Experience</th>
                <th scope="col-table">JobType</th>
                <th scope="col-table">Salary/rate</th>
                <th scope="col-table">Skills</th>
                <th scope="col-table">Join Date</th>
                <th scope="col-table">View</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredManpowerData.length > 0 ? (
                filteredManpowerData?.map((manpower, index) => {
                  const datesAre = new Date(manpower.createdAt).toLocaleDateString()
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{manpower.manpowerName || '-'}</td>
                      <td>{manpower.status}</td>
                      {/* ... Map other fields accordingly ... */}
                      <td>{manpower.gender || '-'}</td>
                      <td>{manpower.age || '-'}</td>
                      <td>{manpower.mobile || '-'}</td>
                      <td>{manpower.category || '-'}</td>
                      <td>{manpower.address ? manpower.address.city || '-' : '-'}</td>
                      <td>{manpower.experience || '-'}</td>
                      <td>{manpower.fullTime || '-'}</td>
                      <td>{manpower.maxSalary || '-'}</td>
                      <td>{manpower.skills ? manpower.skills.length > 0 : manpower?.skills?.map((item) => `${item}`)  ||'-'}</td>
                      <td>{datesAre}</td>
                      <td>
                        {/* <DropDown /> */}
                        <Link to={`/manPowerProfile/${manpower._id}`}>
                          <i className="bi bi-eye-fill text-success fs-5"></i>
                        </Link>
                      </td>
                      <td className="d-flex justify-content-evenly cursor">
                        <div>
                          <i
                            className="bi bi-pencil-square text-warning fs-5"
                            onClick={() =>
                              setEditManpower({
                                id: manpower._id,
                                name: manpower.manpowerName,
                              })
                            }
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                          ></i>
                        </div>
                        <div>
                          <i
                            className="bi bi-archive text-danger fs-5"
                            onClick={() => deleteManpower(manpower._id)}
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteModal${manpower._id}`}
                          ></i>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                <td colSpan="9">
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>

        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Manpower
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Form to edit employer details */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter New Name"
                  onChange={(e) =>
                    setEditManpower({ ...editManpower, name: e.target.value })
                  }
                  value={editManpower.name}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={editManpowerData}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

         {manpowerData?.map((manpower) => (
          <div
            key={manpower._id}
            className="modal fade"
            id={`deleteModal${manpower._id}`}
            tabIndex="-1"
            aria-labelledby={`deleteModalLabel${manpower._id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`deleteModalLabel${manpower._id}`}>
                    Delete Manpower
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete the manpower:
                  <strong>{manpower.manpowerName}</strong>?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      const shouldDelete = window.confirm(
                        `Are you sure you want to delete ${manpower.manpowerName}?`
                      );
                      if (shouldDelete) {
                        deleteManpower(manpower._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))} 

    

      </div>

      <div className="col-lg-11 my-3">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <p>
              Showing 1 to {manpowerData.length} of {manpowerData.length}
              Manpowers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManPower;
