let word: string = "Hello World"

let num: number = 123

let isFalse: boolean = false

console.log(word)

let upperWord: string = word.toUpperCase() // HELLLO WORLD
let lowerWord: string = word.toLowerCase() // hello world
let replaceWord: string = word.replace("e", "a").toLowerCase()

console.log(upperWord)
console.log(lowerWord)
console.log(replaceWord)

console.log(word.slice(6, 11))
console.log(word.length)
console.log(word.charAt(10))
console.log(word.concat("!"))
console.log(word.search("o"))

console.log(word.replace("o", "a"))

const message: string = `Hello Purwadhika ${word}`
console.log(message)

console.log(typeof num.toString())
console.log(num.toExponential(2))
console.log(num.toPrecision(3))

console.log(Number("123"))

console.log(Boolean(0.1))
console.log(Boolean(0))
console.log(Boolean(" "))