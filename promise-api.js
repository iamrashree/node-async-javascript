
// Resolve the Promise
const p = Promise.resolve({ id: 1 });
p.then(data => console.log(data));

// const q = Promise.reject(new Error('Error application'));
// q.catch(error => console.log(error));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        //resolve(2);
        reject(new Error('Error message'));
    }, 2000);
});

// Parallel promise execution, if any one of promise is failed will nt get result
Promise.all([p1, p2])
    .then(data => console.log('data', data))
    .catch(err => console.log('Error', err.message));

// Gives result any one of the promise gets executed.
Promise.race([p1, p2])
    .then(data => console.log(data))
    .catch(err => console.log('Error', err.message));

