import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
//import process.env.REACT_APP_API_KEY from "../../config";
import { toast } from "react-toastify";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import DateRangeModal from "../../Components/DateRangeModal";


function Employer() {
  const [employerData, setEmployerData] = useState([]);
  const [editEmployer, setEditEmployer] = useState({
    id: "",
    name: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenderFilter, setSelectedGenderFilter] = useState("All");
  const [filteredEmployerData, setFilteredEmployerData] = useState([]);
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  // calendar -----
  const [startDate,setStartDate]= useState(new Date());
  const [endDate,setEndDate]= useState(new Date());
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);

  const toggleDateRange = () => {
    setIsDateRangeVisible(!isDateRangeVisible);
  };


    const fetchEmployerData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_KEY}/api/v1/employer/getAll`;
        const response = await axios.get(apiUrl);
        setEmployerData(response.data.data);
        setFilteredEmployerData(response.data.data);
        setFileUploaded(response.data.data)

        console.log(response.data.data)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    useEffect(() => {
      fetchEmployerData();
    }, []);
  
    useEffect(() => {
      searchEmployees();
    }, [searchTerm, selectedGenderFilter]);


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

    

  // edit employer --------
  const editEmployerData = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_KEY}/api/v1/employer/update/Employer/${editEmployer.id}`,
        {
          employerName: editEmployer.name,
        }
      );
      setEditEmployer({ id: "", name: "" });
      fetchEmployerData();
      toast.success("Employer name has been changed successfully!!")
    } catch (error) {
      toast.error(error)
      console.log(error);
    }
  };

  // delete employer --------
  const deleteEmployer = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_KEY}/api/v1/employer/${id}`);
      fetchEmployerData();
      toast.success("Employer record has been deleted successfully!!")
    } catch (error) {
      toast.error(error)
      console.log(error);
    }
  };

  // search employees ------
  const searchEmployees = () => {
    const searchTermLowerCase = searchTerm.toLowerCase().trim();
    // filter by gender ------
    const filteredData = employerData.filter((employer) => {
      return (
        (selectedGenderFilter === "All" ||
          employer.gender === selectedGenderFilter) &&
        Object.values(employer).some((field) => {
          if (typeof field === "string") {
            return field.toLowerCase().includes(searchTermLowerCase);
          }
          return false; 
        })
      );
    });

    setFilteredEmployerData(filteredData);
  };

  // filter by date range ---------

    const handleSelect = (date) => {
      const filtered = employerData.filter((employer) => {
        const createdAt = new Date(employer.createdAt);
        return createdAt >= date.selection.startDate && createdAt <= date.selection.endDate;
      });

      setStartDate(date.selection.startDate);
      setEndDate(date.selection.endDate);
      setFilteredEmployerData(filtered);
    };

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }
  
  
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Employer" />

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
              <span>Add Employer</span>
              <Link to="/AddEmployer">
                <button className="btn-sm btn-success btn">
                  <i className="bi bi-plus"></i> Add
                </button>
              </Link>
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
                  <i className="bi bi-plus"></i>Import
                </button>
              </div>
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

            <div className="row justify-content-lg-between  ">
              <div className="col-lg-6 py-2 d-flex align-items-center">
                  <button
                  className="btn btn-sm btn-secondary"
                  onClick={toggleDateRange}
                >
                  Date Range
                </button>
                {isDateRangeVisible && (
                 
                  <DateRange
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    className=""
                  />
                )}
              </div>
                 
              <div className="col-lg-3 py-2">
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
          <hr />
          <table className="table">
            <thead>     
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Name</th>
                <th scope="col-table">Status</th>
                <th scope="col-table">Gender</th>
                <th scope="col-table">Mobile</th>
                <th scope="col-table">Email</th>
                <th scope="col-table">Join Date</th>
                <th scope="col-table">View</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>
            <tbody>
            {filteredEmployerData.length > 0 ? (
                filteredEmployerData.map((employer, index) => {
                  const formattedDate = employer.createdAt.split("T")[0];
                  let date = new Date(employer["createdAt"]);
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{employer.employerName}</td>
                      <td>
                        {employer.status}
                      </td>
                      {/* ... Map other fields accordingly ... */}
                      <td>{employer.gender}</td>
                      <td>{employer.mobile}</td>
                      <td>{employer.email}</td>
                      <td>{date.toLocaleDateString()}</td>
                      <td>
                        {/* <DropDown /> */}
                        <Link to={`/employerProfile/${employer._id}`}>
                          <i className="bi bi-eye-fill text-success fs-5"></i>
                        </Link>
                      </td>
                      <td className="d-flex justify-content-evenly cursor">
                        <div>
                          <i
                            className="bi bi-pencil-square text-warning fs-5"
                            onClick={() =>
                              setEditEmployer({
                                id: employer._id,
                                name: employer.employerName,
                              })
                            }
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                          ></i>
                        </div>
                        <div>
                          <i
                            className="bi bi-archive text-danger fs-5"
                            onClick={() => deleteEmployer(employer._id)}
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteModal${employer._id}`}
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
                  Edit Employer
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
                    setEditEmployer({ ...editEmployer, name: e.target.value })
                  }
                  value={editEmployer.name}
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
                  onClick={editEmployerData}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {employerData.map((employer) => (
          <div
            key={employer._id}
            className="modal fade"
            id={`deleteModal${employer._id}`}
            tabIndex="-1"
            aria-labelledby={`deleteModalLabel${employer._id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id={`deleteModalLabel${employer._id}`}
                  >
                    Delete Employer
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete the employer:{" "}
                  <strong>{employer.employerName}</strong>?
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
                        `Are you sure you want to delete ${employer.employerName}?`
                      );
                      if (shouldDelete) {
                        deleteEmployer(employer._id);
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
              Showing 1 to {employerData.length} of {employerData.length}
              Employers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employer;
