/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
var make_shirt = function (size, message) {
    console.log("Size of shirt is ".concat(size, ". Shirt should have ").concat(message, " printed on it."));
};
make_shirt(24, 'Nike');
make_shirt(29, 'Couger');
