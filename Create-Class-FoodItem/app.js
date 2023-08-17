//class - template - blueprints
//class Gamer{

//}

// class constructor function



class Gamer{
    // constructor(){
    //     this.gamingName = 'cyborgavn',
    //     this.age = '30'
    // }

    constructor(gamerNames, gamerAges){
        this.gamingNames = gamerNames;
        this.age = gamerAges;
        this.perks = 0;
    }

    login(){
        console.log(this.gamingNames," has successfully logged in");
        console.log(this.age,"is the gamer's age ");
        return this;
    }

    // Uncaught SyntaxError: Unexpected token ',' 

    logout(){
        console.log(this.gamingNames," has successfully logged out");
        console.log(this.age,"is the gamer's age ");
        return this;
    }

    updatePerks(){
        this.perks++;
        console.log("Gamer's updated Perks: "+gamerOne.perks);

    }

}

// var gamerOne = new Gamer();
// var gamerOne = new Gamer('cyborgavn','23');
var gamerTwo = new Gamer('smt','20','20');
//new - creates new empty object
//take that object and sets the value of this to be new empty object
//calls the constructor methods inside the  class
// console.log(gamerOne);
// console.log("Gaming name: " +gamerOne.gamingName);
// console.log("Gaming Perks: " +gamerOne.perks);
// gamerOne.login();
// gamerOne.logout();
// gamerOne.updatePerks();

// var gamerTwo = new Gamer();
// var gamerTwo = new Gamer('smt','20');
var gamerTwo = new Gamer('smt','20','20');
  console.log(gamerTwo);
// console.log("Gaming name: " +gamerTwo.gamingName);
// gamerTwo.login();
// gamerTwo.logout();
// gamerTwo.updatePerks();


//Method chaining
// gamerOne.login().logout().updatePerks();

//app.js:32  Uncaught ReferenceError: gamingOne is not defined


//class inheritance

var gamers = [gamerOne,gamerTwo];

class SuperGamer extends Gamer{
    deleteGamer(gamer){
        gamers = gamers.filter(
            u =>{
                return u.age != gamer.age;
            }
        )
    }
}

var supGamer = new SuperGamer('Sahil','20');
console.log(supGamer);
console.log("Before delete",gamers);
// supGamer.deleteGamer(gamerTwo);
// console.log("After delete",gamers);

gamerOne.deleteGamer(gamerTwo);
//Uncaught TypeError: gamerOne.deleteGamer is not a function

//create a class for Food Item
class FoodItem {
    constructor(name, type, price, calories) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.calories = calories;
    }
  
    displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Price: $${this.price}`);
    console.log(`Calories: ${this.calories}`);
    }
  }
  

const burger = new FoodItem("Classic Burger", "Main Course", 8.99, 550);
burger.displayInfo();
console.log(FoodItem);
  
