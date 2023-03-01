function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(){
        this.value += +prompt('Введите value', 0);
    }

}