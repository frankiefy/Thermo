$(document).ready(function() {

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6c6c983ae4efa3d5b78c355cdb07ea77&units=metric', function(data){
    $('#current-temperature').text(data.main.temp);
    $('#current-humidity').text(data.main.humidity)
    $('#current-pressure').text(data.main.pressure)
    $('#current-min-temperature').text(data.main.temp_min)
    $('#current-max-temperature').text(data.main.temp_max)
    $('#location-name').text(data.name)
})

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6c6c983ae4efa3d5b78c355cdb07ea77&units=metric', function(data){
      $('#current-temperature').text(data.main.temp)
      $('#current-humidity').text(data.main.humidity)
      $('#current-pressure').text(data.main.pressure)
      $('#current-min-temperature').text(data.main.temp_min)
      $('#current-max-temperature').text(data.main.temp_max)
      $('#location-name').text(data.name)
    })
  })

  var thermostat = new Thermostat();
  updateDisplay();

  $('#up').click(function() {
    thermostat.up();
    updateDisplay();
  });

  $('#down').click(function() {
    thermostat.down();
    updateDisplay();
  });

  $('#power').click(function() {
    thermostat.togglePowerSavingMode();
    $('#psm').text(thermostat.getPSM());
  });

  $('#reset').click(function() {
    thermostat.reset();
    $('#psm').text(thermostat.getPSM());
    updateDisplay();
  });

  function updateDisplay(){
    $('#temp').text(thermostat.getTemp() + "°C");
    $('#usage').text(thermostat.reportEnergyUsage());
  };



});
