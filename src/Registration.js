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
        var Email=document.getElementById("inputEmail4");
        var Password=document.getElementById("inputPassword4");
        var Fullname=document.getElementById("name");
        var Address=document.getElementById("inputAddress");
        var Adress1=document.getElementById("inputAddress2")
        var City=document.getElementById("inputCity");
        var State=document.getElementById("inputState");
        var zip=document.getElementById("inputZip");
        var checkbox=document.getElementById("gridCheck");

        if(Email.value==''){
                alert("email is a Required Field");
                document.getElementById("inputEmail4").style.borderColor="red";
        }
        else if(Password.value==''){
            alert("password is a Required field");
            document.getElementById("inputPassword4").style.borderColor="red";
        }
        else if(Fullname.value==''){
            alert("fullname is a Required field");
            document.getElementById("inputPassword4").style.borderColor="red";
        }
        else if(Address.value==''){
            alert("Adress is a Required field");
            document.getElementById("inputAddress").style.borderColor="red";
        }
        else if(Adress1.value==''){
            alert("Adress2 is a Required Field");
            document.getElementById("inputAddress2").style.borderColor="red";
        }
        else if(City.value==''){
            alert("City is a Required field");
            document.getElementById("inputCity").style.borderColor="red";
        }
        else if(State.value==''){
            alert("State is a Required field");
            document.getElementById("inputState").style.borderColor="red";
        }
        else if(zip.value==''){
            alert("zip is a Required field");
            document.getElementById("inputZip").style.borderColor="red";
        }
        else if(checkbox.checked==''){
            alert("fill the Checkbox");
            document.getElementById("gridCheck").style.borderColor="red";
        }
        else{
            alert("Registration successful")
        }
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

        }catch{
            console.log("error occured");
        }


    }

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
                                    <label for="inputAddress" class="form-label text-primary fw-bold">Name</label>
                                    <input type="text" class="form-control" id="name" value={fullname} onChange={(e)=>setFullName(e.target.value)} placeholder="Enter the Name here" required />
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
                                    <input type="text" class="form-control" value={city} onChange={(e)=>setCity(e.target.value)} id="inputCity"required />
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
                                    <input type="text" class="form-control" value={pincode} onChange={(e)=>setPincode(e.target.value)} id="inputZip" required />
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