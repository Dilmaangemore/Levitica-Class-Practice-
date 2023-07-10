// console.log('hello !')
// let age=prompt('what your age !')

// if(age>=18){
//     alert("You are eligible")
// }else
// alert("you are not eligible")
// document.getElementById()

let age=prompt('what your age !')
let user=prompt('Enter your name')

if(age>=18){
    document.getElementById("AlertMsg").innerHTML="Hi "+ user +" you are eligible";
}else
document.getElementById("AlertMsg").innerHTML=`Hi ${user} you are not eligible`

// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
