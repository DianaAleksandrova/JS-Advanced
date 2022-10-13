function fibonacci() {
    let current = 0;
    let next = 1;

    return function() {
        let result = current + next;
        current = next;
        next = result;

        return current;
    };
}

let fib = fibonacci();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13