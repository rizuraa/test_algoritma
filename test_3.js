function wordCount(input, query) {    
    const wordMap = {};
    
    input.forEach(word => {
        if (wordMap[word]) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    });
    
    const result = query.map(word => wordMap[word] || 0);
    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = wordCount(INPUT, QUERY);
console.log(OUTPUT);  // Output: [1, 0, 2]
