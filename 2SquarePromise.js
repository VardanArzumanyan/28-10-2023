function squarePromise(promis) {
  return new Promise((resolve, reject) => {
    promis
      .then((prom) => {
        if (typeof prom === "number") {
          resolve(prom * prom);
        } else if (typeof prom === "string") {
          if (!isNaN(Number(prom))) {
            resolve(prom * prom);
          } else {
            reject(`Cannot convert '${prom}'  to a number!`);
          }
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

let promis = Promise.resolve(5);

squarePromise(promis)
  .then((val) => {
    console.log(val);
  })
  .catch((val) => console.log(val));
