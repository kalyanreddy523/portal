import axios from "axios";
import { useState } from "react";
import { getCustomerDetails } from "./Authstate";
import { Link } from "react-router-dom";

const Changepassword=()=>{
    const[password,setPassword]=useState('');
    const[repassword,setRepassword]=useState('');

    const submit=async()=>{
        if(password===''){
            document.getElementById('message').innerHTML='enter the new password';
            document.getElementById('message').style.color='red';
            document.getElementById('pass').style.borderColor='red';
        }else if(repassword===''){
            document.getElementById('remessage').innerHTML='enter the re-password';
            document.getElementById('remessage').style.color='red';
            document.getElementById('repass').style.borderColor='red';
        }else if(password===repassword){
        const data={
            password,
        }
        const userdetails=getCustomerDetails();
        if(userdetails){
        try{
            const response=axios.put(`http://localhost:8085/api/registration/${userdetails.id}`,data)

            setPassword('');
            setRepassword('');
            document.getElementById('sucessmessage').innerHTML='your password has been changed successfully';
            document.getElementById('redirect').innerHTML='Go to Login page';
            console.log(response);
        }catch{
            console.log("some error occured");
        }
    }else{
        alert("changing the password is failed");
    }
    }
    }
    return(
        <>
        <div className="container-fluid">
            <div className="container mx-auto d-block">
                <div className="row">
                    <div className="col-12">
                        <div className="card bg-body-secondary mx-auto d-block p-3 mt-5" style={{width:"30rem"}}>
                            <label className="text-info p-2 fw-bold">New Password</label>
                        <input type="text" placeholder="Enter the New Password" id="pass" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                        <span id="message" className="fw-bold text-center p-2"></span>
                        <br/>
                        <label className="text-info p-2 fw-bold">Re-Enter Password</label>
                        <input type="text" placeholder="Re-Enter the password" id="repass" value={repassword} onChange={(e)=>setRepassword(e.target.value)} className="form-control"/>
                        <span id="remessage" className="fw-bold text-center p-2"></span>
                        <div>
                            <button className="btn btn-success mt-4 fw-bold" onClick={submit}>Change the password</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                    <span id="sucessmessage" className="text-success fw-bold text-center"></span>
                    <div className="mt-3">
                    <Link to='/Login' className="text-info fw-bold" id="redirect"></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Changepassword;