"use strict";
/* No Users: Add an if test to above to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
var usernames = ['QA', 'Developer', 'Admin', 'Tester', 'Manager'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
module.exports = {};
