// Userstate.js
import { createState } from 'react';  // This import may be causing the issue

export const setUserData = (userData) => {
  const [userState, setUserState] = createState(userData);  // Check this line
  // ... your logic to set user data
};
