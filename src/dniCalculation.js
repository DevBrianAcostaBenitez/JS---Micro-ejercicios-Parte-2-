export class DniCalculation {
    constructor() {
      this.validLetters = [
        "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
      ];
    }
  
    dniCalculation(number) {
        if (isNaN(number)) {
          if (number === "cancel") {
            return "cancelled";
          }
          return "the inputted value is not a number";
        }
      
     
        if (number < 0 || number> 99999999) {
          return "the number should be between 0 and 99999999";
        }
      
        const remainder = number % 23;
        const letter = this.validLetters[remainder];
        return `The letter for the number ${number} is ${letter}`;
      }
    }