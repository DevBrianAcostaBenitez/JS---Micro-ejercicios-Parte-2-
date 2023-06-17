import { describe, expect, it } from 'vitest';
import { DniCalculation } from "../src/dniCalculation.js";

describe('dnicheck', () => {
    it('should return x', () => {
        const numbers = {
          number1: "hi",
          number2:453121,
        };
        const dniCalculation = new DniCalculation();
        const result1 =  dniCalculation.dniCalculation(numbers.number1);
        const result2 =  dniCalculation.dniCalculation(numbers.number2);
        expect(result1).toBe("the inputted value is not a number");
        expect(result2).toBe("The letter for the number " + numbers.number2 + " is K");
    });
    
    it('should return canceled', () => {
        const numbers = {
            number1: "hi",
            number2:"it's me",
            number3:"cancel",
        };
        const dniCalculation = new DniCalculation();
        const result1 = dniCalculation.dniCalculation(numbers.number1);
        const result2 = dniCalculation.dniCalculation(numbers.number2);
        const result3 = dniCalculation.dniCalculation(numbers.number3);
        expect(result1).toBe("the inputted value is not a number");
        expect(result2).toBe("the inputted value is not a number");
        expect(result3).toBe("cancelled");
    });
});