// 3. Find a random string of particular length
//another way
let getRandomString = (length) => {
    const wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        let randomNum1 = Math.random() * wordChars.length;
        let index = Math.floor(randomNum1);
        let c = wordChars.charAt(index);
        randomString += c;
    }
    return randomString;
 
}
 
let randString = getRandomString(5);
console.log(randString);