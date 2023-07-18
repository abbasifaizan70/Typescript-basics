/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

let personal_name: String = '\n\t Faizan Abbasi\n\t \n\t \n\t \n\t '
console.log("with whitespace")
console.log(personal_name)

console.log("without whitespace")
console.log(personal_name.trim())