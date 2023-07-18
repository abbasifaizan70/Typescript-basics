/* Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people 
you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */

let guest_list: String[] = ['Asif', "Bilal", 'Faiq'];

// using map as it does not change original array. It will create new one that you can store or print.
guest_list.map((guest: String) => {
  return console.log(`${guest} Shab, Ap ku mn dawat dyta hun dinner ke Monal pay.`)
})