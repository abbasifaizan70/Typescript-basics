/* Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time. */
var names = ['Asif', 'Hammad', "Bilal"];
// without loop
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// with loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
