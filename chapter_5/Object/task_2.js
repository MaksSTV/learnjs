function count(obj){

    let count = 0;

    for(let i of Object.keys(obj)){
        count++;
    }

    /**
     * function count(obj) {
        return Object.keys(obj).length;
        }
     */

    return count;
}



let user = {
    name: 'John',
    age: 30
  };
  
  console.log( count(user) ); // 2