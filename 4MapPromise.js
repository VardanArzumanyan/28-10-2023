function mapPromise(promise, transform) {
  return promise
    .then((val) => transform(val))
    .catch((err) => Promise.reject(err));
}

const myPromise = new Promise((resolve, reject) => {
  resolve(2);
});
const timesTwo = (val) => val * 2;
mapPromise(myPromise, timesTwo).then((result) => console.log(result)).catch((error)=>console.error(error));
