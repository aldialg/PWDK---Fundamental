// const person1 = {
//     name: "David",
//     age: 25
// }
// const person2 = {
//     name: "Asep",
//     age: 27
// }
// const person1 = {
//     name: "Soleh",
//     age: 24
// }
// const person1 = {
//     name: "Iting",
//     age: 29
// }

class Person {
    name: string
    #age: number
    static phi: number = 3.14

    constructor(nama: string, umur: number) {
        this.name = nama
        this.#age = umur
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

const person1 = new Person("Andi", 20)
const person2 = new Person("Baim", 23)
const person3 = new Person("Dadang", 25)
const person4 = new Person("Ucup", 26)

console.log(person1)
person2.greet()

console.log(Person.phi)
console.log(Date.now())
console.log(Math.PI)
