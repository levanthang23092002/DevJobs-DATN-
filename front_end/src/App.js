import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/LayoutHome.js";
import Home from "./pages/users/Home";
import About from "./pages/users/About";
import Company from "./pages/users/Company.js";
import PostJob from "./pages/users/PostJob.js";
import Login from "./pages/authentication/login.js";
import Dashboard from "./pages/admin/dashboard.js";
import LoginCandidate from "./pages/authentication/LoginCandidate.js";
import LoginEmployer from "./pages/authentication/loginEmployer.js";
import RegisterCandidate from "./pages/authentication/registerCandidate.js";
import CVFormScreen from "./pages/authentication/CV.js";
import RegisterCompany from "./pages/authentication/RegisterCompany.js";
import Register from "./pages/authentication/register.js";
import ViewJob from "./pages/users/viewJob.js";
import CompanyDetail from "./pages/users/CompanyDetail.js";
import InfoCandidate from "./pages/users/InfoCandidate.js";
import ChangePassword from "./components/user/ChangePassword.js";
import HistoryPost from "./pages/users/HistoryPost.js";
import UpdatePostJob from "./pages/users/UpdatePostJob.js";
import ViewCVCandidate from "./pages/users/ViewCVCandidate.js";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS cho Toast
import AdminLogin from "./pages/admin/login.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout-wrapped routes */}
        <Route element={<Layout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/yourjob" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/login-candidate" element={<LoginCandidate />} />
          <Route path="/login-employer" element={<LoginEmployer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-candidate" element={<RegisterCandidate />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/register-cv" element={<CVFormScreen />} />
          <Route path="/info-candidate/:id" element={<InfoCandidate />} />
          <Route path="/job/:id" element={<ViewJob />} />
          <Route path="/forgot-password/:id" element={<ChangePassword />} />
          <Route path="/history/:id" element={<HistoryPost />} />
          <Route path="/history/update-post/:id" element={<UpdatePostJob />} />
          <Route path="/view/CV/:id" element={<ViewCVCandidate />} />
        </Route>
        <Route path="/login-addmin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer autoClose={5000} position="top-right" />
    </Router>
  );
}

export default App;
