/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

export = {}

let names = ['ali', 'asif', 'ahmed']

const show_magicians = (names:string []):void => {
  for (let name of names) {
    console.log(`Name = ${name}`)
  }
}

const make_great = (names:string []):void => {
   for (let i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
}

make_great(names)

show_magicians(names)

