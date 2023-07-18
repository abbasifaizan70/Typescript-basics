/*
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make
sure all the information was stored correctly.
*/
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var _b = args_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Example usage
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['optionalFeature', 'sunroof']);
console.log(myCar);
