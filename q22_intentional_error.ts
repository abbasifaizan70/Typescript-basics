/* Intentional Error: If you haven’t received an array index error in one of your programs yet, 
 try to make one happen.Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program. */

let sampleArray: number[] = [1, 2, 3, 4, 5];

if (sampleArray[20]) {
  console.log(sampleArray[20])
} else {
  console.log('This index is out of bound. ')
}

console.log('Accessing valid index',sampleArray[2])

