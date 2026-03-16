//1. data on console log
const form = document.getElementById("myForm");

form.addEventListener("submit",function(e){
    e.preventDefault()
  const namee=  document.getElementById("name").value
  const email=  document.getElementById("email").value
  const pass = document.getElementById("password").value
  const hobbies = document.querySelectorAll('input[name="hobbies"]')

  let slectedhobbies=[]
  hobbies.forEach(function(hobby){
    if(hobby.checked){
        slectedhobbies.push(hobby.value)
        // console.log(hobby);
        
    }
  })
    
  const data ={
    name:namee,
    email:email,
    password:pass,
    hobbies:slectedhobbies

  }
  // console.log(data);
  
    
})
//2.input count
const count = document.getElementById("count")
count.addEventListener("input",function(e){
    let inp = e.target.value.length;
    // count.value = inp.length;
    

   console.log(inp);
   
   
})
//3. form validation
const form = document.getElementById("myForm");
const err= document.getElementById("error")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let password=document.getElementById("password").value;
    let pass2=document.getElementById("password2").value;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name==""||email==""|| password==""|| pass2==""|| phone==""){
       err.textContent="Please fill all the fields";
   }else if((phone.length<10) || (phone.length>10)){
    err.textContent="Please enter a valid phone number";
 
   }else if(password.length<8){
    err.textContent="Password must be at least 8 characters long";
   }else if(regex.test(email)==false){
    err.textContent="Please enter a valid email address";
   }
})