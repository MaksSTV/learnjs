
function pow(x, n){

    if(n <= 0){
        console.log("n не является натуральным числом");
        return false;
    }
    else{
        for(i = 1; i < n; i++){
            x *= x;
        }
        return x;
    }

}


/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/