/*Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

let places: String [] = ['Turkey', 'Germany', 'India', 'New Zeland', 'Pakistan']

console.log('Original Array', places);
console.log('Sorted Array', [...places].sort())
console.log('Re Printed Original Array after sorting', places);
console.log('Reverse Sorted Array', [...places].sort().reverse())
console.log('Re Printed Original Array after reverse sorting', places);
console.log('Reverse Array', places.reverse())
console.log('Re-Reverse Array so it equal to original', places.reverse())
console.log('Original List Sorted Array', places.sort())
console.log('Reversed sorted Original List ', places.reverse())