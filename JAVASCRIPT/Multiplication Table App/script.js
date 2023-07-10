// var btn = document.getElementById("submit");
// btn.addEventListener(click, multiplicationTable())

// let num = document.getElementById("input").value

function multiplicationTable(){

    var table;
    table='<table id="mtable">'
    let num = parseInt(document.getElementById("input").value)
     console.log(num)
    if(num =="" || num ==null){
        document.getElementById("result").innerHTML="Enter Num"
    }else{
        // let result=parseInt(document.getElementById('input').value)*2; //convert string to
        for(let i=1; i<10; i++){
           table+="<tr><td>" + num+" * "+i+" = "+num*i+"</tr></td>"


        }

        table+="</table>";

        document.getElementById("result").innerHTML=table

    }

}

