function Calculator() {
    this.sum = function() {
        return this.a + this.b; 
    };

    this.mul = function(){
        return this.a * this.b;
    },

    this.read = function(){
        this.a = +prompt('Введите а', 0);
        this.b = +prompt('Введите b', 0);
    }

}
  