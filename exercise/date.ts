let Ex1: number = 400
let Ex2: number = 366

let year1: number = Math.floor(Ex1/365)
let num1: number= Ex1 % 365
let months1: number = Math.floor(num1/30)
let days1: number = num1 % 30

console.log(`Ex1: ${year1} year, ${months1} month, ${days1} day`)

let year2: number = Math.floor(Ex2/365)
let num2: number= Ex2 % 365
let months2: number = Math.floor(num2/30)
let days2: number = num2 % 30

console.log(`Ex2: ${year2} year, ${months2} month, ${days2} day`)