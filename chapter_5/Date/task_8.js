function formatDate(date){
    let now = new Date();

    let diff = (now - date)/1000;

    if(diff <= 1){
        return "Прямо сейчас";
    }
    else if(diff <= 60){
        return `${Math.floor(diff)} секунд назад`;
    }
    else if(diff <= 3600){
        return `${Math.floor(diff/60)} минут назад`;
    }
    else{
        return `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );

/**Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */