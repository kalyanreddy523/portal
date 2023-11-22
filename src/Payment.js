import axios from 'axios';
import jsPDF from 'jspdf';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getEmailInputValue } from './Authstate';
import { getNameInputValue } from './Namestate';

const Payment=()=>{
    const Email=getEmailInputValue();
    const Name=getNameInputValue();
    const c = new Date();
    const currentDate = c.toLocaleDateString();
    const[customerid,setCustomerId]=useState(Email);
    const[status,setStatus]=useState("success");

    const submit=(name, email,Date)=>{
        const data={
           customerid,
           status,

        }
        try{
        const response=axios.post("http://localhost:8085/api/payment",data);
            setCustomerId('');
            setStatus("success");
            console.log(Email);
            console.log(Name);
            alert("paymentdone successfully");
            const pdf = new jsPDF();
            

                pdf.text('Payment Reciept', 80, 20);
                pdf.text('Date:'+Date, 80, 40);
                pdf.text(name + ' has successfully paid for the course', 80, 60);
                 pdf.text('Email: ' + email, 80, 80);
                 pdf.text('Status:Success',80,90);
                pdf.save('PaymentReciept.pdf');
        }catch{
            console.log("error occured");
        }
    }

return(
    <>
    <div className="container-fluid">
        <div className="container bg-body-tertiary p-5 mt-5">
            <div className="row">
            <div className="col-12">
                <p className="fs-5" style={{fontFamily:"verdana"}}>Cardnumber</p>
                <input type="text" className="form-control" placeholder="Enter the Card number"/>
                </div>
                <div className="col-6">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Expiration</p>
                    <input type="text" className="form-control" placeholder="MM/YY"/>
                </div>
                <div className="col-6">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Cvv</p>
                    <input type="text" className="form-control" placeholder="MM/YY"/>
                </div>
                <div className="col-6">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Country</p>
                    <input type="text" className="form-control" placeholder="Enter the country here"/>
                </div>
                <div className="col-6">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Zip</p>
                    <input type="text" className="form-control" placeholder="enter the pincode"/>
                </div>
                <div className="col-12 mt-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                I agree with Terms and Conditions
                    </label>
                </div>
                </div>
                <div>
                    <div className="col-6 mt-3">
                    <button class="btn btn-danger" type="button">Cancel</button>
                    <button class="btn btn-primary ms-3" type="button" onClick={() => submit(Name, Email,currentDate)}>Paynow</button>
                    <Link class="btn btn-primary ms-3" type="button" to='/certificate'  >View the Reciept</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Payment;