function topSalary(obj){

    let topsalary = 0;
    let topname = null;
    for(let [name,salary] of Object.entries(obj)){

        if(salary > topsalary){
            topsalary = salary;
            topname = name;
        }
    }

    return topname;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));