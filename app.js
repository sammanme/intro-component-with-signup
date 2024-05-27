const form = document.getElementById('form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const firstNameError = document.getElementById('firstName_error');
const lastNameError = document.getElementById('lastName_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');
const togglePassword = document.querySelector('.toggle-password');

const firstNameErrorIcon = document.getElementById('firstName_error_icon');
const lastNameErrorIcon = document.getElementById('lastName_error_icon');
const emailErrorIcon = document.getElementById('email_error_icon');
const passwordErrorIcon = document.getElementById('password_error_icon');

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
    firstNameError.textContent = 'First Name cannot be empty';
    firstNameError.style.display = 'inline';
    firstNameErrorIcon.style.display = 'inline';
    isValid = false;
  } else {
    firstName.classList.remove('error');
    firstNameError.textContent = '';
    firstNameError.style.display = 'none';
    firstNameErrorIcon.style.display = 'none';
  }

  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    lastNameError.textContent = 'Last Name cannot be empty';
    lastNameError.style.display = 'inline';
    lastNameErrorIcon.style.display = 'inline';
    isValid = false;
  } else {
    lastName.classList.remove('error');
    lastNameError.textContent = '';
    lastNameError.style.display = 'none';
    lastNameErrorIcon.style.display = 'none';
  }

  // Check email
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.textContent = 'Looks like this is not an email';
    emailError.style.display = 'inline';
    emailErrorIcon.style.display = 'inline';
    isValid = false;
  } else {
    email.classList.remove('error');
    emailError.textContent = '';
    emailError.style.display = 'none';
    emailErrorIcon.style.display = 'none';
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.textContent = 'Password cannot be empty';
    passwordError.style.display = 'inline';
    passwordErrorIcon.style.display = 'inline';
    isValid = false;
  } else {
    password.classList.remove('error');
    passwordError.textContent = '';
    passwordError.style.display = 'none';
    passwordErrorIcon.style.display = 'none';
  }

  if (isValid) {
    console.log('Form submitted successfully');
    alert('Form submitted successfully'); // Show alert
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
    firstNameErrorIcon.style.display = 'none';
  }
});

lastName.addEventListener('input', () => {
  if (lastName.value.trim() !== '') {
    lastName.classList.remove('error');
    lastNameError.textContent = '';
    lastNameErrorIcon.style.display = 'none';
  }
});

email.addEventListener('input', () => {
  if (email.value.trim() !== '') {
    email.classList.remove('error');
    emailError.textContent = '';
    emailErrorIcon.style.display = 'none';
  }
});

password.addEventListener('input', () => {
  if (password.value.trim() !== '') {
    password.classList.remove('error');
    passwordError.textContent = '';
    passwordErrorIcon.style.display = 'none';
  }
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.querySelector('i').classList.toggle('fa-eye');
  togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
});