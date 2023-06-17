import { describe, expect, it } from 'vitest';
import { DrivingAge } from "../src/drivingAge.js";

describe('drivingAge', () => {
    it('should return can drive', () => {
        const person = {
          name: 'Brian',
          age: 25,
        };
        const drivingAge = new DrivingAge();
        const result = drivingAge.check(person);
        expect(result).toBe(person.name + " is "  + person.age + " and can drive");
    });
    
    it('should return cannot drive', () => {
        const person = {
          name: 'Lucy',
          age: 12,
        };
        const drivingAge = new DrivingAge();
        const result = drivingAge.check(person);
        expect(result).toBe(person.name + " is "+ person.age + " and can\'t drive");
    });
});