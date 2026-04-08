let p = new Promise((res, rej) => {
  let x = 10;
  x == 10 ? res("Success") : rej("Error");
});
p.then(val => console.log(val));