// var message = "Welcome to Node js Session";
// console.log(message);

// const mul = 10*10;
// const sub = 10-5;
// console.log(mul);
// console.log(`The multiplication of 10*10 = ${mul}`);
// console.log(sub);
// console.log(`The Subtraction of 10-5 = ${sub}`);


// const moment = require('moment');
// const date = moment(new Date).format("MMM Do YYYY, h:mm:ss a");
// console.log(date);

console.log(global)

// global.setTimeout(()=>{
//     console.log("Timeout set for 10 sec");
//     clearInterval(int)
// },10000);

setTimeout(()=>{
        console.log("Timeout set for 10 sec");
        clearInterval(int)
     },10000);

const int = global.setInterval(()=>{
console.log("Interval enabled for every 3sec");
},3000);


console.log(__dirname);
console.log(__filename);