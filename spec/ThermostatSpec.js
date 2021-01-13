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
      thermostat = new Thermostat();
      thermostat.temp = 20
      thermostat.down(2)
      expect(thermostat.temp).toEqual(18)
    })

    it("does not allow to have temperaure lower than 10", function(){
      thermostat.temp = 10
        expect(function() {
          thermostat.down(1);
        }).toThrowError("The temperatura cannot be lower than 10 degrees");
    })
  })


})
