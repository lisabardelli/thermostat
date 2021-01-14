'use strict';
class Thermostat {
    constructor() {
        this.temp = 20
    }

    up(number) {
      return (this.temp += number)
    }

    down(number) {
      if((this.temp - number) < 10) {
        throw new Error ("The temperatura cannot be lower than 10 degrees")
      } else {
        return (this.temp -= number)
      }
    }
}
