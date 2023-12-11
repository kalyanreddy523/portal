import axios from 'axios';
import jsPDF from 'jspdf';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmailInputValue } from './Authstate';
import { getNameInputValue } from './Namestate';
import { getUserDetails,setPaymentDetails,getPaymentDetails } from './Authstate';
import { htmlamount,cloudamount,dataamount } from './Allcourses';

const Payment=()=>{
    const Email=getEmailInputValue();
    const Name=getNameInputValue();
    const userDetails = getUserDetails();
    const c = new Date();
    const currentDate = c.toLocaleDateString();
    const[customerid,setCustomerId]=useState(userDetails.id);
    const[status,setStatus]=useState("success");
    const[courses,setCourse]=useState('');
    const[course,setCourses]=useState(courses);
    const[card,setCard]=useState('');
    const[Month,setMonth]=useState('');
    const[cvv,setcvv]=useState('');
    const[pcode,setPcode]=useState('');
    const[Country,setCountry]=useState('');
    const[checkbox,setCheckbox]=useState('');
    const[holdername,setHoldername]=useState('');
    const[fetcheddata,setFetchedData]=useState([]);
    const[amount,setAmount]=useState('');
    
    


    const submit=async(name, email,Date,ID,course,tid,payment)=>{
       
        var inputname=document.getElementById('inputholdername');
        if(card===''){
            alert("Enter the card number");
            document.getElementById('inputcardnumber').style.borderColor='red';
        }else if(Month===''){
            alert("Month and Year are required fields");
            document.getElementById('inputmonth').style.borderColor='red';

        }else if(cvv===''){
            alert("Cvv is a Required field");
            document.getElementById("inputcvv").style.borderColor='red';
        }else if(pcode===''){
            alert("Pincode is a Required field");
            document.getElementById('inputpincode').style.borderColor='red';
        }else if(Country===''){
            alert("State is a Required field");
            document.getElementById("inputcountry").style.borderColor='red';
        }else if(card.length>16 || card.length<16){
            alert("Enter the 16 digit cardnumberonly");
            document.getElementById('inputcardnumber').style.borderColor='red';
        }else if(cvv.length>3 || cvv.length<3){
            alert("Cvv cant be more than 3 numbers");
            document.getElementById('inputcvv').style.borderColor='red';
            document.getElementById('inputcvv').innerHTML='Cvv cnat be more than three numbers';
        }else if(Month.length>5 || Month.length<5){
            alert("Only month and year should be there");
            document.getElementById('inputmonth').style.borderColor='red';
        }else if(pcode.length>6 || pcode.length<6){
            alert("Pincode length is not matching");
            document.getElementById('inputpincode').style.borderColor='red';
        }else if(holdername===''){
            alert("enter the cardholder name");
            document.getElementById('inputholdername').style.borderColor='red';
        }
       else  if (holdername==='!/^[a-zA-Z]+') {
            alert('Please enter only alphabets.');
        }
        
        
        else{

        try{
    //         const response = await axios.get("http://localhost:8085/api/payment");
    //   const fetchedLatestId = response.data.latestId;
    //   setFetchedData(fetchedLatestId);
            const data={
                customerid,
                status,
                course,
     
             }

        const Postresponse= axios.post("http://localhost:8085/api/payment",data);
            setCustomerId(userDetails.id);
            setStatus("success");
            setCourses(courses);
            console.log(name);
            console.log(email);
            console.log(userDetails.id);
            alert("paymentdone successfully");
            const paymentDetails = Postresponse.data; // Assuming your payment details are in the 'data' field of the response
            setPaymentDetails(paymentDetails);

            const pdf = new jsPDF();
            

                pdf.text('Payment Successful', 20, 20);
                pdf.text('Order Submitted successfully',20,30)
                pdf.text('Shipping Details',20,40);
                pdf.text('Customer Name','                                      ',name,20,50);
                pdf.text('customer Email:','                                    ',email,20,60);
                pdf.text('Order Date:','                                        ',Date, 20, 80);
                pdf.text('Order Id:','                                          ',ID,20,90);
                pdf.text('Transcation Id:','                                    ',tid,20,100);
                pdf.text('Status:Success',50,110);
                pdf.text('Total Cost:','                                        ',payment,20,140);
                pdf.save('PaymentReciept.pdf');
        }catch{
            console.log("error occured");
        }
    }
    
    }
    const handleCourseChange = (selectedCourse) => {
        setCourse(selectedCourse);
         if(selectedCourse==='Html' || selectedCourse==='Css'){
            setAmount(htmlamount);
       }else if(selectedCourse==='Cloudcomputing' || selectedCourse==='Datascience' || selectedCourse==='Python'){
           setAmount(cloudamount);
       }else if(selectedCourse==='Aws'){
           setAmount(dataamount);
       }
    }
    const validateCardholderName = (value) => {
        if (!value.trim() || !/^[a-zA-Z]+$/.test(value)) {
          alert('Please enter a valid Cardholder name with only alphabets.');
        }
      };
      const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setHoldername(inputValue);
        validateCardholderName(inputValue);
      };
      const inputstate = (value) => {
        if (!value.trim() || !/^[a-zA-Z]+$/.test(value)) {
          alert('Please enter a valid State Name with only alphabets.');
        }
      };
      const handleChange = (e) => {
        const inputValue = e.target.value;
        setCountry(inputValue)
        inputstate(inputValue);
      };
      const cancel=()=>{
        alert("Cancelled the Payment");
      }
    useEffect(() => {
       
        axios.get("http://localhost:8085/api/payment")
          .then(response => {
            const singleId = response.data[0].id;
            setFetchedData(singleId);
           })
          .catch(error => console.error("Error fetching data:", error));
      }, []);

