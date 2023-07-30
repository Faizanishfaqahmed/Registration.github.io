const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const registerBox =document.querySelector('.register');
const loginBtn =document.querySelector('.btnLogin');
const iconClose =document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    registerBox.classList.add('active');
   
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    registerBox.classList.remove('active');
    
   
});

loginBtn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    
});

function register(){
  var fname, uname , pass, cpass, tCondition;
  fname = document.getElementById('firstName').value;
  uname = document.getElementById('userName').value;
  pass = document.getElementById('pass').value
  cpass = document.getElementById('cPass').value;
  tCondition = document.getElementById('tconditions').value;
    let data = [fname,uname,pass,cpass,tCondition];
    if (!data ){
alert("please fill the data");
    }
    else{
        console.log(data); 
 var dat = localStorage.setItem("data",JSON.stringify(data));
 alert("Regiseterd successfully");

    }
  


 } 

 function logIn(){
alert("Login");
var getDat =localStorage.getItem("data");
 let getData = JSON.parse(getDat);
 console.log(getData[1]);
 console.log(getData[2]);

var enteredUser = document.getElementById("fname").value;
var enteredPassword = document.getElementById("passWord").value;
let enteredData = [enteredUser,enteredPassword];
console.log(enteredData[0],getData[1]);


if(enteredData[0]==getData[1] && enteredData[1]==getData[2]){
    alert("Login successful");
    window.location.href="./todoapp/Todo.html";
    enteredUser="";
    enteredPassword="";
}
else{
    alert("wrong Username or password");
    enteredUser="";
    enteredPassword="";
}

 }
    
 