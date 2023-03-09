function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.set = function(value){
        return counter.count = value;
    }

    counter.decrease = function(){
        return counter.count--;
    }
    
    return counter;
}
  
let counter = makeCounter();
  
console.log( counter() );
console.log(counter.set(5));
console.log( counter.decrease() );
console.log( counter() );