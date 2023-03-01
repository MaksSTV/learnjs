function getMaxSubSum(arr){

    let maxSum = 0;

    for(i = 0; i<arr.length; i++){
        let sumFixedStart = 0;
        for (j = i; j < arr.length; j++) {
          sumFixedStart += arr[j];

          if(maxSum < sumFixedStart){
            maxSum = sumFixedStart;
          }

        }
    }

    return maxSum;

}