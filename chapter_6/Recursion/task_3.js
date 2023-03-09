function fib(digit){
    
    let a0 = 0;
    let a1 = 1;
    let temp = 0;
    let index = 1

    while(index < digit){
        temp = a1;
        a1 = a0 + a1;
        a0 = temp;
        index++;
    }
    return a1;
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(77));