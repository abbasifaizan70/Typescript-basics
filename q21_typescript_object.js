/* They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items. */
var printPersonDetails = function (person) {
    console.log('Name : ', person.name);
    console.log('Age : ', person.age);
    console.log('DOB : ', person.DOB);
};
printPersonDetails({ name: 'Faizan', age: 23, DOB: new Date('22 Jul, 2023') });
printPersonDetails({ name: 'Ali', age: 29 });
