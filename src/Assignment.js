// FileUploadComponent.js
import axios from 'axios';
import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const[assignmentname,setAssignmentname]=useState("Create a Html Login Page?");
  const[assignmentfile,setAssignmentfile]=useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setAssignmentfile(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const data={
            assignmentname,

        }
        const files={
          assignmentfile,
        }

    try {
      const response=axios.post("http://localhost:8085/api/assignment",data);
      const posting=axios.post("http://localhost:8085/api/uploadfile",files);

      setAssignmentname('');
      setAssignmentfile('');

      if (posting) {
        alert('File uploaded successfully.');
        // You can handle success here
      } else {
        console.error('Failed to upload file.');
        // Handle error
      }
    } catch (error) {
      console.error('Error during file upload:', error);
      // Handle error
    }
  };

  return (
    <div className='mt-5 bg-body-tertiary p-5'>
      <p className='text-center fs-4 text-info' style={{fontFamily:"Verdana"}}>{assignmentname}</p>
      <input type="file" onChange={handleFileChange} /><br/>
      <button onClick={handleSubmit} className='btn btn-info text-white mt-3'>Submit</button>
    </div>
  );
};

export default FileUploadComponent;
