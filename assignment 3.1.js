function display(x) {
  console.log(x);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(5, 3, display);