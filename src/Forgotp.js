import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { setCustomerDetails } from "./Authstate";
import { useNavigate } from "react-router-dom";

const Forgotp=()=>{
    const[email,setEmail]=useState('');
    const Navigate=useNavigate();
    
    useEffect(() => {
        // Your conditional fetching logic based on user input
        if (email !== "") {
          fetch("http://localhost:8085/api/registration")
            .then((response) => response.json())
            .then((coursedata) => {
              // Your logic to check if login is successful
              const isLoginSuccessful = checkLogin(coursedata, email);
              if (isLoginSuccessful) {
                const loggedInUser = coursedata.find(
                  (user) =>
                    user.email === email
                );
                console.log(loggedInUser);
                setCustomerDetails(loggedInUser);
                document.getElementById('displaymessage').innerHTML="Redirecting....";
                document.getElementById('displaymessage').style.color='green';
                Navigate('/changepassword');
              } else {
                // Handle unsuccessful login
                document.getElementById('displaymessage').innerHTML='Your mail not there in our database';
                document.getElementById('displaymessage').style.color='red';
               
              }
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              // Handle error fetching data
            });
        }
      }, [email]);
      function checkLogin( data, enteredEmail) {
        // Your logic to check if the entered email and password match the data from the API
        // Example: (Replace with your actual logic)
        return data.some(
          (user) => user.email === enteredEmail
        );
      }

      const Submit=()=>{
        var emailInput=document.getElementById('inputemail').value;
        if(emailInput===''){
            document.getElementById('displaymessage').innerHTML='please enter the EmailId';
            document.getElementById('displaymessage').style.color='red';
        }
        setEmail(emailInput);
      }
    
    return(
        <>
        <div className="container-fluid">
            <div className="container mt-5 bg-body-tertiary">
                <div className="row">
                    <div className="col-12">
                    <div className="card bg-body-tertiary mx-auto" style={{width:"30rem"}}>
                         <img src="https://cdn.pixabay.com/photo/2013/04/01/10/54/warning-98596_1280.png" className="card-img-top mx-auto d-block mt-2" alt="..." style={{width:"200px",height:"158px"}}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Forgot Password</h5>
                                <p className="card-text text-secondary text-center p-3">Enter your mailId and we will send a link to reset your password</p>
                                <div>
                                    <input className="form-control mx-auto d-block" placeholder="enter the Emailid" id="inputemail" required/>
                                </div>
                                <div className="pt-4 text-center">
                                <span id="displaymessage"></span>
                                </div>
                                <button className="btn btn-success text-white fw-bold mx-auto text-center d-block mt-3" onClick={Submit}>Submit</button>
                                </div>
                                <Link to='/Login' className="text-center p-2"><i class="fa-solid fa-arrow-left"></i>Back to LoginPage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forgotp;
export{useNavigate};