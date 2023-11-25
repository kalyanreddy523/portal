import { createState } from 'react';

export const [authState, { setUserData }] = createState({
  isAuthenticated: false,
  userData: null,
});