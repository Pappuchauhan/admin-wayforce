import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import process.env.REACT_APP_API_KEY from "../../config";
import Navbar from '../Home/Navbar';
import { toast } from "react-toastify";



function Agent() {
  const [agentData, setAgentData] = useState([]);
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAgentsData, setFilterAgentsData] = useState([])

  /*
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_KEY}/api/v1/agentt/get/getAllAgent`;
    
    axios.get(apiUrl)
      .then(response => setAgentData(response.data.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  */


  const fetchAllAgentData = async () =>{
    try{
      const apiUrl = `${process.env.REACT_APP_API_KEY}/api/v1/agentt/get/getAllAgent`;
      const response = await axios.get(apiUrl);
        setAgentData(response.data.data)
        setFilterAgentsData(response.data.data)
        console.log(response.data.data)

    } catch (error){
      console.error(error)
    }
  }

  useEffect(() => {
    searchAgents();
  }, [searchTerm]);

  useEffect(() =>{
    fetchAllAgentData()
  }, [])


    // search agents ------
    const searchAgents = () => {
      const searchTermLowerCase = searchTerm.toLowerCase().trim();
      const filteredData = agentData.filter((agents) => {
        return (
          Object.values(agents).some((field) => {
            if (typeof field === "string") {
              return field.toLowerCase()?.includes(searchTermLowerCase);
            }
            return false; 
          }))
        
      });
      setFilterAgentsData(filteredData)
      
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
  
        const response = await axios.post(`${process.env.REACT_APP_API_KEY}/YOUR_API`, formData, {
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



  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Agent" />
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
            <span>Add New Agent</span>
             <Link to="/agent"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Add</button></Link> 
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
          </div>
          <hr />

          <table className="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Name</th>
                <th scope="col-table">Gender</th>
                <th scope="col-table">Mobile</th>
                <th scope="col-table">Email</th>
                <th scope="col-table">Join Date</th>
                <th scope="col-table">Status</th>
                <th scope="col-table">View</th>
                {/* <th scope="col-table">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {filterAgentsData?.length > 0 ? (
                filterAgentsData?.map((agent, index) => {
                  const { _id, agentName, city, email, createdAt, gender, mobile, status} = agent
                  let date = new Date(agent["createdAt"]);
                  return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{agentName}</td>
                    {/* ... Map other fields accordingly ... */}
                    <td>{gender}</td>
                    <td>{mobile}</td>
                    <td>{email}</td>
                    <td>{date.toLocaleDateString()}</td>
                    <td>{status === "true" ? "Active" : "Inactive"}</td>
                    <td>
                      {/* <DropDown /> */}
                      <Link to={`/AgentProfile/${_id}`}>
                        <i className="bi bi-eye-fill text-success fs-5"></i>
                      </Link>
                    </td>
                    {/* <td className="d-flex justify-content-evenly cursor">
                      <div>
                        <i className="bi bi-pencil-square text-warning fs-5"></i>
                      </div>
                      <div>
                        <i className="bi bi-archive text-danger fs-5"></i>
                      </div>
                    </td> */}
                  </tr>
                  )})
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
        <div className="col-lg-11 my-3">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <p>Showing {1} to {filterAgentsData.length} of {filterAgentsData.length} Agents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent