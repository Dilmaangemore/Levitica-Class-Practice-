isRunning=true;
let Car ={
    "Name" : "TATA",
    "Model" : "TRIAGO",
    "Year" : "2022",
    "color" : "bleck",
    "Milage" : "18km/L",
     
    //  start : function() {
    //     if(this.isRunning){
    //         console.log("Engine is already On");
    //     }
        

    // else{
    //     console.log("Engine is starting..");
    //     this.isRunning=true;
    // },

    // stop: () =>{
    //     if(this.isRunning){
    //         console.log("Car engine is stopped");
    //         this.isRunning=false
    //     }
    // } 


}

console.log(delete Car.Milage);
console.log(Car)

// array

let fruits=["Mango", "apple", "Banana", "Graphes"]
fruits[3]="pineapple"; // it will replace 3 -index;

console.log(fruits);
// fruits.get(1);
console.log(fruits.pop())
console.log(fruits);

console.log(fruits.push("Graphes"))
console.log(fruits)

//slice

fruits.slice(2)
console.log(fruits)
//concat

// concat two array 

//spraed operator

let vegetable = ["Allo", "Ladies Finger",]
let vegMix = [...fruits, ...vegetable]
console.log(vegMix)


// destructuring

const {name, model, year} = Car
console.log(`The car name ${name}, Model :${swift}`)





