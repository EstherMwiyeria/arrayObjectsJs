// Given an array of strings, use a function to reverse all the elements in the string in ascending 
//  order and the specific elements in descending order
function arrReverse(arr){
    let arr2 = arr.split("").sort().reverse().join()
    return arr2

}
console.log(arrReverse(["Cynthia","mango","Kenya"]));

// Given an array of objects, each object representing a person with a name and age property, write a function that returns the sum of all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

// Using JS functions and an array of numbers, return positive if an element
//  within the array is positive, 
// negative if an element is negative, else zero

// Given an array of objects, where each object represents an employee with an id, 
// name, and salary property, write a function that returns a new array of employee objects
//  sorted by their salary in ascending order.