export class DrivingAge {
    check(person) {
      if (person.age >= 18) {
        return `${person.name} is ${person.age} and can drive`;
      } else {
        return `${person.name} is ${person.age} and can't drive`;
      }
    }
  }