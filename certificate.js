import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { getEmailInputValue } from './Authstate';
import { getNameInputValue } from './Namestate';

const Certificate = () => {
  const [data, setData] = useState([]);
  const email=getEmailInputValue();
  const Name=getNameInputValue();

  const handleDownloadCertificate = (name, emailid) => {
    const pdf = new jsPDF();

    pdf.text('Certificate of Achievement', 20, 20);
    pdf.text('This is to certify that', 20, 30);
    pdf.text(name + ' has successfully completed the course', 20, 40);
    pdf.text('Date of Completion: ', 20, 50);
    pdf.text('Signature:', 20, 60);
    pdf.text('Email: ' + emailid, 20, 70);

    pdf.save('Certificate.pdf');
  };

  return (
    <div>
    <div className="container-fluid">
    <div className="row mt-5">
        <div className="col-4 ps-5">
        <button
            type="button"
            onClick={() => handleDownloadCertificate(Name, email)}
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
