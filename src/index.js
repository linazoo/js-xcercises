import "./styles.css";

//. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor

const is_array = (input) => {
  return Array.isArray(input);
};

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.

const array_Clone = (input) => {
  const newArray = [...input];
  return newArray;
};

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :

const first = (array, n) => {
  if (n) {
    if (n > 0) {
      return array.slice(0, n);
    } else {
      return [];
    }
  } else {
    return array[0];
  }
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
