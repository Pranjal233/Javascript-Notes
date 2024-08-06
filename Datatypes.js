
let count=2;
console.log(typeof (count));   //to know which type of data it holds
    //or
console.log(typeof count);     //number


let name="tyson"
let age=30
let isLoggedIn = false
let state = null


console.log(typeof "tyson");   //string

console .log(typeof state ); //or
console.log(typeof null); //object  (asked in interview)

console.log(typeof undefined);   //undefined 


//Datatype conversion

//number conversion
let score= "33abc" ;
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);     //NaN   (if value is "33abc") NaN -not a number
console.log(valueInNumber);     //0   (if value is null)
console.log(valueInNumber);     //NaN   (if value is undefined)
console.log(valueInNumber);     //1   (if value is true)
console.log(valueInNumber);     //NaN   (if value is "33abc")

//boolean conversion

let isLoggedOut= 1
let booleanIsLoggegOut =Boolean(isLoggedOut)

console.log(booleanIsLoggegOut);    //true (if value is 1)
// true (if value is "demo")
// false (if value is "")
// false (if value is 0)


//string conversion
let someNumber = 55;
let StringNumber = String(someNumber);
console.log(StringNumber);    //55 (if value is number or 55)
console.log(typeof StringNumber);  //output:string //to check number gets converted into string or not.