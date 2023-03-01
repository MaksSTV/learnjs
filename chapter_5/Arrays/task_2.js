let arr = ["Джаз","Блюз"];

arr.push["Рок-н-ролл"];

arr[Math.floor((arr.length - 1) / 2)] = "Классика";

console.log(arr.shift());
arr.unshift["Регги"];
arr.unshift["Рэп "];