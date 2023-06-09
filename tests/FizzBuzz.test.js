import { describe, expect, it } from 'vitest';
import FizzBuzz from '../src/FizzBuzz';
import FizzBuzzStage2 from '../src/FizzBuzzStage2';
describe('FizzBuzz', () => {
    
    it('if number divisible by 3 return Fizz', () => {
        const numb=3 
        const fizzBuzz = new FizzBuzz()
        const result = fizzBuzz.check(numb);
        assert.equal(result,"Fizz")
    });
    it('if number divisible by 5 return Buzz', () => {
        const numb=5
        const fizzBuzz = new FizzBuzz()
        const result = fizzBuzz.check(numb);
        assert.equal(result, "Buzz")
    });

    it('if number divisible by 5 and 3 return FizzBuzz', () => {
        const numb=15
        const fizzBuzz = new FizzBuzz()
        const result = fizzBuzz.check(numb);
        assert.equal(result,"FizzBuzz")
    });
    it('generates the array with correct values', () => {
        const expected = [
            1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",
            11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"
        ];
        const fizzBuzz = new FizzBuzz()
        const result = fizzBuzz.FizzBuzzArray();
        for (let i = 0; i < expected.length; i++) {
            assert.equal(result[i], expected[i]);
        }
    });
   
    it('if number has 3 or divisible by 3 return Fizz', () => {
        const numb=13
        const fizzBuzz = new FizzBuzzStage2()
        const result = fizzBuzz.check(numb);
        assert.equal(result,"Fizz")
    });
    it('if number has 5 or divisible by 3 return return buzz', () => {
        const numb=25
        const fizzBuzz = new FizzBuzzStage2()
        const result = fizzBuzz.check(numb);
        assert.equal(result,"Buzz")
    });


});