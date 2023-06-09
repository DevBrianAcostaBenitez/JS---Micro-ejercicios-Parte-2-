import { describe, expect, it } from 'vitest';
import FizzBuzz from '../src/FizzBuzz';

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
    it('if number has 3 return Fizz', () => {
        const numb=13
        const fizzBuzz = new FizzBuzz()
        const result = fizzBuzz.check(numb);
        assert.equal(result,"Fizz")
    });
    it('if number has 5 return buzz', () => {
        const numb=25
        const fizzBuzz = new FizzBuzz()
        const result = fizzBuzz.check(numb);
        assert.equal(result,"Buzz")
    });
});