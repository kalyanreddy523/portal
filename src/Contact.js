import axios from "axios";
import { useState } from "react";

const Contact=()=>{
    const[emailid,setEmailid]=useState('');
    const[message,setMessage]=useState('');
    
    const submit=async()=>{
        if(emailid===''){
            alert('emailid cannot be empty');
            document.getElementById('inputemail').style.borderColor='red';
        }else if(message===''){
            alert('message cannot be empty');
            document.getElementById('inputmessage').style.borderColor='red';
        }else if(emailid.includes('@gmail.com')){

            
        const data={
            emailid,
            message,
        }
        try{
        const response =axios.post('http://localhost:8085/api/contact',data);

        setEmailid('');
        setMessage('');
        alert("message sent successfully");
        }
        catch{
            console.log("error occured");
        }
    }else{
        alert('enter the correct emailid');
    }
    }

    return(
        <>
        <div className="container-fluid bg-white p-5">
            <div className="container d-flex justify-content-center align-items-center pt-5 ">
            <div className="row">
                <div className="col-12 p-3">
                    <h3 className="text-primary fw-bold text-center">Contact</h3>
                </div>
                <form className="bg-body-tertiary rounded">
                <div className="col-12 p-3">
                <label for="exampleInputEmail1" className="form-label text-primary fw-bold">Email address</label>
                    <input type="text" placeholder="enter the mailid" id="inputemail" value={emailid} onChange={(e)=>setEmailid(e.target.value)} style={{width:"300px",height:"30px"}} className="form-control"/>
                </div>
                <div className="col-12">
                <label for="exampleInputEmail1" className="form-label text-primary fw-bold">Message</label>
                   <textarea style={{width:"300px",height:"200px"}} id="inputmessage" value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control"></textarea>
                </div>
                <div className="col-12 p-3">
                   <button className="btn btn-primary" onClick={submit}>send</button>
                </div>
                </form>
            </div>
            </div>
            </div>
        </>
    )
}
export default Contact;