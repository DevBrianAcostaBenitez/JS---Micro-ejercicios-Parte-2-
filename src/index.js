import { DniCalculation } from "../src/dniCalculation.js";
import { DrivingAge } from "../src/drivingAge.js";
document.addEventListener('DOMContentLoaded', function() {
    const dniCalculationButton = document.getElementById('dniCalculationButton');
    dniCalculationButton.addEventListener('click', performDniCalculation);
});
  
function performDniCalculation() {
    const dniCalc = new DniCalculation();
    dniCalc.dniCalculation("");
}

document.addEventListener('DOMContentLoaded', function() {
    const drivingAgeButton = document.getElementById('drivingAgeButton');
    drivingAgeButton.addEventListener('click', AgeCheck);
});

  
function AgeCheck() {
    const drivingAge = new DrivingAge();
    let person= {
        name: "",
        age: -10,
    };
    person.name = prompt("please write your name");
    person.age = prompt("now write your age")
    if(person.name === "" || person.age === -10) {
        alert("invalid values")
    }else{
    drivingAge.check(person);
    }
}