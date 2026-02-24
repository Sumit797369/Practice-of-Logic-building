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
console.log(abc("a"));
