// Assignment Operator

var age=25;
var salay=255550;


if(age<60){
    age+=20;
}
console.log(age);

let i=20;
i %= 2;
console.log(i)

var nu= '127';
if(nu==127){
    //true : string will be converted in number


}
console.log(nu===127)// it compare type 

/*..........................................*/

let sum = '20'+'10'+3 //20103

// type conversion
let sum2= Number('20')+Number('10')+3 // 33

var userAge= '18'
if(userAge==18){
    console.log(true, 'loose')
}

if(userAge===18){
    console.log(true, 'loose')
}

var promocode="Flat21"
if(promocode != "Flat21"){
console.log("Invalid Promocode")
}
else console.log("promocode Successful")

let totalprice=2499
if(totalprice>=2499){
    console.log("you are eligible for 10% discount")
}else console.log("you will get 5% discount")




