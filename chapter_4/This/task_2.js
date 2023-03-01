let calculator = {

    sum() {
        return this.a + this.b; 
    },

    mul(){
        return this.a * this.b;
    },

    read(){
        this.a = +prompt('Введите а', 0);
        this.b = +prompt('Введите b', 0);
    }


}