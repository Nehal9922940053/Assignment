// let data=[
//     {
//         name:"Jenny",
//         age:23,
//     },
//     {
//         name:"Joe",
//         age:25,
//     },
// ]

// for (const d of data){
//     console.log(d.name);
// }

// const set =new Set([10,10,20,30,40,40,50,50,50]);

// console.log(set);


//Array Destructuring
// const numbers = [5,8,2,9,1];
// const [y,z] =numbers;

// console.log(y,z);

//spread operator
// const user = {name:"Abhijeet", age:28};
// const admin ={admin:true,...user};

// console.log(admin);


// const data={
//     name:"Rajshekar",
//     loc:"Mumbai",
//     age:24,
//     password:"admin12345"
// };

// const stringifieddata= JSON.stringify(data,['name','password']);
// console.log(stringifieddata);


// console.log(Number(10)===Number(10));
// console.log(Boolean(false)===Boolean(false));
// console.log(Symbol('abc')===Symbol('abc'));

// function getData(item,list) {
// return list.push(item);//length of the array=2
// }


// const data =getData('Delhi',['Chennai','Bengaluru']);
// console.log(data);

//Rest parameter-> ... infinite number of arguments
//Spread operator
// function getData(...item) {
//     return item;//length of the array=2
//     }
    
    
//     const data =getData('Delhi',['Chennai','Bengaluru']);
//     console.log(data);


let data =["India","Canada","Brazil","France","Germany"];
let newcountries=["China","USA","Australia"];
//spread operator

// data=newcountries;//copy by reference
// console.log(data);
// data.push("Japan");
// console.log(newcountries);


// console.log(data);
// console.log(newcountries);

// let newdata = [...newcountries,"New Zealand","Switzerland",...data,"Japan"];
// console.log(newdata);


//spread operator and rest parameter
// function getData(fruitslist,remainingfruit,...items) {
//     return[...fruitslist,...items,remainingfruit]
// }
// let result=getData(["Apple","Banana"],"Grapes","Mangoes")

// console.log(result);

class Counter{
    constructor(){
        this.count=0;
    }

    increment(){
        this.count++;
    }
}

const counterone=new Counter();
counterone.increment();
counterone.increment();

const countertwo=new Counter();
countertwo.increment();

console.log(counterone.count);
console.log(countertwo.count);