// router path and element -----
import { createBrowserRouter } from "react-router-dom";
import Signup from "../Page/Sinup/Sinup";
import Login from "../Page/Sinup/Login/Login";
import Home from "../Page/Home/Home";
import Project from "../Page/Project/Project";
import CompleteProject from "../Page/Project/CompleteProject";
import OnGoing from "../Page/Project/OnGoing";
import Negotiation from "../Page/Project/Negotiation";
import Employer from "../Page/Employer/Employer";
import EmployerProfile from "../Page/Employer/EmployerProfile";
import EViewPostJob from "../Page/Employer/EViewPostJob";
import AppliedJobSinglePost from "../Page/Employer/AppliedJobSinglePost";
import EmployeeVerification from "../Page/FormVerificaton/EmployeVerification";
import EmployerInstantHireView from "../Page/Employer/EmployerInstantHireView";
import EmployerDircetHireView from "../Page/Employer/EmployerDircetHireView";
import AddEmployer from "../Page/Employer/AddEmployer";
import Agent from "../Page/Agent/Agent";
import AgentProfile from "../Page/Agent/AgentProfile";
import AgentParticipateView from "../Page/Agent/AgentParticipateView";
import AgentDirectHiredView from "../Page/Agent/AgentDirectHiredView";
import ManPower from "../Page/ManPower/ManPower";
import ManPowerProfile from "../Page/ManPower/ManPowerProfile";
import MainPowerAppliedJob from "../Page/ManPower/MainPowerAppliedJob";
import ManPowerInstantHired from "../Page/ManPower/ManPowerInstantHired";
import ManPowerDirectHired from "../Page/ManPower/ManPowerDirectHired";
import AddManPower from "../Page/ManPower/AddManPower";
import PostQuery from "../Page/PostQuery";
import PostView from "../Page/PostView";
import Category from "../Page/Category/Category";
import Account from "../Page/Account/Account";
import Design from "../Page/Design/Design";
import SubAdmin from "../Page/SubAdmin/SubAdmin";
import Offer from "../Page/Offer";
import Support from "../Page/Support/Support";
import TermsPage from "../Page/TermAndCondition";
import FormVerification from "../Page/FormVerificaton/FormVerification"
import Revenue from "../Page/Revenue/Revenue";
import {BiDollar} from "react-icons/bi"
import ActionSubAdmin from "../Page/SubAdmin/ActionSubAdmin";
import SubAdminLogin from "../Page/SubAdmin/SubAdminLogin";
import AddAdmin from "../Page/SubAdmin/AddAdmin";
import AgentVerification from "../Page/FormVerificaton/AgentVerification";
import ManpowerVerification from "../Page/FormVerificaton/ManpowerVerification";
export const router = [
    {
        path: "/sinup",
        element: <Signup />,
        pathName: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
        pathName: <Login />,
    },
    {
        path: "/",
        element: <Home />,
        pathName: <Home />,
    },
    {
        path: "/sinup",
        element: <Signup />,
        pathName: <Signup />,
    },
    {
        path: "/project",
        element: <Project />,
        pathName: <Project />,
    },
    {
        path: "/completeProject",
        element: <CompleteProject />,
        pathName: <CompleteProject />,
    },
    {
        path: "/onGoingProject",
        element: <OnGoing />,
        pathName: <OnGoing />,
    },
    {
        path: "/underNegotiation",
        element: <Negotiation />,
        pathName: <Negotiation />,
    },
    // post verication -------
    {
        path: "/formVerification",
        element: <FormVerification />,
        pathName: <FormVerification />,
    },
    {
        path: "/employeeVerification/:id",
        element: <EmployeeVerification />,
        pathName: <EmployeeVerification />,
    },
    {
        path: "/agentVerification/:id",
        element: <AgentVerification />,
        pathName: <AgentVerification />,
    },
    {
        path: "/manpowerVerification/:id",
        element: <ManpowerVerification />,
        pathName: <ManpowerVerification />,
    },
    // -------
    {
        path: "/revenue",
        element: <Revenue />,
        pathName: <Revenue />,
    },

    {
        path: "/employer",
        element: <Employer />,
        pathName: <Employer />,
    },
    {
        path: `/employerProfile/:id`,
        element: <EmployerProfile />,
        pathName: <EmployerProfile />,
        
    },
    {
        path: `/eViewPostJob/:id/:orderId`,
        element: <EViewPostJob />,
        pathName: <EViewPostJob />,
    },

    {
        path: "/appliedJobSinglePost/:id/:orderId",
        element: <AppliedJobSinglePost />,
        pathName: <AppliedJobSinglePost />,
    },
    {
        path: "/project",
        element: <Project />,
        pathName: <Project />,
    },
   

    {
        path: "/employerInstantHireView/:id/:orderId",
        element: <EmployerInstantHireView />,
        pathName: <EmployerInstantHireView />,
    },
    {
        path: "/employerDircetHireView",
        element: <EmployerDircetHireView />,
        pathName: <EmployerDircetHireView />,
    },
    {
        path: "/AddEmployer",
        element: <AddEmployer />,
        pathName: <AddEmployer />,
    },


    // agent
    {
        path: "/agent",
        element: <Agent />,
        pathName: <Agent />,
    },

    {
        path: "/agentProfile/:id",
        element: <AgentProfile />,
        pathName: <AgentProfile />,
    },
    {
        path: "/agentParticipateView",
        element: <AgentParticipateView />,
        pathName: <AgentParticipateView />,
    },
    {
        path: "/agentDirectHiredView",
        element: <AgentDirectHiredView />,
        pathName: <AgentDirectHiredView />,
    },
    // manpower ---
    {
        path: "/manPower",
        element: <ManPower />,
        pathName: <ManPower />,
    },

    {
        path: "/manPowerProfile/:id",
        element: <ManPowerProfile />,
        pathName: <ManPowerProfile />,
    },
    {
        path: "/mainPowerAppliedJob/:id",
        element: <MainPowerAppliedJob />,
        pathName: <MainPowerAppliedJob />,
    },
    {
        path: "/manPowerInstantHired/:id/:orderId",
        element: <ManPowerInstantHired />,
        pathName: <ManPowerInstantHired />,
    },
    {
        path: "/ManPowerDirectHired/:id/:orderId",
        element: <ManPowerDirectHired />,
        pathName: <ManPowerDirectHired />,
    },
    {
        path: "/AddManPower",
        element: <AddManPower />,
        pathName: <AddManPower />,
    },

    // postQuery PostView category etc.. ----------
    {
        path: "/postQuery",
        element: <PostQuery />,
        pathName: <PostQuery />,
    },
    {
        path: "/postView/:id/:orderId", // /postView/:id/:orderId
        element: <PostView />,
        pathName: <PostView />,
    },
    {
        path: "/category",
        element: <Category />,
        pathName: <Category />,
    },
    {
        path: "/account",
        element: <Account />,
        pathName: <Account />,
    },
    {
        path: "/design",
        element: <Design />,
        pathName: <Design />,
    },
    // sub admin ----
    {
        path: "/subadmin",
        element: <SubAdmin />,
        pathName: <SubAdmin />,
    },
    {
        path: "/actionsubadmin/:id",
        element: <ActionSubAdmin />,
        pathName: <ActionSubAdmin />,
    },
    {
        path: "/addadmin",
        element: <AddAdmin />,
        pathName: <AddAdmin />,
    },
    {
        path: "/subadminlogin",
        element: <SubAdminLogin />,
        pathName: <SubAdminLogin />,
    },
    {
        path: "/offer",
        element: <Offer />,
        pathName: <Offer />,
    },
    {
        path: "/support",
        element: <Support />,
        pathName: <Support />,
    },
    {
        path: "/termcondition",
        element: <TermsPage />,
        pathName: <TermsPage />,
    },
  ];


