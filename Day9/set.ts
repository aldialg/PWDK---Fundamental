const fruits: string[] = ["banana", "apple", "jackfruit", "apple"]

const newFruits = new Set(fruits)
newFruits.add("cherry")
newFruits.delete("banana")

console.log(newFruits.has("apple")) // true
console.log(newFruits) // Set { 'banana', 'apple', 'jackfruit' }

newFruits.forEach((item) => console.log(item)) // apple jackfruit cherry