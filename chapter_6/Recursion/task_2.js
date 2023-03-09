function fuctorial(digit){
    return (digit === 1) ? 1 : digit * fuctorial(digit-1)
}

console.log(fuctorial(5));