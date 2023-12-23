import React, {useState, useEffect} from "react";
import Navbar from "../Home/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";
import { toast } from "react-toastify";

const SubAdmin = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [subadmin, setSubadmin] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
  `;


    const handleGetAllAdmin = async() =>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/subadmin`)
        const admins = await response.data.data
        setSubadmin(admins)
        setLoading(true)
      } catch (error){
        setLoading(false)
      }
    } 

    useEffect(() =>{
      handleGetAllAdmin()
    }, [])

    // delete sub admins -------
    const addDeleteSubAdminHandler = async (id) =>{
        try {
            const subAdminIs = await axios.delete(`${process.env.REACT_APP_API_KEY}/api/v1/subadmin/delete/SubAdmin/${id}`)
            if (subAdminIs.status === 200){
              toast.success(`You have been deleted successfully`)
              setTimeout(() =>{
                navigate('/subadmin')
                  window.location.reload(false)
              }, 2000)
              console.log(subAdminIs)
          }
        } catch (error){
          toast.error(`Something went wrong ${error}`)
        }
    }
    
      // authentication during login ----------
    useEffect(() => {
      const loggedInUser = localStorage.getItem("authenticated");
      if (!loggedInUser) {
        // user is not authenticated, redirect to login page
        navigate("/subadminlogin");
      } else {
        setAuthenticated(loggedInUser);
      }
    }, [navigate]);

  if (!loading) {
    return (
      <div className="text-center col-10">
        <GridLoader color={"hsla(52, 67%, 53%, 1)"} loading={true} css={override} size={50} />
        <p>Loading...</p>
      </div>
    );
  }



  if (!authenticated) {
    return <div>Loading...</div>;
  } else {
   
    return (


    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Sub Admin" />
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{ overflow: "auto" }}
        >
          <div className="row justify-content-between">
            <div className="col-lg-2 py-2">
              <span>Add Sub-Admin</span>
              <Link to={`/addadmin`}>
                <button className="btn-sm btn-success btn">
                  <i className="bi bi-plus"></i> Add User
                </button>
              </Link>
            </div>
          <hr />

          <table className="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Name</th>
                <th scope="col-table">ID</th>
                <th scope="col-table">Gender</th>
                <th scope="col-table">Mobile</th>
                <th scope="col-table">Email</th>
                <th scope="col-table">View</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>

            <tbody>
              {
                subadmin?.map((items, index) =>{
                  const {_id,orderId, email,mobile, gender, SubAdminName} = items
                  return (
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{SubAdminName}</td>
                    <td>{orderId}</td>
                    <td>{gender}</td>
                    <td>{mobile}</td>
                    <td>{email}</td>
                    <td>
                      <Link to={`/actionsubadmin/${_id}`}>
                          <i className="bi bi-eye-fill text-success fs-5"></i>
                      </Link>
                    </td>
                    <td className="d-flex justify-content-evenly cursor">
                        <div>
                          <i
                            className="bi bi-archive text-danger fs-5"
                            onClick={() => addDeleteSubAdminHandler(_id)}
                          ></i>
                        </div>
                        <div>
                        <Link to={`/actionsubadmin/${_id}`}>
                        <i
                          className="bi bi-pencil-square text-warning fs-5"
                        ></i>
                      </Link>
                        </div>
                      </td>
                  </tr>

                  )
                })
              }
            </tbody>
          </table>
          </div>
        </div>

        <div className="col-lg-11 my-3">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <p>
              Showing 1 to {subadmin.length} Sub admin
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
};

export default SubAdmin;
