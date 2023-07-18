/* Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase. */

let ownName: String = "Faizan abbasi"

console.log(ownName.toLowerCase())

console.log(ownName.toUpperCase())

console.log(ownName.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' '))