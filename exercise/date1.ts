let day1: number = 400
let day2: number = 366

let year1: number = Math.floor(day1/365)
let remainingDay1: number = day1 % 365
let month1: number = Math.floor(remainingDay1/30)
let days1: number = remainingDay1 % 30

console.log(`day1: ${year1} year, ${month1} month, ${days1} days`)


let year2: number = Math.floor(day2/365)
let remainingDay2: number = day2 % 365
let month2: number = Math.floor(remainingDay2/30)
let days2: number = remainingDay2 % 30

console.log(`day2: ${year2} year, ${month2} month, ${days2} days`)