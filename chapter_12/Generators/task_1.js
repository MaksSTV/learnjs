function* pseudoRandom(num) {
    let result = num;

    while(true) {
        result = result * 16807 % 2147483647
        yield result;
    }
}