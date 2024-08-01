function longest(sentence) {
    const words = sentence.split(' ');        
    let longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");        
    console.log(`${longestWord}: ${longestWord.length} character`);
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
longest(sentence);