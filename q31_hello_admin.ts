/* No Users: Add an if test to above to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

export = {}

let usernames: string[] = ['QA', 'Developer', 'Admin', 'Tester', 'Manager'];

for (let username of usernames) {
  if (username === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

usernames = []

if (usernames.length === 0) {
  console.log("We need to find some users!");
}