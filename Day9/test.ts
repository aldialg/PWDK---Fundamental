function format(phone:number) {
    let res = phone.toString()
    return`(${res.slice(0, 3)})-${res.slice(3, 6)}-${res.slice(6, 10)}`
}
let phone = 1234567890
console.log(format(phone)) // (123)-456-7890

