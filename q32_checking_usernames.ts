/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
  If it has, print a message that the person will need to enter a new username. 
  If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

let current_users: string[] = ['Ali', 'John', 'Asif', 'Faizan', 'Usama'];
let new_users: string[] = ['Tayyab', 'John', 'Asif', 'Khan', 'Faheem'];

for (let new_user of new_users) {
  let new_user_exists = false;

  for (let current_user of current_users) {
    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      new_user_exists = true;
      break;
    }
  }

  if (new_user_exists) {
    console.log(`Username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Username '${new_user}' is available.`);
  }
}





