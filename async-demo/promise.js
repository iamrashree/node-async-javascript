
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        // reject(new Error('message'));
    }, 2000);
});

promise
    .then((result) => { console.log(result) })
    .catch((error) => { console.log(error.message) });
