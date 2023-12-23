import React, { useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { sidebarLinks } from "../../assets/constant";

function Sidebar({sidebarLinks}) {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>
      <div
        className="col-lg-2 d-flex flex-column flex-shrink-0 vh-100"
        style={{ backgroundColor: "#CF9C03", overflowY: "scroll" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center  mb-md-0 me-md-auto link-dark text-decoration-none m-2"
        >
          <img
            src={require("../../img/logo.png")}
            className="img-fluid"
            alt=""
          />
          <h4>WayForce</h4>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            {sidebarLinks.map((link, index) => (
              <li
                key={index}
                className={
                  location.pathname === link.path ? "nav-item active" : "nav-item"
                }
              >
                <Link to={link.path} className="nav-link">
                  <i className={`bi ${link.iconClass} icon`} />
                  {link.name}
                  {link.text && (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: link.text.replace(
                          'className="',
                          `className="text-danger fw-bold"`
                        ),
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
        </ul>
          {/* <li className={location.pathname === "/" ? "li-style my-1" : "my-1"}>

            <Link to="/" className="nav-link">
              <i className="bi bi-speedometer2 mx-1" />
              Dashboard
            </Link>
          </li> */}
          {/* <div className={`d-none`}>
            <li className={location.pathname === "/a  " ? "li-style my-1" : ""}>
              <Link to="/a" className="nav-link">
                <i className="bi bi-speedometer2 mx-1" />
                Dashboard
              </Link>
            </li>
          </div> */}
           {/* <li
            className={
              location.pathname === "/postQuery"
                ? "li-style my-1"
                : "my-1"
            }
          >
            <Link to="/postQuery" className="nav-link">
              <i className="bi bi-check-circle-fill mx-1" />
               Post Verification <span style={{fontSize:"10px"}} className="text-danger fw-bold">101</span>
            </Link>
          </li>
          <li
            className={
              location.pathname === "/formVerification"
                ? "li-style my-1"
                : "my-1"
            }
          >
            <Link to="/formVerification" className="nav-link">
              <i className="bi bi-card-checklist mx-1" />
             User Verification 
            </Link>
          </li>
          <li
            className={
              location.pathname === "/employer" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/employer" className="nav-link">
              <i className="bi bi-person-fill mx-1" />
              Employer
            </Link>
          </li>
          <li
            className={
              location.pathname === "/manPower" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/manPower" className="nav-link">
              <i className="bi bi-people-fill mx-1" />
              ManPower
            </Link>
          </li>
          <li
            className={
              location.pathname === "/agent" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/agent" className="nav-link">
              <i className="bi bi-person-circle mx-1" />
              Agent
            </Link>
          </li> */}
          {/* <li
            className={
              location.pathname === "/postQuery" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/postQuery" className="nav-link">
              <i className="bi bi-question-diamond-fill mx-1" />
              Post Query
            </Link>
          </li> */}
          {/* <li
            className={
              location.pathname === "/project" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/project" className="nav-link">
              <i className="bi bi-collection-fill mx-1"></i>
              Projects
            </Link>
          </li>
          <li
            className={
              location.pathname === "/account" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/account" className="nav-link">
              <i className="bi bi-receipt mx-1" />
              Account
            </Link>
          </li>
          <li
            className={
              location.pathname === "/Category" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/Category" className="nav-link">
              <i className="bi bi-grid-3x3-gap-fill mx-1" />
              Category
            </Link>
          </li>
          <li
            className={
              location.pathname === "/Design" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/design" className="nav-link">
              <i className="bi bi-bounding-box mx-1" />
              Design
            </Link>
          </li>
          <li
            className={
              location.pathname === "/Sub-admin" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/subadmin" className="nav-link">
              <i className="bi bi-person-add mx-1"></i>
              Sub-admin
            </Link>
          </li>
          <li
            className={
              location.pathname === "/offer" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/offer" className="nav-link">
              <i className="bi bi-megaphone-fill mx-1" />
              Offer/Plan
            </Link>
          </li>
          <li
            className={
              location.pathname === "/support" ? "li-style my-1" : "my-1"
            }
          >
            <Link to="/support" className="nav-link">
              <i className="bi bi-gear-fill mx-1" />
              Support
            </Link>
          </li>
          <li
            className={
              location.pathname === "/termcondition"
                ? "li-style my-1"
                : "my-1"
            }
          >
            <Link to="/termcondition" className="nav-link">
              <i className="bi bi-file-fill mx-1" />
              Term & Condition
            </Link>
          </li> */}
          {/* <li className="mt-1">
            <button
              className="btn d-inline-flex align-items-center collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#contents-collapse"
              aria-controls="contents-collapse"
            >
              <i className="bi bi-grid-fill mx-1" />
              Category
            </button>
            <ul
              className="list-unstyled bg-white ps-1 collapse shadow-sm rounded"
              id="contents-collapse"
            >
              <li>
                <Link
                  className="d-inline-flex align-items-center rounded"
                  to="category.html"
                >
                  Category
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  className="d-inline-flex align-items-center rounded"
                  to="subcategoryadd.html"
                >
                  Sub Category
                </Link>
              </li>
            </ul>
          </li> */}
        {/* </ul> */}
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="assets/img/amit.jpg"
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </Link>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <Link className="dropdown-item" to="/sinup">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
