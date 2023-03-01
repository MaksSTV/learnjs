function readNumber(){
    let num = null;
    flag = true;
    
    while(flag){
        num = prompt("Enter number", 0);
        if(isFinite(num)){
            return num;
        }

        if(num === null || num === ''){
            return null;
        }
    }    
}