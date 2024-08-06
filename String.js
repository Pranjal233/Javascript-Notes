
//Different ways to create string or declare string

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;    //backticks
const string4 = new String("A String object");

const name='Pranjal';
const age=30;

console.log(`My name is ${name} and my age is ${age}.`)   //string literals or string interploation

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));  // Expected output: "the lazy dog."

console.log(str.slice(4, 19)); // Expected output: "quick brown fox"

console.log(str.slice(-4)); // Expected output: "dog."

console.log(str.slice(-9, -5)); // Expected output: "lazy"






const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
