function unique(arr) {
    //return arr.filter(item => item.includes(item)) error

    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
        result.push(str);
        }
    }

  return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O