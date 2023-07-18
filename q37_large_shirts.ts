/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message. */

export = {}

const make_shirt = (size: string = 'large', message: string = 'I love TypeScript') => {
  console.log(`Size of shirt is ${size}. Shirt should have ${message} printed on it.`)
}

make_shirt();
make_shirt('small', 'Couger');

