"use strict";
/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
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
};
make_great(names);
show_magicians(names);
module.exports = {};
