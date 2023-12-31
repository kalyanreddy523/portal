import { Link,useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { getUserDetails } from "./Authstate";
// import Aboutus from './Aboutus';
// import Allcourses from "./Allcourses";
// import Aws from "./Aws";
// import Cloudcomputing from "./Cloudcomputing";
// import Contact from './Contact';
// import Css from "./Css";
// import Datascience from "./Datascience";
// import Home from "./Home";
// import Html from "./Html";
// import Login from "./Login";
// import Payment from "./Payment.js";
// import Profile from './Profile';
// import Python from "./Python";
// import Registration from "./Registration";
// import Trainees from './Trainees';
// import Certificate from "./certificate.js";

function Navbar({onLogout}) {
  const navigate = useNavigate();
  const userDetails=getUserDetails();

    const handleLogout = () => {
        // Add any additional logout logic here if needed
        onLogout(); // Call the onLogout prop passed from the parent component (Login)
        navigate('/'); // Redirect to the login page or any other desired route
    };
  return (
    <>
      {/* <BrowserRouter> */}
        <nav className="navbar navbar-expand-lg bg-info">
          <div className="container-fluid">
          <Link class="navbar-brand" to='/'>
                <img src="https://t3.ftcdn.net/jpg/03/92/80/46/360_F_392804645_tUQxo5EgPXvFGxn5OQguX1BiYlI6lCOV.jpg" className="img-fluid rounded" alt="logo" style={{ height: "60px" }} />
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active text-white fw-bold" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Aboutus" className="nav-link active text-white fw-bold">Aboutus</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/Allcourses" className="nav-link active text-white fw-bold">AllCourses</Link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white fw-bold" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i> {userDetails.fullname}
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='/myprofile'>MyProfile</Link></li>
            <li><button class="dropdown-item btn" onClick={handleLogout}>Logout</button></li>
          </ul>
        </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link active text-white fw-bold" aria-disabled="true">ContactUs</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/" className="nav-link active text-white fw-bold" aria-disabled="true">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Registration" className="nav-link active text-white fw-bold" aria-disabled="true">SignUp</Link>
                  </li> */}
              </ul>
            </div>
          </div>
        </nav>
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Trainees" element={<Trainees />} />
          <Route path='/Allcourses' element={<Allcourses />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/python" element={<Python />} />
          <Route path="/cloudcomputing" element={<Cloudcomputing />} />
          <Route path="/Datascience" element={<Datascience />} />
          <Route path="/Aws" element={<Aws />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/certificate" element={<Certificate/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default Navbar;