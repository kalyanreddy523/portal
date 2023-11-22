import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { getEmailInputValue } from './Authstate';
import pic from './img/signature.png';

const Reciept = () => {
  const [data, setData] = useState([]);
  const email=getEmailInputValue();

  useEffect(() => {
    fetch("http://localhost:8085/api/registration")
      .then((response) => response.json())
      .then((coursedata) => setData(coursedata));
  }, []);

  const handleDownloadCertificate = (name, emailid,picture) => {
    const pdf = new jsPDF();

    pdf.text('Certificate of Achievement', 20, 20);
    pdf.text('This is to certify that', 20, 30);
    pdf.text(name + ' has successfully completed the course', 20, 40);
    pdf.text('Date of Completion: ', 20, 50);
    pdf.text('Signature:', 20, 60);
    const imgData = <img src={pic}/> + picture; // Assuming 'picture' is a base64-encoded image
    pdf.addImage(imgData, 'PNG', 20, 60, 50, 20);
    pdf.text('Email: ' + emailid, 20, 70);

    pdf.save('Certificate.pdf');
  };

  return (
    <div>
      {data.map((list) => (
        <div key={list.id}>
          <p>{list.fullname}</p>
          <p>{email}</p>
          <button
            type="button"
            onClick={() => handleDownloadCertificate(list.fullname, email,pic)}
          >
            Generate Certificate
          </button>
        </div>
      ))}
    </div>
  );
};

export default Reciept;
