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