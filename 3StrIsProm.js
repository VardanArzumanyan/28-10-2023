function strPromis(prom) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof prom === "string") {
        resolve(prom.toUpperCase());
      }
      reject(prom);
    }, 500);
  });
}

strPromis("qwe")
  .then((val) => console.log(val))
  .catch((val) => console.log(val));
