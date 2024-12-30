function getmodifiedstring (input){

    //const vowels = "aeiouAEIOU"; 

    let removedVowels = input.replace(/[aeiouAEIOU]/g, '');

    removedVowels = removedVowels
        .split('')
        .map(char => 
            char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        )
        .join('');

    return removedVowels;
}

console.log(getmodifiedstring("Hello World"));