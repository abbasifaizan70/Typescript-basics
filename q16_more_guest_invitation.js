"use strict";
/* More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list. */
var updated_guest_list = ['Asif', "Bilal", 'Faiq'];
var skiped_guest = updated_guest_list.pop();
console.log("".concat(skiped_guest, " is not able to attend dinner"));
updated_guest_list.push('Ali');
console.log('We got bigger table so we are inviting more people');
// Added element at start
updated_guest_list.unshift('Nawab');
// Added element at center
updated_guest_list.splice(Math.round(updated_guest_list.length / 2), 0, 'Tayyab');
// Added element at end
updated_guest_list.push('Umar');
// Send invitation to all
updated_guest_list.map(function (guest) {
    return console.log("".concat(guest, " Shab, Ap ku mn dawat dyta hun dinner ke Monal pay."));
});
module.exports = {};
