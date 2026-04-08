/// Immediately Invoked Function Expression (IIFE)
const counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log("Counter reset");
    },
  };
})();

counter.increment();
counter.increment();
counter.reset();