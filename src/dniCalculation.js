export class DniCalculation {
    constructor() {
      this.validLetters = [
        "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
      ];
    }
  dniCalculation(number) {
    while (true) {
      const isTestEnvironment = typeof window === "undefined";
      if (!isTestEnvironment) {
          number = this.promptForNumber()
          if (number === null) {
            break
          }
      }
      if (isNaN(number)) {
          if (isTestEnvironment) {
            return "the inputted value is not a number";
          } else {
            alert("the inputted value is not a number")
            continue;
          }
      }
      

      if (number < 0 || number > 99999999) {
        if (isTestEnvironment) {
          return "the number should be between 0 and 99999999";
        } else {
            alert("the number should be between 0 and 99999999");
            continue;
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

  promptForNumber(){
    return prompt(
      "Please enter a number, you can cancel this program at any time by pressing cancel"
    );
  }
}

