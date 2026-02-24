//conditional problem

//q1. Maximum of three no.
function maxOfThree(a,b,c) {
    let max;
    if(a>=b && a>=c){
        max={a}
    }else if(b>=c){
        max={b}
    }else{
        max={c}
    }
    return max;
}
console.log(maxOfThree(10,20,5));
//opti
function maxOfThree(a,b,c) {
   let max= Math.max(a,b,c)
return max
}
console.log(maxOfThree(100,10,10));
//q2. check if a no. is positive,neg,zero
function posNegZero(a) {
    let num;
    if(a<0){
        num='negative';
    }else if(a>0){
        num='positive';
    }else if(a==0){
        num='zero';
    }
    return num;
}
console.log(posNegZero(0));
 
//q3. electricity bill
function unitCalculation(unit){
let total = 0;
if(unit<=100){
    total = unit*5;
}else if(unit<=200){
total=(100*5)+(unit -100 )*7;
}else if(unit<=300){
    total = (100*5)+(100*7)+(unit - 200)*10;
}else {
    total = (100*5)+(100*7)+(100*10)+(unit - 300)*12
}
return total
}
console.log(unitCalculation(230));
//q4. Check if a Character is a Vowel or Consonant
function vowel(vow){
    let output;
    if (vow == "a"||vow == "e"||vow == "i"||vow == "o"||vow == "u"){
        output="it is vowel"
        
    }else{
        output="invalid"
        
    }
    return output
}
console.log(vowel("c"));

//or
function checkVowels(char = '0'){
    if('aeiou'.includes(char.toLowerCase()) && char != ""){
        return 'vowel'
    } else if(/[a-z]/.test(char.toLowerCase())){
        return 'Consonants'
    }
    return 'Not a Valid aplhabet'
}

//q5.Leap year
function leapYear(a){
    let b;
    if (a%4 == 0 && a % 100 != 0 || a%400 == 0) {
        b = "Leap Year";
    }else{
        b = "Not Leap Year"
    }
    return b;
}
console.log(leapYear(2000));

 //charcodeAt
function abc(val){
if(val.charCodeAt(0)>=65 && val.charCodeAt(0)<=90 ){
    return 'Uppercase'
}else if(val.charCodeAt(0)>=97 && val.charCodeAt(0)<=122){
    return 'LowerCase'
}else if(val.charCodeAt(0)>=48 && val.charCodeAt(0)<=57){
    return 'Digit'
}else{
    return 'special char'
}
}