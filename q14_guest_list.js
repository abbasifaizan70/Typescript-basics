/* Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people
you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */
var guest_list = ['Asif', "Bilal", 'Faiq'];
guest_list.map(function (guest) {
    return console.log("".concat(guest, " Shab, Ap ku mn dawat dyta hun dinner ke Monal pay."));
});
