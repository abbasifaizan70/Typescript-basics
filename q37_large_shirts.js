"use strict";
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message. */
var make_shirt = function (size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Size of shirt is ".concat(size, ". Shirt should have ").concat(message, " printed on it."));
};
make_shirt();
make_shirt('small', 'Couger');
module.exports = {};
