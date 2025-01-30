// // contoh function declaration: menjumlahkan
// function sum(num1: number, num2: number) {
//     return num1 + num2
// }

// contoh function expression: menjumlahkan
// const sum2 = function sum(num1: number, num2: number) {
//     return num1 + num2
// }

// console.log(sum2(10, 15))

// //contoh function cek ganjil atau genap
// function checkNumber (dash: number) {
//     return dash % 2 == 0 ? "Even" : "Odd"
// }

// console.log(checkNumber(22))
// console.log(checkNumber(51))
// console.log(checkNumber(112))

// default parameter di function
// function multiply(a: number, b: number = 1) {
//     return a * b
// }

// console.log (multiply(10))

// rest parameter
// function myFunc(a:string, b: string, ...other: string[]) {
//     console.log(a)
//     console.log(b)
//     console.log(other)
// }

// myFunc("andi", "budi", "caca", "doni")


// Nested function
// function getMessage(firstName: String) {
//     function sayHello() {
//         return "Hello " + firstName
//     }
//     function welcomeMessage() {
//         return "Welcome to Purwadhika"
// }

//  return sayHello() + ", " + welcomeMessage()
// }

// console.log(getMessage("Aldi"))

// Closure function
// function greating(name: string) {
//     const defaultMessage: string ="Hello "

//     return function () {
//         return defaultMessage + name
//     }
// }

// const greatingDavid = greating("David")
// console.log(greatingDavid())

// currying function
// function multiplier(factor: number) {
//     return function(number: number) {
//         return factor * number
//     }
// }

// const mul4 = multiplier(4)
// const mul3 = multiplier(3)

// console.log(mul4(3))
// console.log(mul4(5))
// console.log(mul3(5))

// Recursive function
// function countDown(fromNumber: number) {
//     console.log(fromNumber)

//     let nextNumber: number = fromNumber -1

//     if (nextNumber > 0) {
//         countDown(nextNumber)
//     }
// }

// countDown(10)


// Arrow Function
// const sum3 = (num1: number, num2: number) => num1 + num2
// console.log(sum3(1, 2))

