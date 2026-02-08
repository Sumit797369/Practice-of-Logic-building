//Number Problems:

const a=Number(prompt('give no.'));
// q1. print 1 to n
for (let i = 0; i <a; i++) {



    console.log(i);
}

// q2.reverse of the above ques
for(i=a;i>=1;i--){
    console.log(i);
    
}

for(let i=1;i<=a;i++){
    console.log(a-i+1)
    
    ;
    
}
// q3. print even no.
for(let i=1;i<=a;i++){
    if(i%2===0){
        console.log(i);
        
    } 
}

// q4.sum of n nntural no.;
//a.
var b=0;
for(let i=1;i<=a;i++){
    b+=i
    
}
console.log(b); 
//b. optimized
console.time()
// const a=Number(prompt('give no.'));
const aa = 1000000
let sum = (aa * (aa + 1)) / 2
console.log(sum);
console.timeEnd()
//q5. factorial  
function abc(n) {
    let  fct=1;
    for(let i=1;i<=n;i++){
        fct *= i;
    }
    return fct;
}
console.log(abc(Number(prompt('give no.'))));
//q6 sum of all even no. upto N
let sum1 = 0;
for (let i = 1;i<=a;i++ ){
    if(i%2===0) sum1 +=i  
    
    console.log(sum1);
    
}
//opti with fromula
function sumOfEvenNumber(n){
    let count = Math.floor(n/2);
    return count * (count +1)
}
console.log(sumOfEvenNumber(9));
// q7. Print sq of no. from 1 to n
function sqOfNum(n){
    for(let i=1;i<=n;i++){
        // console.log(i ** 2);
        console.log(Math.pow(i,2));
        
    }
}
sqOfNum(10)
