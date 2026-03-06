const count = document.getElementById("count")
count.addEventListener("input",function(e){
    const inp = document.createElement("h1")

    inp.innerHTML= e.target.value.length
})