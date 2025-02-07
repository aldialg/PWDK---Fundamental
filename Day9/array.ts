const arrnum = [1, 2, 3, 4, 5]

const newArrnum: number[] = []
arrnum.forEach((item) => newArrnum.push(item + 5))
console.log(newArrnum)

const newArr2 = arrnum.map((item) => item +5)
console.log(newArr2)