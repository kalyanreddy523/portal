// Profile.js

import React, { useEffect, useState } from 'react';
import { getUserDetails } from './Authstate';

function Profile() {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const userDetails = getUserDetails();
    if (userDetails) {
      fetch(`http://localhost:8085/api/registration/${userDetails.id}`)
        .then((response) => response.json())
        .then((profileData) => {
          setUserProfile(profileData);
          console.log(profileData);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []); 

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
               <p className='text-center fw-bold fs-2'>User module</p>
               {Object.keys(userProfile).length > 0 && (
  <div>
    <p><span className='fw-bold'>ID:</span> {userProfile.id}</p>
    <p><span className='fw-bold'>Name:</span> {userProfile.fullname}</p>
    <p><span className='fw-bold'>Email Id:</span> {userProfile.email}</p>
    <p><span className='fw-bold'>Adress:</span> {userProfile.adress}</p>
    <p><span className='fw-bold'>State:</span> {userProfile.state}</p>
    <p><span className='fw-bold'>Pincode:</span>{userProfile.pincode}</p>
  </div>
)}

            </div>
        </div>
    </div>
    </>
  );
}

export default Profile;
