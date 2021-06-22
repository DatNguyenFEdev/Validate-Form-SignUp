var form = document.getElementById('form');
var userName = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var rePassword = document.querySelector('#rePassword');
var input = document.querySelector('.input');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var userNameValue = userName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var rePasswordValue = rePassword.value.trim();

    // ============= validate username ============
    if(userNameValue === '') {
        setError(userName, 'Please enter your fullname')
    }
    else if (!validateUsername(userNameValue)) {
        setError(userName, 'Invalid name given')
    }
    else {
        setSuccess(userName)
    }
    // ============= validate email ============

    if(emailValue === '') {
        setError(email, 'Please enter your email')
    }
    else if (!validateEmail(emailValue)) {
        setError(email, 'A valid email addressis required')
    }
    else {
        setSuccess(email)
    }
    // ============= validate password ============

    if(passwordValue === '') {
        setError(password, 'Please enter your password')
    }
    else if(passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 characters long.');
    }
    else {
        setSuccess(password)
    }
    // ============= validate repassword ============

    if(rePasswordValue === '') {
        setError(rePassword, 'Please enter your confirm password')
    }
    else if (rePasswordValue !== passwordValue) {
        setError(rePassword, 'Password mismatch')
    }
    else {
        setSuccess(rePassword)
    }
}

// =============== Xu ly error =================
function setError(input,message) {
    var formControl = input.parentElement;
    var spanElement = formControl.querySelector('.form-message');
    spanElement.innerText = message;
    // userName.classList.add('.error');
}

// =============== Xu ly success =================
function setSuccess(input) {
    var formControl = input.parentElement;
    var spanElement = formControl.querySelector('.form-message');
    spanElement.innerText = '';
}

// ===============Xu ly email=================
function validateEmail(emailValue) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
}

// =============== Xu ly username =================
function validateUsername(userNameValue) {
    const ref = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return ref.test(userNameValue);
}

