'use strict';

describe("Thermostat", function() {
  // var airport;
  // var plane;
  // var weather;

  // beforeEach(function(){
    // plane = jasmine.createSpy('plane');
    // weather = jasmine.createSpyObj('weather', ['generate'])
  //   thermostat = new Thermostat();
  // })

  describe("constructor", function () {
    // beforeEach(function(){
    //   weather.generate.and.returnValue(2);
    //   });
      it("temp default of 20 degrees", function () {
        var thermostat = new Thermostat();
        expect(thermostat.temp).toEqual(20);
      })
    })

})
