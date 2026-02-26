function checkVowels(char = '0'){
    if('aeiou'.includes(char.toLowerCase()) && char != ""){
        return 'vowel'
    } else if(/[a-z]/.test(char.toLowerCase())){
        return 'Consonants'
    }
    return 'Not a Valid aplhabet'
}
