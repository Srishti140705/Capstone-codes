/// Q4 (Closure)
function outer() {
  let outerVar = "I'm in the outer scope!";
  function inner() {
    console.log(outerVar);
    outerVar = "Updated"
  }
  return inner;
}

const closure = outer();
closure();
closure();