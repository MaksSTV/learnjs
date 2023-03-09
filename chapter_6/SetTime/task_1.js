/*function printNumbers(from, to){

    let curr = from;

    let timeId = setInterval(function(){
        console.log(curr);
        if (curr == to) {
            clearInterval(timeId);
        }
        curr++;
    }, 1000);
}*/

function printNumbers(from, to){

    let curr = from;

    setTimeout(function go(){
        console.log(curr);
        if(curr < to){
            setTimeout(go, 1000);
        }
        curr++;
    }, 1000)
}

printNumbers(10, 15);