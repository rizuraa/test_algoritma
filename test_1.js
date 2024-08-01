function reverseAlphabets(str) {
    const alphabets = str.replace(/\d/g, ''); // alphabat
    const digits = str.replace(/[A-Za-z]/g, ''); // number    
    const reversedAlphabets = alphabets.split('').reverse().join('');    
    return reversedAlphabets + digits;
}

let input = "NEGIE1";
let output = reverseAlphabets(input);
console.log(output);  // Output: "EIGEN1"
