let name = prompt('what is your name')
let age= prompt('what is your age')
let entryAge=18;
let seniorAge=60;

alert('your name is '+name +" " +'and you are ' + age+" "+ ' years onload.')

if((age > entryAge) && (age <= seniorAge)){
   // console.log('welcome to La La Land! ')
    document.write('welcome to La La Land! ')
}
else if(age > seniorAge){
   // console.log('your ride is free..Have a good day!')
    document.write('your ride is free..Have a good day!')

}else{
    console.log('Sorry...buddy!');

}