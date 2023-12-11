import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { getEmailInputValue } from './Authstate';
import { getNameInputValue } from './Namestate';
import { getUserDetails } from './Authstate';
import pic from './img/certificate.jpg';
import signature from './img/signature.png';

const Certificate = () => {
  const [data, setData] = useState([]);
  const email=getEmailInputValue();
  const Name=getNameInputValue();
  const userdetail=getUserDetails();
  const c = new Date();
    const currentDate = c.toLocaleDateString();

  const handleDownloadCertificate = (name, emailid,Date) => {
    const pdf = new jsPDF();
    pdf.addImage(pic, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    pdf.addImage(signature,'PNG',45,170);
    // pdf.text('Certificate of Achievement', 20, 50);
    pdf.text('This is to certify that' +' '+ name + ' has successfully completed', 20, 130);
    pdf.text('the course',20,140);
    pdf.text('Date of Completion: '+' '+Date, 20, 160);
    pdf.text('Signature:', 20, 190);
    pdf.text('Email: ' + emailid, 20, 210);

    pdf.save('Certificate.pdf');
  };

  return (
    <div>
    <div className="container-fluid">
    <div className="row mt-5">
        <div className="col-4 ps-5">
        <button
            type="button"
            onClick={() => handleDownloadCertificate(userdetail.fullname, email,currentDate)}
          >
            <div className='card' style={{width:"18rem",opacity:"0.5",borderRadius:"10px"}}>
              <img src='https://i.pinimg.com/originals/83/ed/2a/83ed2a87cc010de0c17e66eddcd62e0a.jpg' className='img-fluid' alt='certfifcateimage'/>
            </div>
          </button>
        </div>
    </div>
</div>
    </div>
  );
};

export default Certificate;
