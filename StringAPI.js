// long string literal
let longString = "This is the string \
this is the string";
console.log(longString);
let sentence = "this is the sentence";
let sentenceObj = new String(sentence);
console.log(sentence.charAt(10));
console.log(sentence.charCodeAt(10));
console.log(sentence.concat('10'));
console.log(sentence.startsWith('this'));
console.log(sentence.endsWith('sentence'));
console.log(sentence.indexOf('t'));
console.log(sentence.repeat(5));
console.log(sentence.replace('this','This'));
sentence = sentence.replace('this','This');
console.log(sentence);


// substr(initIndex, len), substring(initIndex, len), slice(initIndex, len)