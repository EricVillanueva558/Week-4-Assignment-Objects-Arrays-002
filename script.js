// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]



function range(start, end) {
  // Create an empty array to store the range of numbers
  let result = [];
  // Loop from start to end, inclusive
  for (let i = start; i <= end; i++) {
      // Add each number to the result array
      result.push(i);
  }
  // Return the array containing the range
  return result;
}

// Test the range function
console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  
function sum(numbers) {
  // Initialize a variable to hold the sum of numbers
  let total = 0;
  // Iterate through the array and add each number to total
  for (let number of numbers) {
      total += number;
  }
  // Return the computed sum
  return total;
}

// Test the sum function
console.log(sum(range(1, 10))); // 55


  
function reverseArray(array) {
  // Create a new empty array to hold reversed elements
  let reversed = [];
  // Loop through the array backwards
  for (let i = array.length - 1; i >= 0; i--) {
      // Add each element to the new array
      reversed.push(array[i]);
  }
  // Return the new reversed array
  return reversed;
}

// Test the reverseArray function
console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"]




function reverseArrayInPlace(array) {
  // Loop only through the first half of the array
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
      // Temporarily store the current element
      let temp = array[i];
      // Swap the current element with the mirrored element from the end
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
  }
  // This function modifies the original array
}

// Test the reverseArrayInPlace function
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // [5, 4, 3, 2, 1]

  







