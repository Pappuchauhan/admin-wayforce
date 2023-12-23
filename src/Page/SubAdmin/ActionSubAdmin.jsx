import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ActionSubAdmin = () => {
  const [formData, setFormData] = useState({
    SubAdminName: "",
    email: "",
    password: "",
    mobile: "",
  });
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
      // Function to fetch data of the specific record and populate the form
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/subadmin/getSubAdminById/${id}`);
          if (response.status === 200) {
            const { SubAdminName, email, password, mobile } = response.data.data;

            setFormData({ SubAdminName, email, password, mobile });
          }

        } catch (error) {
          toast.error(`Error fetching sub-admin data:', ${error}`)
        }
      };
  
      fetchData(); 
    }, [id]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_KEY}/api/v1/subadmin/${id}`,
        formData
      );


      setFormData({
        SubAdminName: "",
        email: "",
        password: "",
        mobile:""
      });

      if (response.status === 200) {

        toast.success("Sucessfully updated sub admin");

        setTimeout(() => {
          navigate('/subadmin');
        }, 2000)

      }
    } catch (error) {
      toast(`Error adding sub-admin:', ${error}`)
    }
  };


  return (
    <>
     <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
     <div className="row justify-content-center">
       <Navbar heading="Action Sub Admin" />
       <div className="col-lg-11 my-2">
          <p className="btn btn-success btn-sm">Add Users</p>
        </div>
          <div className="col-lg-11">
            <div className="row">
                <div className="bg-white rounded shadow-sm p-3">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="SubAdminName" value={formData.SubAdminName} placeholder="Enter Name"  onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationServer02" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"  placeholder="Enter Password" value={formData.password}  onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="mobile" placeholder="Enter Phone Number" value={formData.mobile} onChange={handleInputChange} />
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="permission" className="form-label">
                      Permissions:
                    </label>
                    <div className="d-flex ">
                      <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                            />
                            <label className="form-check-label">
                                Employer
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                            />
                            <label className="form-check-label">
                                User Verification
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                            />
                            <label className="form-check-label">
                                Post Verification
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                            />
                            <label className="form-check-label">
                                Agent
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                            />
                            <label className="form-check-label">
                                Manpower
                            </label>
                        </div>
                    </div>
                  </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn-style-update me-md-2 type" type="submit">UPDATE</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionSubAdmin;
