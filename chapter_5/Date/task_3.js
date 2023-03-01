function getLocalDay(date){
    let days = [1,2,3,4,5,6,7];

    return days[date.getDay()] - 1;
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );   
date = new Date(2014, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );    