/*
Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(),
  which prints the name of each magician in the array. */

const show_magicians = (names:string []):void => {
  for (let name of names) {
    console.log(`Name = ${name}`)
  }
}

show_magicians(['ali', 'asif', 'ahmed'])

