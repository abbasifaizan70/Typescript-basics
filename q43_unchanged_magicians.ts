/*
Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and 
one array with the Great added to each magician’s name.
*/

export = {}

let names:string[] = ['ali', 'asif', 'ahmed']

const show_magicians = (names:string []):void => {
  for (let name of names) {
    console.log(`Name = ${name}`)
  }
}

const make_great = (names:string []):string[] => {
   for (let i = 0; i < names.length; i++) {
      names[i] = "the Great " + names[i];
   }
  return names
}

let copy_names: string[] = make_great([...names])

show_magicians(names)
show_magicians(copy_names)

