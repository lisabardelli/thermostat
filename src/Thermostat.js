'use strict';
class Thermostat {
    constructor() {
        this.temp = 20
        this.min_temp = 10
    }

    up(number) {
      return (this.temp += number)
    }

    down(number) {
      if(this.min_temp > 10) {
      } else {
        throw new Error ("The temperatura cannot be lower than 10 degrees")
      }
      return this.temp
    }
}
