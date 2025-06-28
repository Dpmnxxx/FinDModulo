const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
arr.push([30,31,32,33,34,35,36,37,38,39]); // Adds a new row at the end
console.log(arr);

arr[2].splice(4, 1);  // Removes the number at index 4 from the third row
console.log(arr);

arr[0].reverse();  // Reverse the first row
console.log(arr);


// Type your code above this line!