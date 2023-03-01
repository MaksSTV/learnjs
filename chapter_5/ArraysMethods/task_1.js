function camelize(str){
    let arr = str.split('-');

    let newArr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    return newArr.join('');
}

console.log(camelize("-webkit-transition"))

//camelize("-webkit-transition") == 'WebkitTransition';