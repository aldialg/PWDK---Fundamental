interface ICar {
    brand: string
    model: string
    price: number
}

const car: ICar = {
    brand: "BMW",
    model: "M135i xDrive", 
    price: 800000000,
}

console.log(car)

// interface Iperson {
//     name: string
//     age: number
//     hobby?: string
//     adress?: {
//         city: string
//         country: string
//     }
// }

// const person: Iperson = {
//     name: "Frengky",
//     age: 26
// }

// //add property
// person.hobby = "Coding"
// person.name = "Tatang"
// //delete property
// delete person.hobby

// console.log(person.name)
// console.log(person["age"])
// person.adress = {
//     city: "Bandung",
//     country: "Indonesia"
// }

// //optiional chaining ?
// console.log(person.adress?.city)

// console.log(Object.keys(person))

// interface IUser {
//     name: string
//     email: string
//     age: number
// }

// const user: IUser = {
//     name: "Frengky", 
//     email: "frengky@gmail.com",
//     age: 26
// }

// for (let key in user) {
//     console.log(key)
//     console.log (user[key as keyof typeof user])
// }