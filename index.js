const passwordBox = document.getElementById('otp');
const length = 12;
const number = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allChars = upperCase + number;
function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("Copy");
}

// const generatedOTP = createPassword();
// function validateOTP(input){
//   return input === generatedOTP;
// }


// document.getElementById('otpform').addEventListener('submit', function(event){
//   event.preventDefault();

//   const userInput = document.getElementById('otpIput').value;

//   if(validateOTP(userInput)){
//     window.location.href ='./form.html';
//   }else{
//     alert('Invalid OTP. Please try again');
//   }
// })


// const otpField = document.getElementById('otpIn');
// const signInBtn = document.getElementById('signIn');

// signInBtn.addEventListener('click', function(){
//   window.location.href = './form.html';
// });



// function  validateOTP(){
//   if(otpField.value == passwordBox.value){

//   }
// }















// function copyPassword() {
//   passwordBox.select();
//   document.execCommand('copy');
// }