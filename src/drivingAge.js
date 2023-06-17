export class DrivingAge {
    check(person) {
      const isTestEnvironment = typeof window === "undefined";
      if (person.age >= 18) {
        if (isTestEnvironment) {
          return person.name + " is "+ person.age + " and can drive";
        }else{
          alert (person.name + " is "+ person.age + " and can drive");
        }
      } else {
        if (isTestEnvironment) {
          return person.name + " is "+ person.age + " and can\'t drive";
        }else{
          alert (person.name + " is "+ person.age + " and can\'t drive");
        }
      }
    }
  }

