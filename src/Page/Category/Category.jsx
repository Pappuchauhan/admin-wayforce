import { React, useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
// import { Link } from "react-router-dom";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";

function Category() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/category`);
      setCategories(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/category/create`, {
        name: categoryName,
      });
      console.log(response.data.message);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // show category
  // const [CategoryName, setCategoryName] = useState([]);
  // const apiCall = async () => {
  //   try {
  //     const apiData = await axios.get(
  //       "http://wayforceserver-env.eba-wea5bn3j.ap-south-1.elasticbeanstalk.com/api/v1/admin/skill"
  //     );
  //     setCategoryName(apiData.data.results.reverse());
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };
  // useEffect(() => {
  //   apiCall();
  // }, []);

  // delete
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_KEY}/api/v1/category/delete/${id}`);
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
  // edit category
  const [editCategory, setEditCategory] = useState({
    id: "",
    name: "",
  });
  const { id, name } = editCategory;

  const handleChange = (e) => {
    setEditCategory({ ...editCategory, name: e.target.value });
  };

  const editCategoryData = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_KEY}/api/v1/category/update/${id}`, { name });
      setEditCategory({ id: "", name: "" });
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
  // toggleStatusx
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
      await axios.put(`${process.env.REACT_APP_API_KEY}/api/v1/category/update/${id}`, {
        status: newStatus,
      });
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="col-xl-10 bg"
        style={{ height: "100vh", overflow: "scroll" }}
      >
        <div className="row justify-content-center">
          <Navbar heading="Project" />
          <div className="col-lg-12 my-3">
            <div className="row d-lg-flex justify-content-end">
              <div className="col-lg-7">
                <button
                  className={`${
                    activeContainer === 1 ? "btnStyle-active" : "switch-btn"
                  }`}
                  onClick={() => setActiveContainer(1)}
                >
                  Add Category
                </button>
                {/* <button
                className={`${
                  activeContainer === 2 ? "btnStyle-active" : "switch-btn"
                }`}
              >
                Add Skill
              </button>  */}
              </div>
            </div>
          </div>
          {/* add Category */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 1 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="py-3">
              <h6>Add Category</h6>
              <hr />
            </div>
            <form action="" onSubmit={addCategory}>
              <div className="row">
                <div className="my-2 col-4">
                  <label htmlFor="">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <button className="btn-style">Add</button>
                </div>
              </div>
            </form>
            <table className="table">
              <thead className="table-secondary">
                <tr>
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Category Name</td>
                  <td scope="col-table">Price</td>
                  <td scope="col-table">Status</td>
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              <tbody>
                {categories.map((data, index) => {
                  const { _id, name, status, price } = data;
                  return (
                    <tr key={_id}>
                      <th scope="row">{index + 1}</th>
                      <td>{name}</td>

                      <td>{price}</td>
                      <td>
                        <button
                          className={
                            status === "Active"
                              ? "status bg-success"
                              : "status bg-danger"
                          }
                          onClick={() => toggleStatus(_id, status)}
                        >
                          {status ? "Active" : "inactive"}
                        </button>
                      </td>

                      <td className="d-flex justify-content-evenly cursor">
                        <div>
                          <i
                            className="bi bi-pencil-square text-warning fs-5"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => setEditCategory({ id: _id, name })}
                          ></i>
                        </div>
                        <div>
                          <i
                            className="bi bi-archive text-danger fs-5"
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteModal${_id}`}
                          ></i>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Status Changes
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="mt-3">
                <label htmlFor="">Edit Category</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter New Name"
                  onChange={handleChange}
                  name="name"
                  value={name}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={editCategoryData}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {categories.map((data) => {
        const { _id, name } = data;
        return (
          <div
            key={_id}
            className="modal fade"
            id={`deleteModal${_id}`}
            tabIndex="-1"
            aria-labelledby={`deleteModalLabel${_id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`deleteModalLabel${_id}`}>
                    Delete Category
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete the category:{" "}
                  <strong>{name}</strong>?
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
                    onClick={() => deleteCategory(_id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Category;
