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
        age: 0,
    };
    person.name = prompt("please write your name");
    person.age = prompt("now write your age")
    drivingAge.check(person);
}