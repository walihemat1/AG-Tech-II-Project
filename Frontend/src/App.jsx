import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import PastPapers from "./Pages/PastPapers";
import CourseBook from "./Pages/CourseBook";
import TechGuidance from "./Pages/TechGuidance";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";

import Login from "./components/Login";
import SignUpPage from "./components/SignUpPage";
import Footer from "./components/Footer";
import UploadPaper from "./Pages/UploadPaper";

const Layout = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/signup"];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/past-papers" element={<PastPapers />} />
        <Route path="/upload-paper" element={<UploadPaper />} />
        <Route path="/course-book" element={<CourseBook />} />
        <Route path="/tech-guidance" element={<TechGuidance />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
