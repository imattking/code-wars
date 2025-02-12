/*
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash(words) {
    return words.join(' ');
};

// Run Tests
console.log(smash(['hello', 'world', 'this', 'is', 'great']), "hello world this is great");

function evenMoreSmash(str) {
    // let array = str.split('-');
    // let newStr = array.join(' ');
    // return newStr;
    return str.split('-').join(' ');
};

console.log(evenMoreSmash('A-very-very-large-and-rotund-and-quite-beefy-chipmunk-is-pooping-a-really-really-gross-amount'));