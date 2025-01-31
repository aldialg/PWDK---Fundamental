class kendaraan {
    roda: number

    constructor(roda: number) {
        this.roda = roda
    }
    berjalan() {
        console.log("Kendaraan Berjalan")
    }
}

class Mobil extends kendaraan {
    brand: string
    price: number

    constructor(brand: string, price: number) {
        super(4)
        this.brand = brand
        this.price = price
    }
}

const mobil1 = new Mobil("BMW", 800000000)
console.log(mobil1)