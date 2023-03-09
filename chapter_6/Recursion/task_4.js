let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
/*
while(list.next != null){
    console.log(list.value);
    list.next = list.next.next;
}*/

function printListLoop(list) {

    while(list) {
        console.log(list.value);
        list = list.next;
    }
  
  }

function printListRecursion(list){
    console.log(list.value);
    if(list.next){
        printListRecursion(list.next);
    }

}

printListLoop(list);
printListRecursion(list);