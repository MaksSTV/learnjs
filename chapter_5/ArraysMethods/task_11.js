function getAverageAge(users){
    
    let average = 0;

    users.forEach(element => {
        average += element.age;
    });

    return average / users.length;

}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );