let age: number = 15

if(age >= 17) {
    console.log("You can now create an ID Card")
} else{
    console.log("You are not old enough to create an ID Card")
}



let grade: string = "B"

if (grade === "A") {
    console.log("Excellent Result!")
} else if (grade === "B") {
    console.log("Great Result!")
} else if (grade === "C") {
    console.log("Average Result!")
} else {
    console.log("Invalid Grade!")
}


let now: Date = new Date()
let day: number = now.getDay() 

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    case 6:
        console.log("Sabtu")
        break
    default:
        console.log("Invalid day!")
}


let x: number = 6
let y: number = 3

console.log(x < 10 && y >1) // true

console.log(x < 10 || y >1) // true

console.log(!(x==y)) // true

console.log((x==y)) // false


const str: string = "Typescript"

if (str == "Typescript") {
    console.log ("Typescript")
} else {
    console.log("Not Typescript")
}

//ternary operator (mempersingkat conditional)
console.log(str == "Typescript" ? "Typescript" : "Not Typescript")

//short circuiting

// || or
let value1: string = "Andi" // true
let name1: string = value1 || "Budi" //Andi

console.log(name1)

// && and
let value2: string = "Andi" 
let name2: string = value2 && "Budi" //

console.log(name2)

