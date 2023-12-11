import { useState } from 'react';

export function useSuccessfulPaymentCourses() {
  const [successfulPaymentCourses, setSuccessfulPaymentCourses] = useState([]);

  const addSuccessfulPaymentCourse = (course) => {
    setSuccessfulPaymentCourses((prevCourses) => [...prevCourses, course]);
  };

  return { successfulPaymentCourses, addSuccessfulPaymentCourse };
}