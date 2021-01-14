'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("constructor", function () {
    it("temp default of 20 degrees", function () {
      expect(thermostat.temp).toEqual(20);
      });
    });
  describe('up', function(){
    it("increases the temperature", function(){
      thermostat.up(3)
      expect(thermostat.temp).toEqual(23);
    });
  });

  describe('down', function(){
    it("decreases the temperature", function(){
      thermostat.temp = 20
      expect(thermostat.down(2)).toEqual(18);
    });

    it("does not allow to have temperaure lower than 10", function(){
        expect(function(){thermostat.down(11);}).toThrowError('The temperatura cannot be lower than 10 degrees');
      });
  });

});
