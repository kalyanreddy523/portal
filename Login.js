import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Aboutus from './Aboutus';
import Allcourses from "./Allcourses";
import { setEmailInputValue } from './Authstate.js';
import Aws from "./Aws";
import Cloudcomputing from "./Cloudcomputing";
import Contact from './Contact';
import Css from "./Css";
import Datascience from "./Datascience";
import Home from "./Home";
import Html from "./Html";
import { setNameInputValue } from './Namestate.js';
import Nav from './Nav.js';
import Navbar from './Navbar.js';
import Payment from "./Payment.js";
import Profile from './Profile';
import Python from "./Python";
import Registration from "./Registration";
import Trainees from './Trainees';
import Certificate from "./certificate.js";
import MyProfile from './Myprofile.js';
import { setUserData } from './Userstate.js';




function Login() {
        const[data,setData]=useState([]);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const[fullname, setFullname]=useState('');
        const[nav,setNav]=useState(true);
        const[login,setLogin]=useState(true);
        useEffect(() => {
            // Your conditional fetching logic based on user input
            if (email !== "" && password !== "" &&  fullname!== "") {
              fetch("http://localhost:8085/api/registration")
                .then((response) => response.json())
                .then((coursedata) => {
                  // Your logic to check if login is successful
                  const isLoginSuccessful = checkLogin(coursedata, email, password, fullname);
                  if (isLoginSuccessful) {
                    alert("Loggedin Successfully");
                    const loggedInUser = coursedata.find(
                      (user) =>
                        user.email === email && user.password === password && user.fullname === fullname
                    );
                    setUserData(loggedInUser);
                    setNav(false);
                    setLogin(false);
                  } else {
                    // Handle unsuccessful login
                    alert("Invalid email or password");
                   
                  }
                })
                .catch((error) => {
                  console.error("Error fetching data:", error);
                  // Handle error fetching data
                });
            }
          }, [email, password,fullname]);
          function checkLogin( data, enteredEmail, enteredPassword,enteredName) {
            // Your logic to check if the entered email and password match the data from the API
            // Example: (Replace with your actual logic)
            return data.some(
              (user) => user.email === enteredEmail && user.password === enteredPassword && user.fullname===enteredName
            );
          }

          function Submit(){

            //  var Email=document.getElementById("exampleInputEmail1");
            //  var Password=document.getElementById("exampleInputPassword1");

        const emailInput = document.getElementById("exampleInputEmail1").value;
        const passwordInput = document.getElementById("exampleInputPassword1").value;
        const nameInput=document.getElementById("Name").value;
        
        if(emailInput=='' && passwordInput=='' && nameInput==''){
            alert("Invalid Credentials");
        }
        else if(emailInput==''){
            alert("Email is a Required Field");
        }
        else if(passwordInput==''){
            alert("Password is a Required Field")
        }
        else if(nameInput==''){
            alert("Name is mandatory");
        }

        setEmail(emailInput);
        setPassword(passwordInput);
        setFullname(nameInput);
        setEmailInputValue(emailInput);
        setNameInputValue(nameInput);
}

    return (
        <>
        <BrowserRouter>
        {nav ? <Nav /> : <Navbar />}
      <Routes>
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
          <Route path='/myprofile' element={<MyProfile/>}/>
      </Routes>
      <div>
        {/* Use the condition to render either Nav or Navbar */}
        

          {login &&  <div className="container-fluid bg-body-tertiary p-5">
                <div className="container h-100 d-flex justify-content-center align-items-center pt-5 ps-5">
                    <div className="row">
                        <div className="col-12">
                            <form className="bg-white p-5 rounded">
                            <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-primary fw-bold">Name</label>
                                    <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" style={{width:"300px",height:"40px"}}  required/>
                                        <div id="emailHelp" className="form-text text-white">We'll never share your Name with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-primary fw-bold">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"300px",height:"40px"}}  required/>
                                        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label text-primary fw-bold">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" style={{width:"300px",height:"40px"}}  required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label text-primary fw-bold" for="exampleCheck1">Always Login</label>
                                </div>
                                <div className="p-3">
                                    <p>Dont have an Account? <Link to='/Registration'>Register here</Link></p>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={Submit}>Submit</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div> }
            </div>
    </BrowserRouter>
        </>
    )
}
export default Login;



