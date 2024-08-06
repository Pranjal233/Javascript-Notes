console.log('hello world')

const accountId= 234
let accountEmail= "abc@gmail.com"
var accountPassword ="23456"
accountCity = "Mumbai"

//accountId =2  //not allowed we cant change the value of const

accountEmail= "xyz@gmail.com"
 accountPassword ="2346"
accountCity = "Pune"

//Note : Prefer not to use var because of issue in block scope and functional scope

console.log(accountId);

console.log(accountEmail);

//Note if u have to print all above variables value instaed of using separate console log use console table.

console.table([accountId, accountEmail,accountPassword,accountCity])
