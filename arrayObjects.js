// Given an array of strings, use a function to reverse all the elements in the string in ascending 
//  order and the specific elements in descending order
function arrReverse(arr){
    arr.reverse()

    const arr2 = [0, 2]; 
  arr2.forEach((i) => {
    if (arr[i]) {
      arr[i] = arr[i].split('').reverse().join('');
    }
  });
  return arr;
}


console.log(arrReverse(["Cynthia","mango","Kenya"]));

// Given an array of objects, each object representing a person with a name and age property, write a function that returns the sum of all people who are less than 18 years.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

function sumAges(persons) {
    let sum = 0;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].age < 18) {
        sum += persons[i].age;
      }
    }
    return sum;
  }
  const persons = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  const totalAges = sumAges(persons);
  console.log(totalAges);

// Using JS functions and an array of numbers, return positive if an element
//  within the array is positive, 
// negative if an element is negative, else zero

function arrNums(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        return "positive";
      } else if (arr[i] < 0) {
        return "negative";
      }
    }
    return "zero";
  }
  const arr = [2, -5, 8, -3, 0];
  const result = arrNums(arr);
  console.log(result);

// Given an array of objects, where each object represents an employee with an id, 
// name, and salary property, write a function that returns a new array of employee objects
//  sorted by their salary in ascending order.

function sortEmployees(name) {
    
    const sortedEmployees = name.sort((a, b) => a.salary - b.salary);
   
    return sortedEmployees;
  }
  // Example usage
  const name = [
    { id: 1, name: "John", salary: 2500 },
    { id: 2, name: "Emily", salary: 3000 },
    { id: 3, name: "David", salary: 2000 },
    { id: 4, name: "Sarah", salary: 3500 }
  ];
  const sortedEmployees = sortEmployees(name);
  console.log(sortedEmployees);