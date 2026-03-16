let prm = new Promise((resolve, reject) => {
  console.log("aa rha hai");
  
setTimeout(()=>{
  resolve("done")
},200)
});
prm.then((res)=>{
  console.log(res);
  
})