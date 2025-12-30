
let form = document.querySelector('#registrationForm');
let nameinp = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm');
let successMsg = document.querySelector('#successMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      
function setError(group, message){
  group.className = 'form-group error';
  group.querySelector('.error-message').textContent = message;
}

function setSuccess(group){
  group.className = 'form-group success'
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nameValue = nameinp.value;
  let emailValue = email.value.trim();
  let passwordValue = password.value;
  let confirmPw = confirmPassword.value;

  let isFormValid = true;

  if(nameValue === ''){
    setError(nameGroup, 'Name is required');
    isFormValid = false;
  } else {
    setSuccess(nameGroup);
  }
  if(!emailRegex.test(emailValue)){
    setError(emailGroup, 'Enter a valid email');
    isFormValid = false;
  } else {
    setSuccess(emailGroup);
  }

  if(passwordValue.length < 8){
    setError(passwordGroup, 'Password must be at least 8 characters');
    isFormValid = false;
  } else {
    setSuccess(passwordGroup);
  }

  if(confirmPw !== passwordValue || passwordValue === ''){
    setError(confirmGroup, 'Passwords do not match');
    isFormValid = false;
  } else {
    setSuccess(confirmGroup);
  }

  if(isFormValid){
    successMsg.style.display = 'block';
    form.reset();
    document.querySelectorAll('.form-group').forEach(g => 
      g.className = 'form-group')
  }
})