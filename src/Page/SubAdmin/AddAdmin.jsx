import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    SubAdminName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const navigate = useNavigate();

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
      const response = await axios.post(
        `${process.env.REACT_APP_API_KEY}/api/v1/subadmin`,
        formData
      );

      setFormData({
        SubAdminName: "",
        email: "",
        password: "",
        mobile:""
      });

      if (response.status === 200) {

        toast.success("Sucessfully created sub admin");

        setTimeout(() => {
          navigate('/subadmin');
        }, 2000)
      }
    } catch (error) {
      toast.error(`Error adding sub-admin:', ${error}`)
    }
  };

 

  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: 'auto' }}>
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
                       <input type="text" className="form-control" name="SubAdminName" value={formData.SubAdminName} required onChange={handleInputChange} placeholder="Enter Name" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="email" className="form-label">Email</label>
                       <input type="email" className="form-control" name="email" value={formData.email} required  onChange={handleInputChange} placeholder="Enter Email" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="password" className="form-label">Password</label>
                       <input type="password" className="form-control" name="password" value={formData.password} required onChange={handleInputChange} placeholder="Enter Password" />
                   </div>
                   <div className="col-md-6">
                       <label htmlFor="phone" className="form-label">Phone</label>
                       <input type="number" className="form-control" name="mobile" value={formData.mobile} required onChange={handleInputChange} placeholder="Enter Phone Number" />
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
                    <button className="btn-style" type="submit">
                      ADD
                    </button>
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

export default AddAdmin;
