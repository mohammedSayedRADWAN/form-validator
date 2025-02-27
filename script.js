const form=document.getElementById('form');
console.log(form);
const username=document.getElementById('username');
console.log(username);
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
// functions
function showError(input,message){
const formControl=input.parentElement
// add class error to add style error 
formControl.className='form-control error'
// 2- show message error
const small=formControl.querySelector('small')
small.innerText=message
}
function showSuccess(input){
  const formControl=input.parentElement
  // add class success to add style success 
  formControl.className='form-control success'
  }
  function validateEmail  (email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  //function check required
  function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim()===''){
          showError(input,`${getFelidName(input)} is required`)
        }
        else{
          showSuccess(input)

        }
    });
  }

  // get file name
  function getFelidName(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
  }
// checkLength function
    function checkLength(input,min,max){
if (input.value.length<min) {
  showError(input,`${getFelidName(input)} must greater than ${min} chars`)

} 

else if(input.value.length>max){
  showError(input,`${getFelidName(input)} must smaller than ${max} chars`)

}else {
  showSuccess(input)
}
    }
    //check password mtch confrm
    function checkPasswordMatch(pass1,pass2){
      if (pass1.value!==pass2.value) {
        showError(pass2,"password don't match confirm password")
      } 
    
    }
    
//Event listeners
form.addEventListener('submit',function (e){
  // to stop flash
  e.preventDefault();
  checkRequired([username,email,password,password2])
  checkLength(username,3,15)
  checkLength(password,6,25)
  checkPasswordMatch(password,password2)

 
})