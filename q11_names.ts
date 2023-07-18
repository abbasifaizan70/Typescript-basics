/* Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time. */

let names: String[] = ['Asif', 'Hammad', "Bilal"];

// without loop
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// with loop
for (var friendName of names) {
  console.log(friendName)
}