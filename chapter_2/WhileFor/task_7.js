let digit = 5;

function checkingSimpleNumber(number){

  let bool = 0;
  for(let i = 2; i < Math.ceil(number); i++){
    if(number % i === 0){
      bool = 1;
      break;
    }
  }

  console.log(bool)

  if(bool === 1){
    console.log("Number is not simple");
  }
  if(bool === 0){
    console.log("Number is simple");
  }
}

checkingSimpleNumber(digit)