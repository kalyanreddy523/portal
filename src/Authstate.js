let emailInputValue = '';

export const setEmailInputValue = (value) => {
  emailInputValue = value;
};

export const getEmailInputValue = () => {
  return emailInputValue;
};

let userDetails = null;

export function setUserDetails(user) {
  userDetails = user;
}

export function getUserDetails() {
  return userDetails;
}

let paymentDetails = null;

export function setPaymentDetails(payment) {
  paymentDetails = payment;
}

export function getPaymentDetails() {
  return paymentDetails;
}


let customerDetails = null;

export function setCustomerDetails(user) {
  customerDetails = user;
}

export function getCustomerDetails() {
  return customerDetails;
}