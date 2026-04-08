let numbers = [1,2,3,4,5];
console.log("Original Array:");
console.log(numbers);

console.log("Using forEach:");
numbers.forEach((value, index) => {
    console.log("Index:",index, "Value:", value);
});

numbers.push(6);
console.log("After push:");
console.log(numbers);

let squaredNumbers = numbers.map(num => num * num);
console.log("After map (square of each element):");
console.log(squaredNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("After filter (even numbers):");
console.log(evenNumbers);