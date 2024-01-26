import Navbar from "./navbar/NavBar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Program from "./Pages/Program";
import Registration from "./Pages/Registration";
import { Route, Routes } from "react-router-dom";

function NavB() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </>
  );
}
export default NavB;
