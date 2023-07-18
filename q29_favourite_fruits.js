/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
var favorite_fruits = ['apple', 'mango', 'grapes'];
if (favorite_fruits.indexOf('apple') !== -1) {
    console.log("i really like apples");
}
if (favorite_fruits.indexOf('bananas') !== -1) {
    console.log("i really like bananas");
}
if (favorite_fruits.indexOf('mango') !== -1) {
    console.log("i really like apples");
}
if (favorite_fruits.indexOf('tomato') !== -1) {
    console.log("i really like tomato");
}
if (favorite_fruits.indexOf('apple') !== -1) {
    console.log("i really like grapes");
}
