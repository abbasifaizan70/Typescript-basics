/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that 
  you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
  Each time you pop a name from your list, 
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to 
  make sure you actually have an empty list at the end of your program.*/

export = {}

let updated_guest_list: String[] = ['Asif', "Bilal", 'Faiq'];

let skiped_guest: String | undefined = updated_guest_list.pop();
console.log(`${skiped_guest} is not able to attend dinner`);

updated_guest_list.push('Ali');

console.log('We got bigger table so we are inviting more people');

// Added element at start
updated_guest_list.unshift('Nawab');

// Added element at center
updated_guest_list.splice(Math.round(updated_guest_list.length / 2), 0, 'Tayyab')

// Added element at end
updated_guest_list.push('Umar');

// Send invitation to all
updated_guest_list.map((guest: String) => {
  return console.log(`${guest} Shab, Ap ku mn dawat dyta hun dinner ke Monal pay.`)
})

console.log('you can invite only two people for dinner.')

while (updated_guest_list.length > 2) {
  console.log(`${updated_guest_list.pop()} sorry you can’t invite them to dinner`)
}

updated_guest_list.map((guest: String) => {
  return console.log(`${guest} Shab, you’re still invited`)
})

updated_guest_list = []
console.log(`My list of guest is empty you can check length`, updated_guest_list.length)


