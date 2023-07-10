let a= prompt("hey, What's your age !")
// what ever value input it will return in string
console.log(typeof a);

a=Number.parseInt(a);
console.log(typeof a) //number

// nested if -else if- else

if(a>0){
    alert("this is a valid age")
    
}else if(age<9){
    alert("you are a kid !")
}
else if(a<18 && a>9){
    alert("you can eligible after 18 !")
}
else{
    alert("this is invalid age")
}