/*let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalary(departament){
    if(Array.isArray(departament)){
        return departament.reduce((prev, cur) => prev += cur.salary, 0);
    }
    else{
        let sum = 0;
        for(let i of Object.values(departament)){
            sum += sumSalary(i);
        }
        return sum;
    }
}

console.log(sumSalary(company));*/

//for
function sumToFor(digit){
    let sum = 0;
    for(let i = digit; i > 0; i--){
        sum += i;
    }
    return sum;
}

console.log(sumToFor(100));

//recursion
function sumToRecursion(digit){
    if(digit === 1){
        return digit;
    }
    else{
        let sum = 0;
        sum += digit + sumToRecursion(digit-1);
        return sum;
    }
}

console.log(sumToRecursion(100));

//arithmetic progression

function sumToProgression(digit){
    return digit * (digit + 1) / 2;
}

console.log(sumToProgression(100));