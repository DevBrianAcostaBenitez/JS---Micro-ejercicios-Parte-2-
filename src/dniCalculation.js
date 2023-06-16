export class DniCalculation {
    constructor() {
      this.validLetters = [
        "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
      ];
    }
  dniCalculation(number) {
    let cancelled = false;
    while (cancelled == false) {
      const isTestEnvironment = typeof window === "undefined";
      if (!isTestEnvironment) {
        number = prompt(
          "Please enter a number, you can cancel this program at any time by inputting cancel"
        );
      }
      if (isNaN(number)) {
        if (number === "cancel") {
          if (isTestEnvironment) {
            return "cancelled";
          } else {
            alert("program finished");
            cancelled == true;
            break;
          }
        } else {
          if (isTestEnvironment) {
            return "the inputted value is not a number";
          } else {
            while (isNaN(number)) {
              alert("the inputted value is not a number");
              number = prompt(
                "Please enter a number, you can cancel this program at any time by inputting cancel"
              );
            }
          }
        }
      }

      if (number < 0 || number > 99999999) {
        if (isTestEnvironment) {
          return "the number should be between 0 and 99999999";
        } else {
          while (number < 0 || number > 99999999) {
            alert("the number should be between 0 and 99999999");
            number = prompt(
              "Please enter a number, you can cancel this program at any time by inputting cancel"
            );
          }
        }
      }
      const remainder = number % 23;
      const letter = this.validLetters[remainder];
      if (isTestEnvironment) {
        return "The letter for the number " + number + " is " + letter;
      } else {
        alert("The letter for the number " + number + " is " + letter);
      }
    }
  }
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const dniCalc = new DniCalculation();
    dniCalc.dniCalculation("");
  });
}
