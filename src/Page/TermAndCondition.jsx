import axios from "axios";
import React, { useEffect, useState } from "react";
// import process.env.REACT_APP_API_KEY from "../config";
import Navbar from "./Home/Navbar";
import { useParams } from "react-router-dom";

/*
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar:[
    [{ header: [1,2,3,4,5,6,false],
      font:[], size:[]
    }]
  ]
}
*/

function TermsPage() {
  const [termsData, setTermsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTerm, setEditedTerm] = useState("");
  const [termId, setTermId] = useState(null); 

  const { termId: routeTermId } = useParams(); 
  console.log(termId, routeTermId);
  const fetchTermsAndCondition = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_KEY}/api/v1/termss`;
      const response = await axios.get(apiUrl);
      setTermsData(response.data.terms);
      console.log(response.data.terms);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTermsAndCondition();
  }, []);

  useEffect(() => {
    setTermId(routeTermId);
  }, [routeTermId]);

  const addEditTerms = async () => {
    try {
      if (isEditing && termId) {
        await axios.put(`${process.env.REACT_APP_API_KEY}/api/v1/termss/${termId}`, {
          term: editedTerm,
        });
        setIsEditing(false);
      } else {
        await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/termss`, { term: editedTerm });
      }
      fetchTermsAndCondition(); 
      setEditedTerm("");
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTerm = async () => {
    try {
      if (termId) {
        await axios.delete(`${process.env.REACT_APP_API_KEY}/api/v1/termss/${termId}`);
        const updatedTermsData = termsData.filter((term) => term.id !== termId);
        setTermsData(updatedTermsData); 
        console.log(updatedTermsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (term) => {
    setIsEditing(true);
    setEditedTerm(term);
    console.log(term);
  };

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Terms and Conditions" />
        <div className="bg-white rounded shadow-sm p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>WAYFORCE PRIVACY POLICY</h3>
            <div>
              <button
                className="btn-cancel"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setIsEditing(false)}
              >
                Add
              </button>
              <button
                className="btn-style"
                onClick={() => {
                  if (isEditing) {
                    addEditTerms();
                  } else {
                    setIsEditing(true);
                  }
                }}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
              <button
                className="btn btn-rounded danger btn-cancel"
                onClick={() => deleteTerm()}
              >
                Delete
              </button>
            </div>
          </div>
          <hr />
          <div className="container">
            <div
              className="scrollable-terms"
              style={{ maxHeight: "600px", overflowY: "auto" }}
            >
              <div className="lh-lg">
                {termsData?.map((term, ind) => (
                  <ol key={ind} type="1">
                    <li type="1" className="text-decoration-none">{term.terms}</li>
                  </ol>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit Term Form */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  WayForce
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                {/* <ReactQuill theme="snow" value={editedTerm} onChange={(e) => setEditedTerm(e.target.value)} modules={modules} />; */}
                  <label htmlFor="term">Enter Term</label>
                  <input
                    type="text"
                    id="term"
                    placeholder="Term"
                    className="form-control"
                    value={editedTerm}
                    onChange={(e) => setEditedTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn-style"
                  onClick={addEditTerms}
                >
                  {isEditing ? "Save" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
