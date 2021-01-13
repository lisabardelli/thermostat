'use strict';

describe("Thermostat", function() {
  // var airport;
  // var plane;
  // var weather;
  var thermostat;

  beforeEach(function(){
    // plane = jasmine.createSpy('plane');
    // weather = jasmine.createSpyObj('weather', ['generate'])
    thermostat = new Thermostat();
  })

  describe("constructor", function () {

    // beforeEach(function(){
    //   weather.generate.and.returnValue(2);
    //   });
    it("temp default of 20 degrees", function () {
      expect(thermostat.temp).toEqual(20);
      })
    })
  describe('up', function(){
    it("increases the temperature", function(){
      thermostat.up(3)
      expect(thermostat.temp).toEqual(23)
    })
  })

  describe('down', function(){
    it("decreases the temperature", function(){
      thermostat.down(2)
      expect(thermostat.temp).toEqual(18)
    })
  })
})
