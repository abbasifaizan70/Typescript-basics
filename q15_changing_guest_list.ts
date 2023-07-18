/* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

let updated_guest_list: String[] = ['Asif', "Bilal", 'Faiq'];

// using map as it does not change original array. It will create new one that you can store or print.

let skiped_guest: String | undefined = updated_guest_list.pop();
console.log(`${skiped_guest} is not able to attend dinner`);

updated_guest_list.push('Ali');

updated_guest_list.map((guest: String) => {
  return console.log(`${guest} Shab, Ap ku mn dawat dyta hun dinner ke Monal pay.`)
})