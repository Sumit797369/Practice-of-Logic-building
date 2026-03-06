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
    }
  })
    
  const data ={
    name:namee,
    email:email,
    password:pass,
    hobbies:slectedhobbies

  }
  console.log(data);
  
    
})
