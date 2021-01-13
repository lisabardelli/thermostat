'use strict';
class Thermostat {
    constructor() {
        this.temp = 20
    }

    up(number) {
      return (this.temp += number)
    }

    down(number) {
      return (this.temp -= number)
    }
}
