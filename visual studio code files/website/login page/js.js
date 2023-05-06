// Get the input values from the login form
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');

// Add a click event listener to the login button
loginButton.addEventListener('click', function() {
  // Save the username and password to localStorage
  localStorage.setItem('username', usernameInput.value);
  localStorage.setItem('password', passwordInput.value);
});
