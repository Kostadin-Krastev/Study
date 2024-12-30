const weddingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('Just Married');
    } else {
      reject('it is me, it is not you');
    }
  }, 2000);
});

weddingPromise
  .then((result) => console.log(result)) // if the promis succeed
  .catch((reason) => console.log(`Wedding is of - ${reason}`)); // if the promise fail

console.log('Promise is given');
