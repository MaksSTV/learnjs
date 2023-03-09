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

function reversePrintListLoop(list) {
    temp = [];
    while(list) {
        temp.push(list.value);
        list = list.next;
    }
    temp = temp.reverse();
    temp.forEach((element, index, array) => {
        console.log(array[index]);
    });
}

function reversePrintListRecursion(list){
    
    if(list.next){
        reversePrintListRecursion(list.next);
    }
    console.log(list.value);

}

reversePrintListLoop(list);
reversePrintListRecursion(list);