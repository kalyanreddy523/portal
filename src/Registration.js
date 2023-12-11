import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[fullname,setFullName]=useState('');
    const[adress,setAdress]=useState('');
    const[landmark,setLandmark]=useState('');
    const[city,setCity]=useState('');
    const[state,setState]=useState('');
    const[pincode,setPincode]=useState('');

    const submit=async()=>{

        var checkbox=document.getElementById('gridCheck');
        if(email===''){
                alert("email is a Required Field");
                document.getElementById("inputEmail4").style.borderColor="red";
        }
        else if(password===''){
            alert("password is a Required field");
            document.getElementById("inputPassword4").style.borderColor="red";
        }
        else if(fullname===''){
            alert("Username is a Required field");
            document.getElementById("inputPassword4").style.borderColor="red";
        }
        else if(adress===''){
            alert("Adress is a Required field");
            document.getElementById("inputAddress").style.borderColor="red";
        }
        else if(landmark===''){
            alert("Landmark is a Required Field");
            document.getElementById("inputAddress2").style.borderColor="red";
        }
        else if(city===''){
            alert("City is a Required field");
            document.getElementById("inputCity").style.borderColor="red";
        }
        else if(state===''){
            alert("State is a Required field");
            document.getElementById("inputState").style.borderColor="red";
        }
        else if(pincode===''){
            alert("zip is a Required field");
            document.getElementById("inputZip").style.borderColor="red";
        }
        else if(checkbox.checked===''){
            alert("fill the Checkbox");
            document.getElementById("gridCheck").style.borderColor="red";
        }else if(pincode.length >6 || pincode.length<6){
            alert("Enter the pincode correctly");
        }else if(email.includes('@gmail.com')){
        const data={
            email,
            password,
            fullname,
            adress,
            landmark,
            city,
            state,
            pincode,

        }
        try{
        const response=axios.post("http://localhost:8085/api/registration",data);

            setEmail('');
            setPassword('');
            setFullName('');
            setAdress('');
            setLandmark('');
            setCity('');
            setState('');
            setPincode('');
            alert("Registration successful");

        }catch{
            console.log("error occured");
        }
    } else{
        alert('enter the correct emailid');
        document.getElementById('inputEmail4').style.borderColor='red';
    }


    }
    const inputstate = (value) => {
        if (!value.trim() || !/^[a-zA-Z]+$/.test(value)) {
          alert('Please enter a valid User name with only alphabets.');
        }
      };
      const handleChange = (e) => {
        const inputValue = e.target.value;
        setFullName(inputValue)
        inputstate(inputValue);
      };
      const inputcity = (cityvalue) => {
        if (!cityvalue.trim() || !/^[a-zA-Z]+$/.test(cityvalue)) {
          alert('Please enter a valid City name with only alphabets.');
        }
      };
      const handleInputChange = (e) => {
        const inputcityvalue = e.target.value;
        setCity(inputcityvalue)
        inputcity(inputcityvalue);
      };

    return (
        <>
            <div className="container-fluid bg-body-tertiary p-5">
                <div className="row">
                    <div className="col-12">
                        <div className="container pt-4">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label text-primary fw-bold">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the Mail Id" required />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label text-primary fw-bold">Password</label>
                                    <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="inputPassword4" placeholder="Enter the password" required />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label text-primary fw-bold">User Name</label>
                                    <input type="text" class="form-control" id="name" value={fullname} onChange={handleChange} placeholder="Enter the Name here" required />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label text-primary fw-bold">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" value={adress} onChange={(e)=>setAdress(e.target.value)} placeholder="Enter the Address here" required />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label text-primary fw-bold">Landmark</label>
                                    <input type="text" class="form-control" id="inputAddress2" value={landmark} onChange={(e)=>setLandmark(e.target.value)} placeholder="Apartment, studio, or floor" required />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label text-primary fw-bold">City</label>
                                    <input type="text" class="form-control" value={city} onChange={handleInputChange} id="inputCity"required />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label text-primary fw-bold" >State</label>
                                    <select id="inputState" class="form-select" value={state} onChange={(e)=>setState(e.target.value)}>
                                        <option>Andhra Pradesh</option>
                                        <option>Telengana</option>
                                        <option>West Bengal</option>
                                        <option>Mumbai</option>
                                        <option>Tamil Nadu</option>
                                        <option>Maharashtra</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label text-primary fw-bold">Zip</label>
                                    <input type="number" class="form-control" value={pincode} onChange={(e)=>setPincode(e.target.value)} id="inputZip" required />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label class="form-check-label text-primary fw-bold" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-primary" onClick={submit}>Sign Up</button>
                                </div>
                            </form>
                            <p className="pt-3">Already Have a Account?<Link to='/Login'>Sign In here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Registration;