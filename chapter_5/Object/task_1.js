function sumSalaries(obj){
    let sum = 0;

    for(salaries of Object.values(obj)){
        sum += salaries;
    }

    return sum;
}



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650