// sidebar names icons and path -------
export const sidebarLinks = [
    {
      name: 'Dashboard',
      iconClass: 'bi bi-speedometer2',
      path: '/',
    },
    {
      name: 'Post Verification',
      iconClass: 'bi-check-circle-fill',
      path: '/postQuery',
      text: `<span style={{ fontSize: "10px" }} className="text-danger fw-bold">101</span>`,
    },
    {
      name: 'User Verification',
      iconClass: 'bi-card-checklist',
      path: '/formVerification',
    },
    {
        name: 'Revenue',
        iconClass: `bi bi-currency-dollar`,
        path: '/revenue',
    },
    {
        name: 'Employer',
        iconClass: 'bi bi-person-fill',
        path: '/employer'
    },
    {
        name: 'ManPower',
        iconClass: 'bi bi-people-fill',
        path: '/manPower'
    },
    {
        name: 'Agent',
        iconClass: 'bi bi-person-circle',
        path: '/agent'
    },
    {
        name: 'Projects',
        iconClass: 'bi bi-collection-fill',
        path: '/project'
    },
    {
        name: 'Account',
        iconClass: 'bi bi-receipt',
        path: '/account'
    },
    {
        name: 'Category',
        iconClass: 'bi bi-grid-3x3-gap-fill',
        path: '/Category'
    },
    {
        name: 'Design',
        iconClass: 'bi bi-grid-3x3-gap-fill',
        path: '/design'
    },
    {
        name: 'Sub-admin',
        iconClass: 'bi bi-person-add',
        path: '/subadmin'
    },
    {
        name: 'Offer/Plan',
        iconClass: 'bi bi-megaphone-fill',
        path: '/offer'
    },
    {
        name: 'Support',
        iconClass: 'bi bi-gear-fill',
        path: '/support'
    },
    {
        name: 'Term & Condition',
        iconClass: 'bi bi-file-fill',
        path: '/termcondition'
    },
    // {
    //     name: 'Sign out',
    //     iconClass: 'bi bi-file-fill',
    //     path: '/sinup'
    // },

];


  