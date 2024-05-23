const form = document.getElementById('form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const firstNameError = document.getElementById('firstName_error');
const lastNameError = document.getElementById('lastName_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  
  let isValid = true;

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    firstNameError.textContent = 'First Name is required';
    isValid = false;
  } else {
    firstName.classList.remove('error');
    firstNameError.textContent = '';
  }

  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    lastNameError.textContent = 'Last Name is required';
    isValid = false;
  } else {
    lastName.classList.remove('error');
    lastNameError.textContent = '';
  }

  // Check email
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.textContent = 'Valid Email is required';
    isValid = false;
  } else {
    email.classList.remove('error');
    emailError.textContent = '';
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.textContent = 'Please enter a Password';
    isValid = false;
  } else {
    password.classList.remove('error');
    passwordError.textContent = '';
  }

  if (isValid) {
    console.log('Form submitted successfully');
    form.reset(); // Reset the form fields
  }
});

// Validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Add input event listeners to clear errors immediately
firstName.addEventListener('input', () => {
  if (firstName.value.trim() !== '') {
    firstName.classList.remove('error');
    firstNameError.textContent = '';
  }
});

lastName.addEventListener('input', () => {
  if (lastName.value.trim() !== '') {
    lastName.classList.remove('error');
    lastNameError.textContent = '';
  }
});

email.addEventListener('input', () => {
  if (validateEmail(email.value.trim())) {
    email.classList.remove('error');
    emailError.textContent = '';
  }
});

password.addEventListener('input', () => {
  if (password.value.trim() !== '') {
    password.classList.remove('error');
    passwordError.textContent = '';
  }
});
