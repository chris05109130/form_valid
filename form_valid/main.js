const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const success = document.getElementById('success');

form.addEventListener('submit',runData);

function showError(message){
    success.innerHTML = message;
}

function ifEmpty(){
    if(username.value ==''){
        showError('Username must be filled out');
    }else if(password.value === ''){
        showError('Password must be filled out');
    }else if(password2.value ===''){
        showError('Password2 Must be filled out');
    } else if(email.value === ''){
        showError('Email must be filled out');
    }else{
        success.innerHTML = 'Successful Entry';
        success.classList.add('success');
    }
}

function passwordsMatch(){
    if(password.value !== password2.value){
        showError('Passwords Do not Match');
        success.classList.add('error');
    }
}

function validLength(){
    if(username.value.length < 5){
        showError('Username must be more than 5 characters');
      
    }else if(password.value.length < 5){
        showError('Password must be more than 5 characters');
     
    }else if(password2.value.length <5){
        showError('Password2 must be more than 5 characters');
       
    }else if(email.value.length<5){
        showError('Email must be more than 5 characters');
        
    }
    
}
function resetFields(){
    username.value = '';
    password.value = '';
    password2.value = '';
    email.value = '';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function runData(e){
    e.preventDefault();
    ifEmpty();
    passwordsMatch();
    validLength();
    validateEmail(email);
    resetFields();
}