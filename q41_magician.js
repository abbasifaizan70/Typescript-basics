/*
Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(),
  which prints the name of each magician in the array. */
var show_magicians = function (names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log("Name = ".concat(name_1));
    }
};
show_magicians(['ali', 'asif', 'ahmed']);
