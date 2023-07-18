"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and
one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ['ali', 'asif', 'ahmed'];
var show_magicians = function (names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log("Name = ".concat(name_1));
    }
};
var make_great = function (names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
    return names;
};
var copy_names = make_great(__spreadArray([], names, true));
show_magicians(names);
show_magicians(copy_names);
module.exports = {};
