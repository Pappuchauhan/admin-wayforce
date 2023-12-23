import React from "react";
import { Link } from "react-router-dom";

function DropDown({  }) {
  return (
    <div className="dropdown">
      <button
        className="btn Button-style btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        View User
      </button>
      <ul className="dropdown-menu">
      <li>
          <Link className="dropdown-item" to={`/employeeProfile`}>
            Details
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={`/`}>
            Hiring
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={`/`}>
            Post Job
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
