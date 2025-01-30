let arr: string[] = ["a", "b", "c", "d", "e"]
let arr2: string[] = new Array("a", "b", "c", "d", "e")

// console.log(arr)
// console.log(arr2)

//cetak index ke 1
// console.log(arr2[1])

//nambah value baru di belakang
// arr.push("f")

// //hapus value terakhir
// arr.pop()

// //tambah value baru di depan
// arr.unshift("z")

// //hapus value pertama
// arr.shift()

//hapus index ke 1 sebanyak 3 dan sisipkan huruf g
//arr.splice(1, 3,"g")

//menghapus dan menyisipkan huruf ke 3
//arr.splice(1, 3,"g", "h", "i")

//menyisipkan huruf di ke 3
// arr.splice(3, 1,"g")

//console.log(arr)

// arr.sort()
// arr.reverse()

// console.log(arr)

//memfilter angka genap
// const numArr: number[] = [1,2,3,4,5]
// const evenNum: number [] = numArr.filter((item) => item % 2 == 0)

// console.log(evenNum)


const fruits: string[] = ["apple", "orange", "plum", "banana"]

// fruits.forEach((item) => {
//     console.log(item)
// })

for (let fruit of fruits) {
    console.log(fruit)
}