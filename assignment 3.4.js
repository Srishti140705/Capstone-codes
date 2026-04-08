function myPromise() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Done");
    }, 2000);
  });
}

async function show() {
  let result = await myPromise();
  console.log(result);
}

show();