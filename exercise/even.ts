//exercise 1

// const numberToCheck: number = 25

// if(numberToCheck % 1 == 0) {
//     console.log ("Odd")
// } else {
//     console.log ("Not Odd")
// }

// const numberToCheck: number = 3

// if(numberToCheck % 2 == 0) {
//     console.log ("Even")
// } else {
//     console.log ("Not Even")
// }

//exercise 2

// let exam5: number = 7
// let bagiHabis: number = 0
// for (let i = 1; i <= exam5; i++) {
//     if (exam5 % i == 0) {
//         bagiHabis++
//     }
// }

// if (bagiHabis == 2) {
//     console.log ("is a prime")
// } else {
//     console.log ("is not a prime number")
// }

//exercise 3

// let num: number = 5
// let sum: number = 0
// for (let i = 1; i <= num; i++) {
//     sum = sum + i
// } 

// let num: number = 3
// let sum: number = 0
// for (let i = 1; i <= num; i++) {
//     sum = sum + i
// } 

// console.log (sum)

//exercise 4

// let num: number = 4
// let sum: number = 1
// for (let i = 1; i <= num; i++) {
//     sum = sum * i
// } 

// console.log (sum)


// let num: number = 6
// let sum: number = 1
// for (let i = 1; i <= num; i++) {
//     sum = sum * i
// } 

// console.log (sum)

let num1: number = 0
let num2: number = 1
let next: number
let inp: number = 15

for(let i = 1; i < inp; i++) {
    next= num1+ num2
    num1 = num2
    num2 = next
} 
console.log(num2)

