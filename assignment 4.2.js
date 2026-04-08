console.log("Hoisting with var:");
console.log(a);
var a = 10;
console.log(a);

console.log("Hoisting with let:");
try {
  console.log(b);
  let b = 20;
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Hoisting with const:");
try {
  console.log(c);
  const c = 30;
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Hoisting with function declaration:");
sayHello();

function sayHello() {
  console.log("Hello, World!");
}

console.log("Hoisting with function expression:");
try {
  greet();
  var greet = function() {
    console.log("Greetings!");
  };
} catch (error) {
  console.log("Error:", error.message);
}