return(
    <>
    <div className="container-fluid">
        <div className="container bg-body-tertiary p-5 mt-5">
            <div className='row'>
                <div className='col-12'>
                    <p className='fw-bold fs-2'>Course</p>
                    <select className='form-control-sm' value={courses} onChange={(e)=>handleCourseChange(e.target.value)}>
                        <option>Html</option>
                        <option>Css</option>
                        <option>Cloudcomputing</option>
                        <option>Datascience</option>
                        <option>Python</option>
                        <option>Aws</option>
                    </select>
                </div>
                <div className='col-12 mt-3 text-center'>
                    <span id='paymentvalue' className='text-success fw-bold fs-3 text-center'>Amount: {amount}</span>
                </div>
            </div>
            <div className="row">
            <div className="col-12 mt-2">
                <p className="fs-5" style={{fontFamily:"verdana"}}>Cardnumber</p>
                <input type="number" id='inputcardnumber'  value={card} onChange={(e)=>setCard(e.target.value)} className="form-control" placeholder="Enter the Card number"/>
                </div>
                <div className='col-12 mt-2'>
                <p className="fs-5" style={{fontFamily:"verdana"}}>Cardholdername</p>
                <input type='text' id='inputholdername' oninput="submit(this)" pattern="[a-zA-Z]+" value={holdername} onChange={handleInputChange} className='form-control' placeholder='Enter the Cardholder name'/>
                </div>
                <div className="col-6 mt-2">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Expired Month/Year</p>
                    <input type="tel" name='phone' pattern='[0-9]{2}-[0-9]{2}' id='inputmonth' value={Month} onChange={(e)=>setMonth(e.target.value)}  className="form-control" placeholder="MM/YY" required/>
                </div>
                <div className="col-6 mt-2">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Cvv</p>
                    <input type="number" id='inputcvv' value={cvv} onChange={(e)=>setcvv(e.target.value)} className="form-control" placeholder="CVV"/>
                </div>
                <div className="col-6 mt-2">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>State</p>
                    <input type="text" id='inputcountry' value={Country} onChange={handleChange} className="form-control" placeholder="Enter the state here"/>
                </div>
                <div className="col-6 mt-2">
                    <p className="fs-5" style={{fontFamily:"verdana"}}>Pincode</p>
                    <input type="number" id='inputpincode' value={pcode} onChange={(e)=>setPcode(e.target.value)} className="form-control" placeholder="enter the pincode"/>
                </div>
                <div className="col-12 mt-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value={checkbox} onChange={(e)=>setCheckbox(e.target.value)} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                I agree with Terms and Conditions
                    </label>
                </div>
                </div>
                <div>
                    <div className="col-6 mt-3">
                    <Link to='/allcourses' class="btn btn-danger" onClick={cancel} type="button">Cancel</Link>
                    <button class="btn btn-primary ms-3" type="button" onClick={() => submit(userDetails.fullname, userDetails.email,currentDate,userDetails.id,courses,fetcheddata,amount)}>Paynow</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}


export default Payment;