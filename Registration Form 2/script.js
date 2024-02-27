const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

form.addEventListener('submit', function(event) {
  let isValid = true;

  if (usernameInput.value.length < 5) {
    usernameError.textContent = 'Username must be at least 5 characters';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }

  if (!emailInput.value.includes('@')) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    isValid = false;
  } else {
    confirmPasswordError.textContent = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});
