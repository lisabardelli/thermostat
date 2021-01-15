$(document).ready( function() {
 var thermostat = new Thermostat();

 updateTemperature()

 $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=11d6e8a90d125082deb9c4084ecaa519&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

$('.turn-up').click(function(){
   thermostat.up(1)
   updateTemperature()
})

$('.turn-down').click(function(){
   thermostat.down(1)
   updateTemperature()
})

$('.reset').click(function(){
   thermostat.reset()
   updateTemperature()
})

$('.power-save-toggle').click( function(){
   thermostat.power_mode()
   updateTemperature()
   $("#power_mode").text(thermostat.power_save);
})

function updateTemperature() {
 $(".temp-display").text(thermostat.current_temp);
 $("#power_mode").text(thermostat.power_save);
 thermostat.energy_usage();
 $(".temp-display").attr('id', thermostat.energy_consumption);
}

})
