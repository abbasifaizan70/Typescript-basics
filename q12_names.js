/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name. */
var friendNames = ['Asif', 'Hammad', "Bilal"];
// with loop
friendNames.forEach(function (name) {
    console.log("Hi, Welcome to my frinds list ".concat(name));
});
