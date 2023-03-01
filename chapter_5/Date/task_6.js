function getSecondsToday(){

    let now = new Date;
    //return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let dif = now - today;
    return Math.round(dif/1000);

}

console.log(getSecondsToday());

