import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";

// import Sinup from "./Page/Sinup/Sinup";
// import Login from "./Page/Sinup/Login/Login";
// import Home from "./Page/Home/Home";
// import Project from "./Page/Project/Project";
// import Employer from "./Page/Employer/Employer";
// import EmployeeVerification from "./Page/FormVerificaton/EmployeVerification";
// import EmployerProfile from "./Page/Employer/EmployerProfile";
// import EViewPostJob from './Page/Employer/EViewPostJob'
// import AppliedJobSinglePost from "./Page/Employer/AppliedJobSinglePost";
// import FormVerification from './Page/FormVerificaton/FormVerification';
// import Agent from "./Page/Agent/Agent";
// import ManPower from "./Page/ManPower/ManPower";
// import PostQuery from "./Page/PostQuery";
// import CompleteProject from "./Page/Project/CompleteProject";
// import Category from "./Page/Category/Category";
// import Offer from "./Page/Offer";
// import PostView from "./Page/PostView";
// import ManPowerProfile from "./Page/ManPower/ManPowerProfile";
// import EmployerInstantHireView from "./Page/Employer/EmployerInstantHireView";
// import EmployerDircetHireView from "./Page/Employer/EmployerDircetHireView";
// import MainPowerAppliedJob from "./Page/ManPower/MainPowerAppliedJob";
// import ManPowerInstantHired from "./Page/ManPower/ManPowerDirectHired";
// import ManPowerDirectHired from './Page/ManPower/ManPowerDirectHired';
// import AgentProfile from "./Page/Agent/AgentProfile";
// import AgentParticipateView from "./Page/Agent/AgentParticipateView";
// import AgentDirectHiredView from "./Page/Agent/AgentDirectHiredView";
// import OnGoing from "./Page/Project/OnGoing";
// import Negotiation from "./Page/Project/Negotiation";
// import AddManPower from "./Page/ManPower/AddManPower";
// import AddEmployer from "./Page/Employer/AddEmployer";
// import TermsPage from "./Page/TermAndCondition";
// import Support from "./Page/Support/Support";
// import SubAdmin from "./Page/SubAdmin/SubAdmin";
// import Design from "./Page/Design/Design";
// import Account from "./Page/Account/Account";
import { sidebarLinks, router } from "./assets/constant";
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar sidebarLinks={sidebarLinks}/>
        <Routes>
          {router?.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
            ))}
          </Routes>
        {/* <Routes>
          <Route path="/sinup" element={<Sinup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>


          <Route path="/project" element={<Project />}></Route>
          <Route path="/completeProject" element={<CompleteProject />}></Route>
          <Route path="/onGoingProject" element={<OnGoing />}></Route>
          <Route path="/underNegotiation" element={<Negotiation />}></Route>

          <Route path="/employer" element={<Employer />}></Route>
          <Route path="/employerProfile/:id" element={<EmployerProfile />}></Route>
          <Route path="/eViewPostJob/:id/:orderId" element={<EViewPostJob />}></Route>
          <Route path="/appliedJobSinglePost/:id/:orderId" element={<AppliedJobSinglePost />}></Route>
          <Route path="/formVerification" element={<FormVerification />}></Route>
          <Route path="/employeeVerification/:id" element={<EmployeeVerification />}></Route>
          <Route path="/employerInstantHireView/:id/:orderId" element={<EmployerInstantHireView />}></Route>
          <Route path="/employerDircetHireView" element={<EmployerDircetHireView />}></Route>
          <Route path="/AddEmployer" element={<AddEmployer />}></Route>
          
          <Route path="/agent" element={<Agent />}></Route>
          <Route path="/agentProfile/:id" element={<AgentProfile />}></Route>
          <Route path="/agentParticipateView" element={<AgentParticipateView />}></Route>
          <Route path="/agentDirectHiredView" element={<AgentDirectHiredView />}></Route>

          <Route path="/manPower" element={<ManPower />}></Route>
          <Route path="/manPowerProfile/:id" element={<ManPowerProfile />}></Route>
          <Route path="/mainPowerAppliedJob/:id" element={<MainPowerAppliedJob />}></Route>
          <Route path="/manPowerInstantHired" element={<ManPowerInstantHired />}></Route>
          <Route path="/ManPowerDirectHired" element={<ManPowerDirectHired />}></Route>
          <Route path="/AddManPower" element={<AddManPower />}></Route>

          <Route path="/postQuery" element={<PostQuery />}></Route>
          <Route path="/postView" element={<PostView/>}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/account" element={<Account />} />
          <Route path="/design" element={<Design />} />
          <Route path="subadmin" element={<SubAdmin />} />
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/support" element={<Support />} />
          <Route path="/termcondition" element={<TermsPage />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
