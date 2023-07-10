

window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", claculateBmi);
};

function claculateBmi(){


     let height = parseInt(document.querySelector("#height").value);

     let weight = parseInt(document.querySelector("#weight").value);  

        let result= document.querySelector("#result")
        let bmi = (weight/((height*height)/1000)).toFixed(2)

        if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

        else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

        else{

        

      console.log(bmi, height, weight);

        if(bmi<18.6)
         result.innerHTML=
        `Under_weight : <span>${bmi}</span>`
        

        else if(bmi >= 18.6 && bmi <24.9) 
        result.innerHTML=
        `Normal_Weight : <span>${bmi}</span>`
        
        else
        result.innerHTML=` Over_Weight : <span>${bmi}</span>`

        }

}